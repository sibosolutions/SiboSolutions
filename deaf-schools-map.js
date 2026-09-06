/*
  Map of schools for the deaf around the world.
  U.S. list favors long-standing, publicly operated state schools (sourced
  from Wikipedia's "Schools for the deaf in the United States" category)
  plus a few well-known specialized/university-affiliated programs.
  International entries are a representative sample, not exhaustive —
  one or a few well-known schools per country. Most link to a confirmed,
  current official website, looked up individually rather than guessed;
  a handful (marked in comments below) have no findable dedicated website
  but were confirmed to be currently operating via recent news/reports, and
  are shown without a link at the user's request. City-level coordinates are
  approximate. Not guaranteed exhaustive or current — see the caveat text
  next to the map on the page. (Two U.S. schools originally considered —
  Central North Carolina School for the Deaf and the Virginia School for
  the Deaf, Blind and Multi-Disabled at Hampton — were confirmed closed
  and excluded.)
*/
(function () {
  const SCHOOLS = [
    { name: 'Alabama Institute for the Deaf and Blind', city: 'Talladega', state: 'AL', lat: 33.435, lon: -86.105, url: 'https://www.aidb.org/', country: 'USA' },
    { name: 'Alaska State School for the Deaf and Hard of Hearing', city: 'Anchorage', state: 'AK', lat: 61.218, lon: -149.900, url: 'https://aksdhh.asdk12.org/', country: 'USA' },
    { name: 'American School for the Deaf', city: 'West Hartford', state: 'CT', lat: 41.762, lon: -72.742, url: 'https://www.asd-1817.org/', country: 'USA' },
    { name: 'Arizona State Schools for the Deaf and the Blind', city: 'Tucson', state: 'AZ', lat: 32.222, lon: -110.926, url: 'https://asdb.az.gov/', country: 'USA' },
    { name: 'Arkansas School for the Deaf', city: 'Little Rock', state: 'AR', lat: 34.746, lon: -92.289, url: 'https://asd.ade.arkansas.gov/', country: 'USA' },
    { name: 'Atlanta Area School for the Deaf', city: 'Clarkston', state: 'GA', lat: 33.812, lon: -84.238, url: 'https://www.aasdweb.com/', country: 'USA' },
    { name: 'Colorado School for the Deaf and the Blind', city: 'Colorado Springs', state: 'CO', lat: 38.833, lon: -104.821, url: 'https://www.csdb.org/', country: 'USA' },
    { name: 'Delaware School for the Deaf', city: 'Newark', state: 'DE', lat: 39.683, lon: -75.750, url: 'https://www.dsdeaf.org/', country: 'USA' },
    { name: 'Florida School for the Deaf and the Blind', city: 'St. Augustine', state: 'FL', lat: 29.901, lon: -81.313, url: 'https://www.fsdbk12.org/', country: 'USA' },
    { name: 'Georgia School for the Deaf', city: 'Cave Spring', state: 'GA', lat: 34.107, lon: -85.336, url: 'https://www.gsdweb.org/', country: 'USA' },
    { name: 'Hawaii School for the Deaf and the Blind', city: 'Honolulu', state: 'HI', lat: 21.306, lon: -157.858, url: 'https://www.hsdb.k12.hi.us/', country: 'USA' },
    { name: 'Idaho Educational Services for the Deaf and the Blind', city: 'Gooding', state: 'ID', lat: 42.938, lon: -114.713, url: 'https://www.iesdb.org/', country: 'USA' },
    { name: 'Illinois School for the Deaf', city: 'Jacksonville', state: 'IL', lat: 39.734, lon: -90.229, url: 'https://www.isd.illinois.gov/', country: 'USA' },
    { name: 'Indiana School for the Deaf', city: 'Indianapolis', state: 'IN', lat: 39.768, lon: -86.158, url: 'https://www.deafhoosiers.com/', country: 'USA' },
    { name: 'Iowa School for the Deaf', city: 'Council Bluffs', state: 'IA', lat: 41.262, lon: -95.861, url: 'https://iowaschoolforthedeaf.org/', country: 'USA' },
    { name: 'Kansas School for the Deaf', city: 'Olathe', state: 'KS', lat: 38.881, lon: -94.819, url: 'https://www.kansasdeaf.gov/', country: 'USA' },
    { name: 'Kentucky School for the Deaf', city: 'Danville', state: 'KY', lat: 37.645, lon: -84.772, url: 'https://www.ksd.kyschools.us/', country: 'USA' },
    { name: 'Louisiana School for the Deaf', city: 'Baton Rouge', state: 'LA', lat: 30.451, lon: -91.187, url: 'https://www.ssdofla.org/o/lsd', country: 'USA' },
    { name: 'Governor Baxter School for the Deaf', city: 'Falmouth', state: 'ME', lat: 43.720, lon: -70.241, url: 'https://www.mecdhh.org/', country: 'USA' },
    { name: 'Maryland School for the Deaf', city: 'Frederick', state: 'MD', lat: 39.414, lon: -77.410, url: 'https://www.msd.edu/', country: 'USA' },
    { name: 'Marie H. Katzenbach School for the Deaf', city: 'Trenton', state: 'NJ', lat: 40.217, lon: -74.762, url: 'https://www.nj.gov/education/mksd/', country: 'USA' },
    { name: 'Michigan School for the Deaf', city: 'Flint', state: 'MI', lat: 43.013, lon: -83.688, url: 'https://www.michiganschoolforthedeaf.org/', country: 'USA' },
    { name: 'Minnesota State Academy for the Deaf', city: 'Faribault', state: 'MN', lat: 44.295, lon: -93.269, url: 'https://msad.msa.state.mn.us/', country: 'USA' },
    { name: 'Mississippi School for the Deaf', city: 'Jackson', state: 'MS', lat: 32.299, lon: -90.185, url: 'https://msdbk12.org/', country: 'USA' },
    { name: 'Missouri School for the Deaf', city: 'Fulton', state: 'MO', lat: 38.847, lon: -91.949, url: 'https://msd.dese.mo.gov/', country: 'USA' },
    { name: 'Montana School for the Deaf and the Blind', city: 'Great Falls', state: 'MT', lat: 47.505, lon: -111.300, url: 'https://www.msdbmustangs.org/', country: 'USA' },
    { name: 'New Mexico School for the Deaf', city: 'Santa Fe', state: 'NM', lat: 35.687, lon: -105.938, url: 'https://www.nmsd.k12.nm.us/', country: 'USA' },
    { name: 'New York State School for the Deaf', city: 'Rome', state: 'NY', lat: 43.213, lon: -75.456, url: 'https://www.nysed.gov/new-york-state-school-deaf', country: 'USA' },
    { name: 'Lexington School for the Deaf', city: 'Jackson Heights', state: 'NY', lat: 40.752, lon: -73.883, url: 'https://www.lexnyc.org/', country: 'USA' },
    { name: "St. Mary's School for the Deaf", city: 'Buffalo', state: 'NY', lat: 42.886, lon: -78.878, url: 'https://www.smsdk12.org/', country: 'USA' },
    { name: 'North Carolina School for the Deaf', city: 'Morganton', state: 'NC', lat: 35.744, lon: -81.685, url: 'https://www.ncsd.net/', country: 'USA' },
    { name: 'Eastern North Carolina School for the Deaf', city: 'Wilson', state: 'NC', lat: 35.721, lon: -77.916, url: 'https://www.encsd.net/', country: 'USA' },
    { name: 'North Dakota School for the Deaf', city: 'Devils Lake', state: 'ND', lat: 48.113, lon: -98.865, url: 'https://www.ndsd.nd.gov/', country: 'USA' },
    { name: 'Ohio School for the Deaf', city: 'Columbus', state: 'OH', lat: 39.961, lon: -82.999, url: 'https://odbes.ohio.gov/', country: 'USA' },
    { name: 'Oklahoma School for the Deaf', city: 'Sulphur', state: 'OK', lat: 34.512, lon: -96.977, url: 'https://www.osd.k12.ok.us/', country: 'USA' },
    { name: 'Pennsylvania School for the Deaf', city: 'Philadelphia', state: 'PA', lat: 39.952, lon: -75.165, url: 'https://psd.org/', country: 'USA' },
    { name: 'Western Pennsylvania School for the Deaf', city: 'Pittsburgh', state: 'PA', lat: 40.440, lon: -79.996, url: 'https://www.wpsd.org/', country: 'USA' },
    { name: 'Rhode Island School for the Deaf', city: 'Providence', state: 'RI', lat: 41.824, lon: -71.413, url: 'https://www.rideaf.net/', country: 'USA' },
    { name: 'South Carolina School for the Deaf and the Blind', city: 'Spartanburg', state: 'SC', lat: 34.949, lon: -81.932, url: 'https://www.scsdb.org/', country: 'USA' },
    { name: 'Tennessee School for the Deaf', city: 'Knoxville', state: 'TN', lat: 35.960, lon: -83.921, url: 'https://www.tsdeaf.org/', country: 'USA' },
    { name: 'West Tennessee School for the Deaf', city: 'Jackson', state: 'TN', lat: 35.615, lon: -88.814, url: 'https://www.tsdeaf.org/apps/pages/WTSD', country: 'USA' },
    { name: 'Texas School for the Deaf', city: 'Austin', state: 'TX', lat: 30.267, lon: -97.743, url: 'https://www.tsd.texas.gov/', country: 'USA' },
    { name: 'Utah Schools for the Deaf and the Blind', city: 'Ogden', state: 'UT', lat: 41.223, lon: -111.974, url: 'https://www.usdb.org/', country: 'USA' },
    { name: 'Virginia School for the Deaf and the Blind', city: 'Staunton', state: 'VA', lat: 38.150, lon: -79.072, url: 'https://www.vsdb.k12.va.us/', country: 'USA' },
    { name: 'Washington School for the Deaf', city: 'Vancouver', state: 'WA', lat: 45.639, lon: -122.660, url: 'https://www.wsd.wa.gov/', country: 'USA' },
    { name: 'West Virginia Schools for the Deaf and the Blind', city: 'Romney', state: 'WV', lat: 39.339, lon: -78.756, url: 'https://www.wvsdb2.state.k12.wv.us/', country: 'USA' },
    { name: 'Wisconsin School for the Deaf', city: 'Delavan', state: 'WI', lat: 42.633, lon: -88.643, url: 'https://www.wsd.k12.wi.us/', country: 'USA' },
    { name: 'Kendall Demonstration Elementary School (Gallaudet University)', city: 'Washington', state: 'DC', lat: 38.907, lon: -76.995, url: 'https://kdes.gallaudet.edu/', country: 'USA' },

    // International — a representative sample, not exhaustive. Each was
    // individually verified to have a current, working official website;
    // several other countries were researched but skipped when no live
    // school website could be confirmed (only historical/association pages).
    { name: 'Royal School for the Deaf Derby', city: 'Derby', lat: 52.916, lon: -1.474, url: 'https://www.rsdd.org.uk/', country: 'United Kingdom' },
    { name: 'Sir James Whitney School for the Deaf', city: 'Belleville, Ontario', lat: 44.163, lon: -77.386, url: 'https://www.pdsbnet.ca/en/schools/sir-james-whitney', country: 'Canada' },
    { name: 'Instituto Nacional de Educação de Surdos (INES)', city: 'Rio de Janeiro', lat: -22.935, lon: -43.187, url: 'https://www.ines.gov.br/', country: 'Brazil' },
    { name: 'Instituto Nacional para Sordos (INSOR)', city: 'Bogotá', lat: 4.711, lon: -74.072, url: 'https://www.insor.gov.co/home/', country: 'Colombia' },
    { name: 'Victorian College for the Deaf', city: 'Melbourne', lat: -37.839, lon: 144.981, url: 'https://www.vcd.vic.edu.au/', country: 'Australia' },
    { name: 'Kelston Deaf Education Centre', city: 'Auckland', lat: -36.897, lon: 174.647, url: 'https://www.kdec.school.nz/', country: 'New Zealand' },
    { name: 'Special Needs Education School for the Deaf, University of Tsukuba', city: 'Tsukuba', lat: 36.083, lon: 140.113, url: 'https://www.deaf-s.tsukuba.ac.jp/language/english/', country: 'Japan' },
    { name: 'Philippine School for the Deaf', city: 'Pasay City, Manila', lat: 14.541, lon: 120.998, url: 'https://psd.depedpasay.ph/', country: 'Philippines' },
    { name: 'St. Louis College for the Deaf', city: 'Chennai', lat: 13.006, lon: 80.257, url: 'http://www.stlouiscollegefordeaf.org/', country: 'India' },
    { name: 'St Vincent School for the Deaf', city: 'Johannesburg', lat: -26.146, lon: 28.055, url: 'https://www.stvincentschool.org.za/', country: 'South Africa' },
    { name: 'Institut National de Jeunes Sourds de Paris', city: 'Paris', lat: 48.843, lon: 2.343, url: 'https://www.injs-paris.fr/', country: 'France' },
    { name: 'Ernst-Adolf-Eschke-Schule für Gehörlose', city: 'Berlin', lat: 52.516, lon: 13.276, url: 'https://eschke-schule.de/', country: 'Germany' },
    { name: 'Centro Educativo Ponce de León', city: 'Madrid', lat: 40.384, lon: -3.706, url: 'https://ponceleon.org/', country: 'Spain' },
    { name: 'ISISS Magarotto (Istituto Statale per Sordi)', city: 'Rome', lat: 41.925, lon: 12.517, url: 'https://www.isiss-magarotto.edu.it/', country: 'Italy' },
    { name: 'Royal Kentalis', city: 'Sint-Michielsgestel', lat: 51.646, lon: 5.353, url: 'https://www.kentalis.nl/', country: 'Netherlands' },
    { name: 'Manillaskolan', city: 'Stockholm', lat: 59.332, lon: 18.036, url: 'https://www.spsm.se/manillaskolan', country: 'Sweden' },
    { name: 'Holy Family School for the Deaf', city: 'Dublin', lat: 53.365, lon: -6.313, url: 'https://holyfamilydeafschool.ie/', country: 'Ireland' },

    // Confirmed currently operating via recent news/reports, but no dedicated
    // official school website could be found — included at the user's request.
    { name: 'Wesley School for the Hearing Impaired', city: 'Lagos', lat: 6.495, lon: 3.354, country: 'Nigeria' },
    { name: 'Kisii School for the Deaf', city: 'Kisii', lat: -0.678, lon: 34.775, country: 'Kenya' },
    { name: "Hattie Friedland (Ki'ach) School for the Deaf", city: 'Jerusalem', lat: 31.771, lon: 35.217, country: 'Israel' },
    { name: 'Nanjing School for the Deaf', city: 'Nanjing', lat: 32.061, lon: 118.796, country: 'China' },
    { name: 'Deaf Unit Old Cairo', city: 'Cairo', lat: 30.006, lon: 31.230, country: 'Egypt' },
    { name: 'VICKtory School for the Deaf', city: 'Addis Ababa', lat: 9.005, lon: 38.763, country: 'Ethiopia' },
    { name: 'Escuela Especial N.º 28 "Prof. Bartolomé Ayrolo"', city: 'Buenos Aires', lat: -34.601, lon: -58.522, country: 'Argentina' },
  ];

  function initMap() {
    const container = document.getElementById('deaf-schools-map');
    if (!container || typeof L === 'undefined') return;

    const map = L.map(container, {
      scrollWheelZoom: false,
      minZoom: 2,
    }).setView([25, 10], 2);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16,
    }).addTo(map);

    // Reference layer adds place labels and the country outline on top of the base.
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
    }).addTo(map);

    // The Esri reference tiles only draw state lines once zoomed in past the
    // whole-country view, so state borders are drawn explicitly here instead —
    // visible at every zoom level, including the default full-US view.
    fetch('https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI/data/geojson/us-states.json')
      .then((res) => res.json())
      .then((geojson) => {
        L.geoJSON(geojson, {
          style: {
            color: '#9BABC9',
            weight: 1,
            opacity: 0.55,
            fill: false,
          },
          interactive: false,
        }).addTo(map);
      })
      .catch(() => {});

    const icon = L.divIcon({
      className: 'school-marker',
      iconSize: [14, 14],
    });

    SCHOOLS.forEach((school) => {
      const region = school.state || school.country;
      const link = school.url
        ? `<br><a href="${school.url}" target="_blank" rel="noopener">Visit website &rarr;</a>`
        : `<br><em>No website available</em>`;
      L.marker([school.lat, school.lon], { icon })
        .addTo(map)
        .bindTooltip(school.name, { direction: 'top', offset: [0, -8], className: 'school-tooltip' })
        .bindPopup(`<strong>${school.name}</strong><br>${school.city}, ${region}${link}`);
    });
  }

  function populateList() {
    const list = document.getElementById('schools-list');
    if (!list) return;
    const sorted = [...SCHOOLS].sort((a, b) => {
      if (a.country !== b.country) return a.country.localeCompare(b.country);
      const aKey = a.state || a.city;
      const bKey = b.state || b.city;
      return aKey === bKey ? a.name.localeCompare(b.name) : aKey.localeCompare(bKey);
    });
    list.innerHTML = sorted.map((school) => {
      const nameHtml = school.url
        ? `<a class="school-name" href="${school.url}" target="_blank" rel="noopener">${school.name}<span class="sr-only"> (opens in a new tab)</span></a>`
        : `<span class="school-name school-name-plain">${school.name}</span>`;
      return `
      <li>
        ${nameHtml}
        <span class="school-city">${school.city}, ${school.state || school.country}</span>
      </li>
    `;
    }).join('');
  }

  initMap();
  populateList();
})();
