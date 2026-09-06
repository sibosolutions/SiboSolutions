/*
  Map of schools for the deaf in the United States.
  List favors long-standing, publicly operated state schools (sourced from
  Wikipedia's "Schools for the deaf in the United States" category) plus a
  few well-known specialized/university-affiliated programs. Websites were
  looked up individually rather than guessed. City-level coordinates are
  approximate. Not guaranteed exhaustive or current — see the caveat text
  next to the map on the page. (Two schools originally considered — Central
  North Carolina School for the Deaf and the Virginia School for the Deaf,
  Blind and Multi-Disabled at Hampton — were confirmed closed and excluded.)
*/
(function () {
  const SCHOOLS = [
    { name: 'Alabama Institute for the Deaf and Blind', city: 'Talladega', state: 'AL', lat: 33.435, lon: -86.105, url: 'https://www.aidb.org/' },
    { name: 'Alaska State School for the Deaf and Hard of Hearing', city: 'Anchorage', state: 'AK', lat: 61.218, lon: -149.900, url: 'https://aksdhh.asdk12.org/' },
    { name: 'American School for the Deaf', city: 'West Hartford', state: 'CT', lat: 41.762, lon: -72.742, url: 'https://www.asd-1817.org/' },
    { name: 'Arizona State Schools for the Deaf and the Blind', city: 'Tucson', state: 'AZ', lat: 32.222, lon: -110.926, url: 'https://asdb.az.gov/' },
    { name: 'Arkansas School for the Deaf', city: 'Little Rock', state: 'AR', lat: 34.746, lon: -92.289, url: 'https://asd.ade.arkansas.gov/' },
    { name: 'Atlanta Area School for the Deaf', city: 'Clarkston', state: 'GA', lat: 33.812, lon: -84.238, url: 'https://www.aasdweb.com/' },
    { name: 'Colorado School for the Deaf and the Blind', city: 'Colorado Springs', state: 'CO', lat: 38.833, lon: -104.821, url: 'https://www.csdb.org/' },
    { name: 'Delaware School for the Deaf', city: 'Newark', state: 'DE', lat: 39.683, lon: -75.750, url: 'https://www.dsdeaf.org/' },
    { name: 'Florida School for the Deaf and the Blind', city: 'St. Augustine', state: 'FL', lat: 29.901, lon: -81.313, url: 'https://www.fsdbk12.org/' },
    { name: 'Georgia School for the Deaf', city: 'Cave Spring', state: 'GA', lat: 34.107, lon: -85.336, url: 'https://www.gsdweb.org/' },
    { name: 'Hawaii School for the Deaf and the Blind', city: 'Honolulu', state: 'HI', lat: 21.306, lon: -157.858, url: 'https://www.hsdb.k12.hi.us/' },
    { name: 'Idaho Educational Services for the Deaf and the Blind', city: 'Gooding', state: 'ID', lat: 42.938, lon: -114.713, url: 'https://www.iesdb.org/' },
    { name: 'Illinois School for the Deaf', city: 'Jacksonville', state: 'IL', lat: 39.734, lon: -90.229, url: 'https://www.isd.illinois.gov/' },
    { name: 'Indiana School for the Deaf', city: 'Indianapolis', state: 'IN', lat: 39.768, lon: -86.158, url: 'https://www.deafhoosiers.com/' },
    { name: 'Iowa School for the Deaf', city: 'Council Bluffs', state: 'IA', lat: 41.262, lon: -95.861, url: 'https://iowaschoolforthedeaf.org/' },
    { name: 'Kansas School for the Deaf', city: 'Olathe', state: 'KS', lat: 38.881, lon: -94.819, url: 'https://www.kansasdeaf.gov/' },
    { name: 'Kentucky School for the Deaf', city: 'Danville', state: 'KY', lat: 37.645, lon: -84.772, url: 'https://www.ksd.kyschools.us/' },
    { name: 'Louisiana School for the Deaf', city: 'Baton Rouge', state: 'LA', lat: 30.451, lon: -91.187, url: 'https://www.ssdofla.org/o/lsd' },
    { name: 'Governor Baxter School for the Deaf', city: 'Falmouth', state: 'ME', lat: 43.720, lon: -70.241, url: 'https://www.mecdhh.org/' },
    { name: 'Maryland School for the Deaf', city: 'Frederick', state: 'MD', lat: 39.414, lon: -77.410, url: 'https://www.msd.edu/' },
    { name: 'Marie H. Katzenbach School for the Deaf', city: 'Trenton', state: 'NJ', lat: 40.217, lon: -74.762, url: 'https://www.nj.gov/education/mksd/' },
    { name: 'Michigan School for the Deaf', city: 'Flint', state: 'MI', lat: 43.013, lon: -83.688, url: 'https://www.michiganschoolforthedeaf.org/' },
    { name: 'Minnesota State Academy for the Deaf', city: 'Faribault', state: 'MN', lat: 44.295, lon: -93.269, url: 'https://msad.msa.state.mn.us/' },
    { name: 'Mississippi School for the Deaf', city: 'Jackson', state: 'MS', lat: 32.299, lon: -90.185, url: 'https://msdbk12.org/' },
    { name: 'Missouri School for the Deaf', city: 'Fulton', state: 'MO', lat: 38.847, lon: -91.949, url: 'https://msd.dese.mo.gov/' },
    { name: 'Montana School for the Deaf and the Blind', city: 'Great Falls', state: 'MT', lat: 47.505, lon: -111.300, url: 'https://www.msdbmustangs.org/' },
    { name: 'New Mexico School for the Deaf', city: 'Santa Fe', state: 'NM', lat: 35.687, lon: -105.938, url: 'https://www.nmsd.k12.nm.us/' },
    { name: 'New York State School for the Deaf', city: 'Rome', state: 'NY', lat: 43.213, lon: -75.456, url: 'https://www.nysed.gov/new-york-state-school-deaf' },
    { name: 'Lexington School for the Deaf', city: 'Jackson Heights', state: 'NY', lat: 40.752, lon: -73.883, url: 'https://www.lexnyc.org/' },
    { name: "St. Mary's School for the Deaf", city: 'Buffalo', state: 'NY', lat: 42.886, lon: -78.878, url: 'https://www.smsdk12.org/' },
    { name: 'North Carolina School for the Deaf', city: 'Morganton', state: 'NC', lat: 35.744, lon: -81.685, url: 'https://www.ncsd.net/' },
    { name: 'Eastern North Carolina School for the Deaf', city: 'Wilson', state: 'NC', lat: 35.721, lon: -77.916, url: 'https://www.encsd.net/' },
    { name: 'North Dakota School for the Deaf', city: 'Devils Lake', state: 'ND', lat: 48.113, lon: -98.865, url: 'https://www.ndsd.nd.gov/' },
    { name: 'Ohio School for the Deaf', city: 'Columbus', state: 'OH', lat: 39.961, lon: -82.999, url: 'https://odbes.ohio.gov/' },
    { name: 'Oklahoma School for the Deaf', city: 'Sulphur', state: 'OK', lat: 34.512, lon: -96.977, url: 'https://www.osd.k12.ok.us/' },
    { name: 'Pennsylvania School for the Deaf', city: 'Philadelphia', state: 'PA', lat: 39.952, lon: -75.165, url: 'https://psd.org/' },
    { name: 'Western Pennsylvania School for the Deaf', city: 'Pittsburgh', state: 'PA', lat: 40.440, lon: -79.996, url: 'https://www.wpsd.org/' },
    { name: 'Rhode Island School for the Deaf', city: 'Providence', state: 'RI', lat: 41.824, lon: -71.413, url: 'https://www.rideaf.net/' },
    { name: 'South Carolina School for the Deaf and the Blind', city: 'Spartanburg', state: 'SC', lat: 34.949, lon: -81.932, url: 'https://www.scsdb.org/' },
    { name: 'Tennessee School for the Deaf', city: 'Knoxville', state: 'TN', lat: 35.960, lon: -83.921, url: 'https://www.tsdeaf.org/' },
    { name: 'West Tennessee School for the Deaf', city: 'Jackson', state: 'TN', lat: 35.615, lon: -88.814, url: 'https://www.tsdeaf.org/apps/pages/WTSD' },
    { name: 'Texas School for the Deaf', city: 'Austin', state: 'TX', lat: 30.267, lon: -97.743, url: 'https://www.tsd.texas.gov/' },
    { name: 'Utah Schools for the Deaf and the Blind', city: 'Ogden', state: 'UT', lat: 41.223, lon: -111.974, url: 'https://www.usdb.org/' },
    { name: 'Virginia School for the Deaf and the Blind', city: 'Staunton', state: 'VA', lat: 38.150, lon: -79.072, url: 'https://www.vsdb.k12.va.us/' },
    { name: 'Washington School for the Deaf', city: 'Vancouver', state: 'WA', lat: 45.639, lon: -122.660, url: 'https://www.wsd.wa.gov/' },
    { name: 'West Virginia Schools for the Deaf and the Blind', city: 'Romney', state: 'WV', lat: 39.339, lon: -78.756, url: 'https://www.wvsdb2.state.k12.wv.us/' },
    { name: 'Wisconsin School for the Deaf', city: 'Delavan', state: 'WI', lat: 42.633, lon: -88.643, url: 'https://www.wsd.k12.wi.us/' },
    { name: 'Kendall Demonstration Elementary School (Gallaudet University)', city: 'Washington', state: 'DC', lat: 38.907, lon: -76.995, url: 'https://kdes.gallaudet.edu/' },
  ];

  function initMap() {
    const container = document.getElementById('deaf-schools-map');
    if (!container || typeof L === 'undefined') return;

    const map = L.map(container, {
      scrollWheelZoom: false,
    }).setView([39.5, -98.35], 4);

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
      L.marker([school.lat, school.lon], { icon })
        .addTo(map)
        .bindTooltip(school.name, { direction: 'top', offset: [0, -8], className: 'school-tooltip' })
        .bindPopup(`<strong>${school.name}</strong><br>${school.city}, ${school.state}<br><a href="${school.url}" target="_blank" rel="noopener">Visit website &rarr;</a>`);
    });
  }

  function populateList() {
    const list = document.getElementById('schools-list');
    if (!list) return;
    const sorted = [...SCHOOLS].sort((a, b) => a.state === b.state ? a.name.localeCompare(b.name) : a.state.localeCompare(b.state));
    list.innerHTML = sorted.map((school) => `
      <li>
        <a class="school-name" href="${school.url}" target="_blank" rel="noopener">${school.name}<span class="sr-only"> (opens in a new tab)</span></a>
        <span class="school-city">${school.city}, ${school.state}</span>
      </li>
    `).join('');
  }

  initMap();
  populateList();
})();
