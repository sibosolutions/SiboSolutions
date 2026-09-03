/*
  ASL fingerspelling alphabet carousel.
  Cycles the .fingerspell-img through the public-domain ASL letter
  illustrations from Wikimedia Commons (Category:ASL letters, by wpclipart.com).
*/
(function () {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const imgUrl = (letter) => `https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_${letter}.svg`;

  const FRAME_MS = 1400; // how long each letter stays on screen
  const FADE_MS = 220;   // must match .fingerspell-stage transition duration in CSS

  function initCarousel(root) {
    const img      = root.querySelector('.fingerspell-img');
    const letterEl = root.querySelector('.fingerspell-letter');
    const stage    = root.querySelector('.fingerspell-stage');
    const toggle   = root.querySelector('.fingerspell-toggle');
    const toggleLabel = toggle?.querySelector('.fingerspell-toggle-label');
    if (!img || !letterEl || !stage || !toggle) return;

    // Preload every letter so cycling doesn't stutter waiting on the network.
    LETTERS.forEach((letter) => { new Image().src = imgUrl(letter); });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0;
    let timer = null;
    let playing = false;

    function render(letter) {
      img.src = imgUrl(letter);
      img.alt = `ASL fingerspelling hand shape for the letter ${letter}`;
      letterEl.textContent = letter;
    }

    function step() {
      stage.classList.add('is-fading');
      window.setTimeout(() => {
        index = (index + 1) % LETTERS.length;
        render(LETTERS[index]);
        stage.classList.remove('is-fading');
      }, FADE_MS);
    }

    function setPlaying(next) {
      playing = next;
      toggle.classList.toggle('is-paused', !playing);
      if (toggleLabel) toggleLabel.textContent = playing ? 'Pause animation' : 'Play animation';

      if (playing) {
        timer = window.setInterval(step, FRAME_MS);
      } else if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    render(LETTERS[index]);
    toggle.addEventListener('click', () => setPlaying(!playing));
    setPlaying(!reduceMotion);
  }

  document.querySelectorAll('.fingerspell-carousel').forEach(initCarousel);
})();
