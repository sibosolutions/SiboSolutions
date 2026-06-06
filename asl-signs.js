/*
  ASL alphabet — cartoon hand style.
  Bold rounded finger blocks, thick outlines, light fill on dark background.
  viewBox="0 0 64 76"  |  right hand, palm facing viewer
  Thumb: LEFT    Pinky: RIGHT
*/
(function () {
  const H  = '#F2E8EE';   // hand fill (light pink/cream — pops on dark cells)
  const S  = '#E8507A';   // stroke (rose)
  const sw = 3;           // stroke-width
  const q  = `fill="${H}" stroke="${S}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"`;
  const n  = `fill="none" stroke="${S}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"`;

  // ── Finger & palm building blocks ─────────────────────────────
  // Wide rounded palm
  const P  = `<rect x="6" y="42" width="52" height="28" rx="9" ${q}/>`;

  // Thumb variants
  const TL = `<path d="M8,48 Q0,44 0,52 Q0,60 8,58" ${q}/>`;          // extended left
  const TA = `<path d="M8,56 Q22,48 28,50" ${n}/>`;                    // folded across
  const TS = `<path d="M6,42 Q24,36 32,42" fill="none" stroke="${S}" stroke-width="4" stroke-linecap="round"/>`; // over fist (S)
  const TT = `<path d="M8,44 Q18,36 20,42" ${n} stroke-width="3.5"/>`;  // between i+m (T)

  // Extended fingers — wide rounded rects, clearly visible
  const iE = `<rect x="8"  y="14" width="12" height="29" rx="6" ${q}/>`;
  const mE = `<rect x="21" y="9"  width="12" height="34" rx="6" ${q}/>`;
  const rE = `<rect x="34" y="11" width="12" height="32" rx="6" ${q}/>`;
  const pE = `<rect x="47" y="20" width="11" height="23" rx="5" ${q}/>`;

  // Curled fingers — short round nubs (clearly NOT extended)
  const iC = `<rect x="9"  y="38" width="10" height="8" rx="4" ${q}/>`;
  const mC = `<rect x="22" y="37" width="10" height="9" rx="4" ${q}/>`;
  const rC = `<rect x="35" y="38" width="10" height="8" rx="4" ${q}/>`;
  const pC = `<rect x="48" y="40" width="9"  height="6" rx="3" ${q}/>`;

  // Bent fingers (half-height — for E/M/N)
  const iB = `<rect x="8"  y="28" width="12" height="15" rx="6" ${q}/>`;
  const mB = `<rect x="21" y="26" width="12" height="17" rx="6" ${q}/>`;
  const rB = `<rect x="34" y="28" width="12" height="15" rx="6" ${q}/>`;
  const pB = `<rect x="47" y="33" width="11" height="11" rx="5" ${q}/>`;

  // ── Signs A–Z ─────────────────────────────────────────────────
  const signs = {

    // A — closed fist; thumb rests to the side, not over the top
    A: P + iC + mC + rC + pC +
       `<path d="M8,48 Q0,46 0,53 Q0,60 8,58" ${q}/>`,

    // B — four tall fingers; thumb folds across lower palm
    B: P + iE + mE + rE + pE + TA,

    // C — thick curved C shape (fingers + thumb form C)
    C: `<path d="M52,8 Q34,2 20,11 Q6,22 6,38 Q6,54 20,65 Q34,72 52,68"
          fill="none" stroke="${S}" stroke-width="9" stroke-linecap="round"/>`,

    // D — index straight up; rest + thumb curve into a D
    D: iE +
       `<path d="M20,16 Q34,8 46,18 Q56,28 56,38 Q56,48 46,58 Q34,66 20,58"
          fill="${H}" stroke="${S}" stroke-width="${sw}" stroke-linejoin="round"/>` + P,

    // E — claw: all four fingers bent, thumb tucked underneath
    E: P + iB + mB + rB + pB +
       `<path d="M8,60 Q18,66 24,63" ${n}/>`,

    // F — middle+ring+pinky up; index curled to meet thumb (small circle)
    F: P + mE + rE + pE + iC +
       `<ellipse cx="12" cy="54" rx="10" ry="9" fill="${H}" stroke="${S}" stroke-width="${sw}"/>`,

    // G — side view: index points sideways, thumb parallel below
    G: `<rect x="4"  y="28" width="28" height="36" rx="8" ${q}/>` +
       `<rect x="24" y="24" width="36" height="16" rx="8" ${q}/>` +
       `<rect x="24" y="44" width="28" height="13" rx="6" ${q}/>`,

    // H — side view: two fingers pointing sideways, stacked
    H: `<rect x="4"  y="24" width="26" height="38" rx="8" ${q}/>` +
       `<rect x="22" y="20" width="38" height="15" rx="7" ${q}/>` +
       `<rect x="22" y="37" width="38" height="15" rx="7" ${q}/>`,

    // I — ONLY pinky up; rest are curled nubs; thumb alongside
    I: P + iC + mC + rC + pE + TL,

    // J — like I; pinky traces a J downward (dashed arc)
    J: P + iC + mC + rC + pE + TL +
       `<path d="M58,20 Q64,34 62,50 Q60,62 48,66"
          fill="none" stroke="${S}" stroke-width="2.5" stroke-dasharray="4,3" stroke-linecap="round"/>`,

    // K — index + angled middle both up; thumb pokes up between them
    K: P + iE +
       `<rect x="24" y="12" width="12" height="31" rx="6" ${q} transform="rotate(10,30,42)"/>` +
       rC + pC +
       `<path d="M8,54 Q18,42 22,47" ${n} stroke-width="3.5"/>`,

    // L — index straight up; thumb extends far left — unmistakable L
    L: P + iE + mC + rC + pC +
       `<rect x="-10" y="42" width="28" height="14" rx="7" ${q}/>`,

    // M — THREE fingers bent down; clearly three bumps over thumb
    M: P +
       `<rect x="8"  y="26" width="12" height="18" rx="6" ${q}/>` +
       `<rect x="21" y="24" width="12" height="20" rx="6" ${q}/>` +
       `<rect x="34" y="26" width="12" height="18" rx="6" ${q}/>` +
       pC + TA,

    // N — TWO fingers bent down; clearly two bumps (compare to M=3)
    N: P +
       `<rect x="8"  y="26" width="12" height="18" rx="6" ${q}/>` +
       `<rect x="21" y="24" width="12" height="20" rx="6" ${q}/>` +
       rC + pC + TA,

    // O — fingers + thumb curve to form a clean O
    O: `<ellipse cx="32" cy="42" rx="24" ry="28" fill="${H}" stroke="${S}" stroke-width="${sw}"/>` +
       `<ellipse cx="32" cy="42" rx="10" ry="14" fill="none" stroke="${S}" stroke-width="2.5"/>`,

    // P — like K rotated: index + middle point downward
    P: `<rect x="14" y="20" width="14" height="46" rx="7" ${q}/>` +
       `<rect x="30" y="20" width="14" height="40" rx="7" ${q} transform="rotate(9,37,40)"/>` +
       `<rect x="6"  y="18" width="44" height="16" rx="7" ${q}/>` +
       `<path d="M16,28 Q6,20 8,28" ${n} stroke-width="3"/>`,

    // Q — like G but pointing down: index + thumb aim downward
    Q: `<rect x="6"  y="6"  width="44" height="16" rx="7" ${q}/>` +
       `<rect x="14" y="14" width="14" height="52" rx="7" ${q}/>` +
       `<rect x="30" y="14" width="12" height="44" rx="6" ${q}/>`,

    // R — index crossed OVER middle (twist them together)
    R: P +
       `<rect x="9"  y="12" width="12" height="31" rx="6" ${q} transform="rotate(-7,15,42)"/>` +
       `<rect x="22" y="12" width="12" height="31" rx="6" ${q} transform="rotate(7,28,42)"/>` +
       rC + pC + TL,

    // S — fist; thumb wraps ACROSS the front over all fingers
    S: P + iC + mC + rC + pC + TS,

    // T — fist; thumb tip shows between index and middle
    T: P + iC + mC + rC + pC + TT,

    // U — index + middle up TOGETHER (two touching pillars)
    U: P + iE + mE + rC + pC + TL,

    // V — index + middle SPREAD in V / peace sign
    V: P +
       `<rect x="7"  y="14" width="12" height="29" rx="6" ${q} transform="rotate(-10,13,42)"/>` +
       `<rect x="31" y="14" width="12" height="29" rx="6" ${q} transform="rotate(10,37,42)"/>` +
       rC + pC + TL,

    // W — THREE fingers spread (one extra pillar vs V)
    W: P +
       `<rect x="7"  y="14" width="11" height="29" rx="5" ${q} transform="rotate(-8,12,42)"/>` +
       `<rect x="21" y="9"  width="12" height="34" rx="6" ${q}/>` +
       `<rect x="36" y="14" width="11" height="29" rx="5" ${q} transform="rotate(8,41,42)"/>` +
       pC + TA,

    // X — index bent into a bold hook; all others curled
    X: P +
       `<path d="M8,42 Q8,28 13,20 Q20,12 22,20 Q22,30 14,36"
          fill="${H}" stroke="${S}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>` +
       mC + rC + pC + TL,

    // Y — thumb out left + pinky out right = shaka / hang-loose
    Y: P + iC + mC + rC + pE + TL,

    // Z — index pillar; dashed Z trace shows the air-writing motion
    Z: P + iE + mC + rC + pC + TL +
       `<path d="M8,56 L40,56 L8,68 L40,68"
          fill="none" stroke="${S}" stroke-width="2.5" stroke-dasharray="4,3" stroke-linecap="round"/>`,
  };

  // Inject into every .asl-letter tile
  document.querySelectorAll('.asl-letter').forEach(tile => {
    const letter = tile.querySelector('.letter')?.textContent?.trim();
    const svg    = signs[letter];
    if (!svg) return;
    const sign = tile.querySelector('.sign');
    if (sign) sign.innerHTML =
      `<svg viewBox="0 0 64 76" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
  });
})();
