# Polling Locations - Progress Tracker

## Done
- [x] Project folder created with full structure
- [x] Core Leaflet map built (index.html)
- [x] TN county boundaries layer (GeoJSON from Census)
- [x] District 80 highlight (Haywood, Hardeman, parts of Madison)
- [x] Early voting and election day pin layers with toggles
- [x] Layer control panel (counties, districts, pin types)
- [x] Popup details on each pin (name, address, hours, type)
- [x] Polling locations data file (data/polling-locations.js)
- [x] Spreadsheet version (polling-locations.xlsx)
- [x] Obsidian markdown files for District 80, Haywood, Hardeman, Madison
- [x] All 99 TN State House district boundaries loaded from Census API (2026-07-26)
- [x] Pins and district layers fully decoupled - pins stay visible on any district toggle (2026-07-26)
- [x] In-app Add Location form with click-to-place and drag-to-reposition pins (2026-07-26)
- [x] localStorage persistence for pin positions and custom locations (2026-07-26)
- [x] Congressional district layer added (toggle on-demand) (2026-07-26)
- [x] Export to JS modal for making custom locations permanent (2026-07-26)
- [x] district-report.html - print-friendly per-district report page with URL params (2026-07-26)
- [x] Fixed congressional district source - switched from Census API (stale) to TN Comptroller ArcGIS FeatureServer/10 reflecting May 7, 2026 redistricting (2026-07-26)
- [x] "View District Report" button added to sidebar - links to district-report.html?type=house&district=80 in new tab (2026-07-26)
- [x] TN State Senate district layer added (33 districts, pink, dashed, loads on demand from Comptroller FeatureServer/8) (2026-07-26)
- [x] district-report.html code-reviewed - no bugs, print layout confirmed solid (2026-07-26)

## Done (Session 4 - 2026-07-26)
- [x] 3-page restructure: index.html (map only), locations.html (data entry), directory.html (browse)
- [x] index.html: removed Add Location form and Export modal, added Street/Satellite basemap toggle (ESRI World Imagery), added top nav bar (Map / Locations / Directory), sidebar now has Quick Links section
- [x] locations.html (new): table of custom locations, right-side slide-in form panel, geocoding + district auto-detect, full CRUD (add/edit/delete), export to JS, sortable/filterable table
- [x] directory.html (new): 4 view modes - By District (House/Senate/Congressional), By County, Search, Dashboard; location cards with type badges and district pills; dashboard shows coverage stats and empty/filled district lists
- [x] style.css: added top-nav, basemap toggle, sidebar-nav-link, page layout, btn-primary/secondary/danger shared styles

## Done (Session 5 - 2026-07-26)
- [x] District layers converted from independent checkboxes to mutually exclusive radio buttons - only one active at a time (2026-07-26)
- [x] Polygon fills removed from all district layers - outlines only, subtle highlight on hover only (2026-07-26)
- [x] County name dynamically appended to district hover tooltips via mousemove - updates as you cross county lines (2026-07-26)
- [x] Geocoding auto-fills county dropdown from Nominatim addressdetails response (2026-07-26)
- [x] Geocoding fallback chain: full address -> strip suite/unit -> city center with warning (2026-07-26)
- [x] Voting hours field replaced with Opens/Closes time dropdowns (30-min increments, default 8:00am-7:00pm) (2026-07-26)
- [x] Address parser: pasting "404 E Cherry St Brownsville 38012" on blur splits into street + city fields automatically (2026-07-26)
- [x] Ctrl+Enter submits the location form when the panel is open (2026-07-26)
- [x] Directory: clicking a location card opens a full detail modal (name, type, address, county, hours, district chips, notes, coords) (2026-07-26)
- [x] Directory: Delete button in detail modal removes location from localStorage and re-renders without page reload (2026-07-26)
- [x] All placeholder seed data cleared from data/polling-locations.js - app starts clean (2026-07-26)

## Done (Session 6 - 2026-07-26)
- [x] district-report.html: Map button added to each location card - opens Leaflet mini-map modal (satellite default, street/satellite toggle, Nominatim geocoding with fallback chain) (2026-07-26)
- [x] locations.html: Table rows made clickable - each opens a side-by-side detail modal (info left, map right, ACC layout) (2026-07-26)
- [x] locations.html: Purple draggable pin in detail modal - dragend saves updated lat/lng to localStorage (2026-07-26)
- [x] location-detail.html: New full-page location detail view - map fills left side (full viewport height), info panel right (360px scrollable) (2026-07-26)
- [x] location-detail.html: Draggable pin saves to tn_polling_custom (custom) or tn_polling_overrides (seed data) (2026-07-26)
- [x] location-detail.html: Geocodes address via Nominatim if no coordinates stored (2026-07-26)
- [x] directory.html: Card clicks now navigate to location-detail.html?id= instead of opening popup modal (2026-07-26)
- [x] directory.html: By District view - removed single-district dropdown, now shows all districts with locations grouped as collapsible accordions sorted numerically (2026-07-26)
- [x] directory.html: By County view - removed county dropdown, now shows all counties with locations grouped as collapsible accordions sorted alphabetically (2026-07-26)

## Done (Session 7 - 2026-07-26)
- [x] data/polling-locations.js populated with 20 verified election day locations (Hardeman + Haywood counties) (2026-07-26)
- [x] County names corrected on seed data entries (Davidson->Hardeman, Shelby->Hardeman, Henry->Hardeman; Whiteville/Saulsbury set to McNairy) (2026-07-26)
- [x] Duplicate Wyatt Duke Armory entry removed from seed data (2026-07-26)
- [x] Douglas Community Center flagged with placeholder coords and "NEEDS FIX" note in seed data (2026-07-26)
- [x] locations.html: mergeWithSeedData() function added - imports seed data into localStorage on first load so all locations appear on GitHub Pages (2026-07-26)
- [x] locations.html: sort arrow HTML entity fix - changed .textContent to .innerHTML so up/down arrow renders correctly instead of showing raw code (2026-07-26)
- [x] locations.html: ?edit=ID URL param detection added - auto-opens edit panel when arriving from directory (2026-07-26)
- [x] location-detail.html: slide-in edit panel added - full form (all fields), save to localStorage, geocoding via Nominatim, live info panel refresh after save (2026-07-26)
- [x] directory.html: card clicks restored to navigate to location-detail.html?id= (2026-07-26)
- [x] Fixed git push rejection caused by remote divergence (git pull + resolved merge conflict in polling-locations.js) (2026-07-26)

## In Progress
- Nothing currently

## Next
- [ ] Fix Douglas Community Center: look up real coordinates and district data, update seed data entry
- [ ] Verify live GitHub Pages site: open location-detail.html for a location, confirm Edit button opens slide-in panel, test save flow
- [ ] Start entering additional verified locations from county election commission websites
- [ ] Test full add-location flow end to end: address parse -> geocode -> district detect -> save -> appears on map and directory
- [ ] Demographics overlay (population, voter registration breakdowns by county)

## Dead Ends
| What was tried | Why it didn't work | Date |
|---|---|---|
| Census TIGERweb Layer 0 for congressional districts | Labeled "119th Congressional Districts" but geometry not updated for TN's May 7, 2026 redistricting (Second Extraordinary Session) | 2026-07-26 |
| unitedstates/districts GitHub repo (GeoJSON) | URLs returned empty - repo may have changed structure | 2026-07-26 |
| Direct shapefile URL guesses from Comptroller site | 404 - shapefile triggered via JS, no direct URL | 2026-07-26 |
| Nominatim geocoding for rural TN street addresses | Many rural roads (e.g. Lucy Black Rd, Bolivar) not in OpenStreetMap - city-center fallback implemented instead | 2026-07-26 |

## Notes
- Congressional district source: TN Comptroller ArcGIS FeatureServer/10 (services2.arcgis.com/63Ka7QbNqm4NLbeo), field DISTRICT - same service as tncot.cc/tndistrict voter lookup
- Senate district source also available from same service: FeatureServer/8, field NEWSENATEDISTRICT
- State House source: Census TIGERweb Legislative MapServer/2, field SLDL (still accurate - no redistricting)
- All polling location data must be verified with county election commissions before use - seed data has been cleared
- district-report.html supports URL params: ?type=house&district=80
- Hours are stored as formatted strings like "8:00am - 7:00pm" - dropdowns parse existing values back on edit
