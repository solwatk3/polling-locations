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

## Done (Session 8 - 2026-07-26)
- [x] location-detail.html + locations.html: when geocoding fails, edit form now auto-scrolls to lat/lng fields, highlights them amber, and focuses lat input so user knows exactly where to enter manual coordinates (2026-07-26)
- [x] index.html: map pins now navigate directly to location-detail.html?id= on click - popup removed (2026-07-26)
- [x] index.html: reverted pin click to popup (restored original behavior), added "-> View Full Detail" link inside each popup pointing to location-detail.html?id= (2026-07-26)
- [x] location-detail.html: fixed seed data delete button showing raw HTML entity - changed textContent to innerHTML so the page icon renders correctly (2026-07-26)
- [x] location-detail.html: saving lat/lng in edit panel now immediately moves the pin on the map and pans to it - detailMap and detailMarker lifted to outer scope so save handler can call setLatLng/setView (2026-07-26)

## Done (Session 9 - 2026-07-26)
- [x] district-report.html: extended to support all 4 report types - House, Senate, Congressional, and County - including full 95-county list, county-based filtering, and correct URL params (?type=county&county=Haywood) (2026-07-26)
- [x] directory.html: Print Report link added to every accordion header (By District and By County views) - opens district-report.html with correct params in a new tab, does not toggle accordion (2026-07-26)
- [x] location-detail.html: print icon added to each district chip linking to that district's report; Print link added next to county field linking to county report (2026-07-26)
- [x] locations.html + location-detail.html: duplicate location name check added to both save handlers - blocks save and alerts if another location already has the same name (case-insensitive) (2026-07-26)
- [x] locations.html + location-detail.html: geocoder fixed to not append city field when the address already contains state/zip - was producing garbled Nominatim queries for addresses pasted with city+state+zip included (2026-07-26)
- [x] locations.html + location-detail.html: paste Google Maps lat/lng string ("35.69, -88.85") into either coordinate field and both fields auto-fill - no manual splitting needed (2026-07-26)
- [x] locations.html + location-detail.html: Zip Code field added to both forms (displayed alongside City); address parser now extracts and auto-fills zip from pasted full addresses; zip included in geocoding query to improve hit rate on rural/highway addresses (2026-07-26)

## Done (Session 10 - 2026-07-26)
- [x] district-report.html: layout redesigned - removed boxed cards, replaced with compact list rows with left color stripe (green=early voting, amber=election day), full address now shown in every row (street, city, TN, zip) (2026-07-26)
- [x] location-detail.html + index.html + directory.html: seed data delete enabled - locations in POLLING_LOCATIONS can now be deleted from within the app; deleted IDs stored in tn_polling_deleted localStorage key; mergeWithSeedData() skips deleted IDs to prevent re-adding on reload (2026-07-26)
- [x] location-detail.html: "Detect from Coords" button added to edit panel - re-runs ArcGIS district lookup using current lat/lng fields and updates House, Senate, and Congressional fields (2026-07-26)
- [x] location-detail.html: district detection auto-triggers whenever address geocodes (passes lat/lng directly), whenever Google Maps coords are pasted (auto-split fires detection), and on manual lat/lng field change (600ms debounce) - no button click needed (2026-07-26)
- [x] location-detail.html + directory.html: Prev/Next navigation added - clicking a card from a directory group passes context (e.g. context=house-80) in URL; detail page reads context, filters+sorts that group, shows position label ("3 of 12") and Prev/Next buttons to step through locations without returning to directory (2026-07-26)

## Done (Session 11 - 2026-07-26)
- [x] Douglas Community Center: coordinates manually entered via Google Maps + lat/lng paste, districts auto-detected (2026-07-26)
- [x] location-detail.html: pin drag position now persists on page reload - loadOverrides() reads tn_polling_overrides from localStorage and applies saved lat/lng when building ALL_LOCATIONS (2026-07-26)
- [x] location-detail.html + directory.html: fixed duplicate locations caused by mergeWithSeedData() copying seed entries into tn_polling_custom - both pages now deduplicate ALL_LOCATIONS by ID (2026-07-26)
- [x] directory.html: added deleted-ID filter to seed entries (2026-07-26)
- [x] location-detail.html: clicking the address field copies the full address to clipboard with a brief "Copied!" confirmation flash (2026-07-26)
- [x] district-report.html: fixed large blank space between Early Voting and Election Day sections when printing - added display:block to .location-cards in print CSS (2026-07-26)
- [x] district-report.html: county report view now shows district chips (House/Senate/Congressional) on each location card (2026-07-26)
- [x] index.html + locations.html + location-detail.html: backup/restore system added - Export button saves data to GitHub repo (backups/latest.json) and sends EmailJS confirmation; restore URL (?restore_raw=1) fetches from raw GitHub and imports; GitHub fine-grained token stored in localStorage (2026-07-26)
- [x] index.html: pin color fixed - purple only shows for locations with needs_correction flag; all other locations use type-based color (green=early, amber=election day) (2026-07-26)

## Done (Session 12 - 2026-07-26)
- [x] locations.html: replaced single open/close time dropdowns with a schedule builder - each row has optional day label (e.g. Mon-Fri), open time, and close time; multiple rows can be added per location (2026-07-26)
- [x] locations.html: added "Both" type option - location can serve as both early voting and election day (2026-07-26)
- [x] locations.html: type badge, filter, and stats all handle "Both" correctly - "Both" locations match either type filter and count toward both early and election day stats (2026-07-26)
- [x] locations.html: schedule builder handles backward compat - old single hours string converted to one row on edit (2026-07-26)
- [x] location-detail.html: info panel renders schedule rows with day labels; falls back to plain hours string for old data (2026-07-26)
- [x] location-detail.html: edit panel gets schedule builder and "Both" type radio (2026-07-26)
- [x] index.html: "Both" locations get indigo pin and are added to both earlyLayer and electionLayer so they appear on either toggle (2026-07-26)
- [x] index.html: popup renders multi-row schedule with day labels; type badge handles Both (2026-07-26)
- [x] css/style.css: added .popup-type-badge.both style (2026-07-26)

## Done (Session 13 - 2026-07-27)
- [x] index.html: fixed null lat/lng crash in placePin() - locations without coordinates are skipped instead of throwing a Leaflet TypeError that stopped all subsequent script execution (counties, sidebar listeners) (2026-07-27)
- [x] locations.html: schedule paste parser added - paste single-line (semicolon-separated) or multi-line schedule text and it auto-fills all rows with day labels and normalized times (2026-07-27)
- [x] locations.html: Period label dropdown added to each schedule row (Early Voting / Election Day / blank) - only shown when location type is "Both" (2026-07-27)
- [x] locations.html: Period column hidden by default, shown via CSS .show-period toggle on #sched-section when type = "Both" (2026-07-27)
- [x] locations.html: Days field restored to schedule rows - dimmed/italic styling distinguishes it from manually-filled fields; auto-populated by paste parser (2026-07-27)
- [x] index.html: map popup schedule display updated to show Period label (bold) and Days label before each time range (2026-07-27)
- [x] locations.html: parser fixed to handle all line-ending styles (\r\n, \r, \n) - standalone \r from PDF/clipboard paste was silently dropping rows (2026-07-27)
- [x] locations.html: header lines without times (e.g. "July 17th through August 1st") now stored as carry-forward rangeHeader and prepended to all timed rows that follow - date range context preserved on every row (2026-07-27)
- [x] locations.html: days input shows full text as browser tooltip on hover - truncated field content readable without editing (2026-07-27)
- [x] locations.html: Re-geocode address button restored below lat/lng fields - calls geocodeAddress() on the current address field value (2026-07-27)

## Done (Session 14 - 2026-07-27)
- [x] location-detail.html: fixed Prev/Next navigation broken for "House District ?" group - parseInt("?") returned NaN so filter matched nothing; added special case: ctxVal === "?" matches locations where district field is "?" or empty (2026-07-27)

## In Progress
- Nothing currently

## Next
- [ ] Run Export to JS from locations.html and commit updated data/polling-locations.js to make all coordinate fixes and new locations permanent in the repo
- [ ] Start entering early voting locations - use paste parser to quickly fill in schedule data from county election commission websites
- [ ] Investigate why Map nav link opens in a new tab on GitHub Pages (could not reproduce from code - may be browser behavior)
- [ ] Work through the 46 "House District ?" locations and run district detection on each to clear out the unknown group

## Dead Ends
| What was tried | Why it didn't work | Date |
|---|---|---|
| Census TIGERweb Layer 0 for congressional districts | Labeled "119th Congressional Districts" but geometry not updated for TN's May 7, 2026 redistricting (Second Extraordinary Session) | 2026-07-26 |
| unitedstates/districts GitHub repo (GeoJSON) | URLs returned empty - repo may have changed structure | 2026-07-26 |
| Direct shapefile URL guesses from Comptroller site | 404 - shapefile triggered via JS, no direct URL | 2026-07-26 |
| Nominatim geocoding for rural TN street addresses | Many rural roads (e.g. Lucy Black Rd, Bolivar) not in OpenStreetMap - city-center fallback implemented instead | 2026-07-26 |
| Nominatim geocoding for "Hwy 45 Bypass" in Jackson, TN | Highway bypass not mapped under that name in OSM - need to enter coordinates manually from Google Maps | 2026-07-26 |

## Notes
- Congressional district source: TN Comptroller ArcGIS FeatureServer/10 (services2.arcgis.com/63Ka7QbNqm4NLbeo), field DISTRICT
- Senate district source: same service FeatureServer/8, field NEWSENATEDISTRICT
- State House source: Census TIGERweb Legislative MapServer/2, field SLDL (still accurate - no redistricting)
- All polling location data must be verified with county election commissions before use
- district-report.html supports URL params: ?type=house&district=80, ?type=senate&district=26, ?type=congressional&district=8, ?type=county&county=Haywood
- Schedule stored as array: [{days, open, close, label}] - label is "Early Voting" or "Election Day" for Both-type locations
- "Both" type: pin is indigo, appears on both map layers, counts in both early and election day stats
- Google Maps lat/lng can be pasted directly into either coordinate field - auto-splits into both fields
- ALL_LOCATIONS deduplication: seed entries excluded if ID already exists in tn_polling_custom (custom version wins)
- Backup: GitHub fine-grained token in tn_polling_gh_token localStorage; writes to backups/latest.json in the repo
- Paste parser: header lines (no parens) become rangeHeader prepended to all following rows; supports \r\n, \r, \n, and semicolons
