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

## Done (Session 15 - 2026-07-27)
- [x] locations.html: bulk import now accepts tab-separated rows (Name/Address/City/Zip) copied from a spreadsheet - no precinct number required; 80%+ tab-line threshold triggers format; falls through to precinct parser otherwise (2026-07-27)
- [x] locations.html: bulk import duplicate detection added - fingerprint is lowercased name+address; duplicates against existing locations AND within the batch itself are blocked; toast names all skipped locations (2026-07-27)
- [x] locations.html: bulk import hint text updated to document both accepted formats (2026-07-27)

## Done (Session 16 - 2026-07-27)
- [x] location-detail.html: delete navigates to next location in group context instead of returning to directory; falls back to previous if at end of list; falls back to directory.html if no context (2026-07-27)
- [x] locations.html: Set County modal added - lists locations missing county by default, checkbox per row, select-all, show-all toggle, county text input, Apply button updates localStorage and in-memory array instantly (2026-07-27)
- [x] locations.html + location-detail.html + directory.html: time dropdowns now default to blank "-- time --" placeholder instead of pre-filling 8:00am/7:00pm - times only appear when user picks them or paste parser fills them (2026-07-27)
- [x] locations.html: "Save & Add Another" button added to form footer - saves current location and immediately reopens a blank form for the next entry; save logic extracted into shared saveFormData() function used by both buttons (2026-07-27)

## Done (Session 17 - 2026-07-27)
- [x] locations.html: parseFullAddress() fixed to handle comma-separated addresses like "5535 Blue Hole Rd, Antioch, TN 37013" - strips trailing state abbreviation and normalizes commas before splitting, so city/zip auto-fill correctly (2026-07-27)
- [x] locations.html: Re-geocode button moved from buried coordinates section to directly below the Street Address field - visible without scrolling (2026-07-27)
- [x] location-detail.html: Re-geocode address button added below Street Address field - was missing entirely (2026-07-27)
- [x] directory.html: Re-geocode address button added below Street Address field - was missing entirely (2026-07-27)
- [x] location-detail.html: epScheduleGeocode refactored - geocode logic extracted into named epGeocode(addr, force) so button can call it directly without the 800ms delay (2026-07-27)
- [x] locations.html + location-detail.html + directory.html: Re-geocode button now passes force=true to bypass hasExistingCoords guard - ensures fresh geocoded coordinates are used for both coord fields and district lookup, not stale old coords (2026-07-27)
- [x] locations.html + location-detail.html + directory.html: geocode "not found" path now checks for existing pin coordinates before giving up - if lat/lng already set, runs district detection from those coords and shows "Address not in map data - detecting districts from existing pin" (2026-07-27)

## Done (Session 18 - 2026-07-27)
- [x] index.html: floating search bar added (top-right, z-index 500) - searches location names and addresses, flies to matching pin and briefly highlights it (2026-07-27)
- [x] index.html: district search added to search bar - type "House 80", "Senate 29", or "Congress 5" to activate that layer and zoom to the district boundary (2026-07-27)
- [x] index.html: markerRegistry pattern added - placePin() registers each marker by location ID so search can fly to any pin by ID (2026-07-27)
- [x] index.html: pendingDistrictZoom pattern added - if district layer hasn't loaded yet when user searches, zoom fires automatically once the layer finishes loading (2026-07-27)
- [x] index.html: houseFeatures / senateFeatures / congressFeatures arrays populated after each layer loads - enables zoomToDistrict() to find the right GeoJSON feature (2026-07-27)
- [x] locations.html + location-detail.html + directory.html: geocoding fixed across all three pages - replaced Census Geocoder (blocked by CORS on GitHub Pages) with Nominatim; added r.ok check before r.json() to prevent crashes on 429 rate-limit responses; debounce increased to 1200ms (2026-07-27)
- [x] location-detail.html: Detect Districts button added directly to info panel next to "Districts" label - runs ArcGIS point-in-polygon queries from pin coordinates, updates district chips on screen, and saves results to localStorage without opening the edit panel (2026-07-27)
- [x] knox-county-voting-locations.csv: 41 locations extracted from KGIS PDF (April 2026), saved in projects/polling-locations/ (2026-07-27)

## Done (Session 19 - 2026-07-27)
- [x] locations.html: bulk import tab-separated path now falls back to parseFullAddress() when city/zip columns are empty - handles addresses like "4011 Austin St, Chattanooga TN 37411" pasted as a single column; extracts street, city, and zip automatically (2026-07-27)
- [x] locations.html: STREET_TYPES expanded - added trail, lane, pk, road, drive, highway, parkway so full-word street names parse correctly alongside abbreviations (2026-07-27)
- [x] locations.html: new zip-then-vote-number split strategy added in parseBulkText() - splits on "37062 2 Fairview" pattern (5-digit zip then small number then capital word) without false-splitting address house numbers like "7200 Tiger" (2026-07-27)
- [x] locations.html: new "Voting Center N - Name" split strategy added in parseBulkText() - detects "Voting Center \d -" pattern and splits on it; fires before zip-based and greedy fallbacks (2026-07-27)
- [x] locations.html: parseRowPaste() now strips "Voting Center N - " prefix before looking for the name/address boundary (2026-07-27)

## Done (Session 20 - 2026-07-27)
- [x] district-report.html: locations sorted A-Z by name within each section (Early Voting and Election Day) (2026-07-27)
- [x] district-report.html: removed map button, Leaflet modal, and all geocoding code - was non-functional due to Nominatim rate limits and partial address matching (2026-07-27)

## Done (Session 21 - 2026-07-28)
- [x] index.html: fixed highlightByFilter deduplication - seed entries with the same ID as a custom (edited) location now excluded before concat so the corrected county wins on spotlight (2026-07-28)
- [x] index.html: county tooltip double-"County" bug fixed - Census API NAME already includes "County" so code no longer appends it again; CDN fallback still appends since TN_COUNTY_NAMES stores bare names (2026-07-28)
- [x] index.html: hover info bar added (#hover-info div, bottom-left, hidden when empty) - shows County / House / Senate / Congress as you move the mouse over the map (2026-07-28)
- [x] index.html: hoverState object added with slots for county, house, senate, congress - all boundary layers (county, house, senate, congress) set/clear their slot on mouseover/mouseout and call updateHoverInfo() (2026-07-28)
- [x] index.html: pinMouseover / pinMouseout added to every marker and clone - hovering a pin reads loc fields to fill all four hoverState slots, so district/county info still shows even when the mouse is over a pin (not a boundary polygon) (2026-07-28)
- [x] index.html: removed duplicate nav search form (lines 142-144) that silently did nothing on Enter (2026-07-28)
- [x] locations.html: normalizeTime fixed to strip a.m./p.m. period-dots before the regex match - handles "9:00 a.m. - 4:00 p.m." schedule paste format (2026-07-28)
- [x] locations.html: parseDashFormat added - "Name - Street, City, ST Zip" one-per-line format with right-to-left address parsing; handles highway routes where parseFullAddress fails (2026-07-28)
- [x] locations.html: parseMarkdownLinkFormat added - Google Sheets hyperlinked cell format where the address cell contains a Markdown link with a Google Maps URL (2026-07-28)
- [x] locations.html: parsePrecinct4LineFormat added - 4-line block format (precinct label / venue name / street / City,ST Zip); detected when 60%+ of blank-line-separated blocks have exactly 4 lines (2026-07-28)
- [x] locations.html: parseEllipsisFormat added - "City... Venue Name Street" format (city before ellipsis, venue+address after); handles both Unicode ellipsis U+2026 and ASCII "..."; handles entries on one line OR multiple lines (2026-07-28)
- [x] locations.html: parseEllipsisFormat fixed - source data uses ASCII "..." not Unicode U+2026 so old detection returned null; new version normalizes "..." before detecting, splits full text by ellipsis (not lines), and uses last-period trick to separate address from next city when entries run together on one line (2026-07-28)
- [x] Created polling-time-parser-updater skill - knows where normalizeTime and parseSchedulePaste live, diagnoses failures, makes surgical edits (2026-07-28)
- [x] Created polling-bulk-import-updater skill - knows every existing parser, correct call order, and template for adding new ones (2026-07-28)

## Done (Session 22 - 2026-07-28)
- [x] locations.html: parseDistrictPrecinctFormat added - handles run-together county precinct lists in "1ST DISTRICT(CD01) PrecName (ABBR) Venue, Address" format; detected by DISTRICT(CDnn) pattern; strips district headers, anchors on 4-letter all-caps abbreviations, splits at last street-type word (2026-07-28)
- [x] locations.html: short venue name prepend logic added - if venue fragment is 1-2 words (e.g. "Church"), prepend precinct name to give full context ("West End Church") (2026-07-28)

## Done (Session 23 - 2026-07-28)
- [x] locations.html: parseNameCommaAddressFormat added - handles one-per-line "Venue Name, Street Address" format (no city/zip); detected when every line matches Name, [digit] Street with no tabs, ellipsis, or trailing state+zip; all entries flagged for review (2026-07-28)
- [x] locations.html: openPanel() now auto-splits full address strings on load - calls parseFullAddress() immediately when panel opens so "300 Main St, Nashville, TN 37201" is split into street/city/zip fields without user having to click in/out of the address field (2026-07-28)
- [x] locations.html: Re-geocode button replaced with reGeocodeAndSplit() - splits full address first, fills city/zip into their fields, then geocodes with the clean street address; one-click fix for locations with city+state+zip embedded in the address field (2026-07-28)
- [x] location-detail.html: City and Zip added as labeled fields in the info panel - displayed in a 2x2 grid with Address and County; address field shows street only; clipboard copy still uses full address string (2026-07-28)
- [x] location-detail.html: epReGeocodeAndSplit() added - Re-geocode button on detail page now splits full address right-to-left (zip from end, strip state, last comma = city/street) before geocoding; self-contained since parseFullAddress only exists in locations.html (2026-07-28)

## Done (Session 24 - 2026-07-29)
- [x] locations.html: paste handler added to address field - pasting a full address like "300 Crossville St, Monterey, TN 38574" instantly splits into street/city/zip with no button click or blur required; debounced geocoder fires automatically after with the clean street (2026-07-29)
- [x] location-detail.html: paste handler added to ep-address field - same auto-split behavior using right-to-left inline logic (zip from end, strip state, last comma = city/street); consistent with epReGeocodeAndSplit (2026-07-29)

## Done (Session 26 cont. - 2026-07-29)
- [x] Loudon County import completed (2026-07-29)
- [x] Putnam County - 18 locations imported (2026-07-29)
- [x] Export to JS run - data/polling-locations.js updated with all imported locations (2026-07-29)
- [x] "House District ?" group worked through - Detect from Coords run on each, districts saved (2026-07-29)

## Done (Session 27 - 2026-07-29)
- [x] locations.html: parsePrecinctTabFullAddressFormat added - 3-column tab format (N-N TAB short-label TAB "Venue Name, Street, City Zip"); name from col 3 venue string; address/city split right-to-left at last comma; zip from end; entries with no second comma flagged for review (2026-07-29)
- [x] locations.html + location-detail.html + directory.html: fixed empty time slot automatically added to new locations and bulk imports - removed else fallback in setScheduleData() that added a blank row when no schedule/hours existed; schedule section now opens empty (2026-07-29)
- [x] locations.html + location-detail.html + directory.html: Format C added to schedule paste parser - handles "DayList-HH:MM-HH:MM" with no am/pm, optional label prefix (e.g. "Extended Hours:"), multiple entries on one line separated by "&" (2026-07-29)
- [x] locations.html + location-detail.html + directory.html: normalizeTime/epNormalizeTime now infers am/pm for bare HH:MM times - hours 7-11 get am, hour 12 and hours 1-6 get pm; handles county formats that omit am/pm from voting hours (2026-07-29)
- [x] locations.html + location-detail.html + directory.html: schedule row layout switched from CSS Grid to flex-wrap:wrap - days field always gets its own full-width row (no truncation) in default mode; "Both" mode overrides to flex-wrap:nowrap (single row, truncation acceptable) (2026-07-29)
- [x] locations.html: parseWordPrecinctFormat added - handles "Precinct N: Name" header format with 1 or 2 address lines below; 2-line entries use parseFullAddress for combined street+city+zip; 3-line entries parse last line right-to-left for city+zip (2026-07-29)

## Done (Session 26 - 2026-07-29)
- [x] location-detail.html: voting hours section made collapsible - wrapped in details/summary, shows Show/Hide toggle, arrow flips on open/close (2026-07-29)
- [x] location-detail.html: locations with no hours now show "No hours listed" inline in the summary header instead of hiding the row - dropdown is disabled, no content shown (2026-07-29)
- [x] location-detail.html: hours condition tightened - only treats hours as valid if it contains at least one letter or digit; dash-only values like "-" or em dashes fall through to "No hours listed" (2026-07-29)
- [x] locations.html: removed auto-added empty schedule row on page load - hours are now opt-in; blank rows were being saved with new locations and falsely signaling hours existed (2026-07-29)

## Done (Session 25 - 2026-07-29)
- [x] Maury County (22 locations) - imported and city + zip set via Set County modal (2026-07-29)
- [x] locations.html: parsePrecinctTabLabelFormat added - handles Loudon County format (digit-tab-ABBR-tab-PrecinctName header + venue name + Street, City blocks, no blank-line separators, no zip); detected by 2+ lines matching the tab-delimited header pattern; all entries flagged for review (2026-07-29)
- [x] location-detail.html: schedule paste parser (epParseSchedulePaste + epNormalizeTime) added - existed in locations.html and directory.html but was missing from per-location edit page (2026-07-29)
- [x] directory.html + location-detail.html: epNormalizeTime updated to handle A.M./P.M. with periods and Noon; Format B (inline Day: Time - Time) added to epParseSchedulePaste - both were missing from edit panel parsers (2026-07-29)
- [x] location-detail.html: Period label column (Early Voting / Election Day) added to schedule builder - was in locations.html and directory.html but missing from per-location page; column only shows when type is Both (2026-07-29)
- [x] location-detail.html: days input now truncates with ellipsis and shows full text on hover (title attribute) - consistent with locations.html (2026-07-29)
- [x] polling-time-parser-updater skill updated - now explicitly documents all 3 files that must be kept in sync (locations.html, directory.html, location-detail.html) (2026-07-29)

## Done (Session 28 - 2026-07-29)
- [x] index.html: fixed hover highlight bug - Leaflet fires polygon mouseout before pin mouseover when cursor crosses into a pin; replaced direct clearHighlight() calls in polygon mouseout with deferClearHighlight() (30ms setTimeout); pinMouseover cancels the timer and re-applies activeFilter so the highlight survives the transition (2026-07-29)
- [x] index.html: cross-county flicker fix - added clearTimeout(highlightClearTimer) at top of highlightByFilter() so fast mouse movement across county lines never leaves a stale clear timer running (2026-07-29)
- [x] index.html: district/county tags in popup are now clickable - each tag calls showDistrictActions(type, val, event) which pops a floating action menu near the click (2026-07-29)
- [x] index.html: floating action menu has Highlight, Zoom (house/senate/congress only), and Report buttons for all 4 district types; edge-adjusted so it never goes off screen (2026-07-29)
- [x] index.html: Highlight button activates the district boundary layer, dims non-matching pins, and draws a non-interactive spotlight polygon overlay (currentSpotlightLayer) with bright fill + border (2026-07-29)
- [x] index.html: spotlight clears when user starts hovering boundary polygons again (clearSpotlight called inside highlightByFilter and clearHighlight) (2026-07-29)
- [x] index.html: pendingDistrictHighlight pattern added - if Highlight is clicked before the layer has loaded, spotlight fires automatically once the fetch completes (2026-07-29)
- [x] index.html: district-report.html Report button extended to all 4 types (house, senate, congress, county) (2026-07-29)
- [x] locations.html: parseBulletMarkdownFormat added - handles markdown hyperlink bullet lists (* [Name](url)) from Google Sheets copy-paste; groups lines into entries at each bullet; strips hyperlink for display; auto-sets type from precinct label (2026-07-29)
- [x] css/style.css: .district-tag, .district-tag:hover, .district-tag-unknown, #district-action-menu, .dam-header, .dam-btn styles added (2026-07-29)

## Done (Session 29 - 2026-07-29)
- [x] index.html: fixed districtZoom() - now calls setDistrictLayer(type) first to trigger layer fetch, same as districtHighlight; county type handled via countyFeatures array (2026-07-29)
- [x] index.html: fixed zoomToDistrict() - extended with county support; matches by normalized name (strips " County" suffix, lowercased) against countyFeatures (2026-07-29)
- [x] index.html: fixed county report button broken JS - onclick was embedding county string val without quotes; switched to safeVal which wraps string types in escaped single quotes (2026-07-29)
- [x] index.html: fixed districtReport() for county type - strips " County" suffix before URL encoding so report page receives "Madison" not "Madison County" (2026-07-29)
- [x] index.html: spotlight persistence fix - added spotlightLockUntil timestamp; districtHighlight sets 800ms lock window after triggering; clearSpotlight returns early if lock is active, preventing popup-close + mouse-lands-on-polygon from wiping the spotlight immediately (2026-07-29)

## In Progress
- (nothing active)

## Next
- [ ] Continue importing remaining counties
- [ ] Commit updated data/polling-locations.js after next batch of imports
- [ ] Work through any remaining "House District ?" locations - open from directory, hit Detect from Coords, save

## Dead Ends
| What was tried | Why it didn't work | Date |
|---|---|---|
| Census TIGERweb Layer 0 for congressional districts | Labeled "119th Congressional Districts" but geometry not updated for TN's May 7, 2026 redistricting (Second Extraordinary Session) | 2026-07-26 |
| unitedstates/districts GitHub repo (GeoJSON) | URLs returned empty - repo may have changed structure | 2026-07-26 |
| Direct shapefile URL guesses from Comptroller site | 404 - shapefile triggered via JS, no direct URL | 2026-07-26 |
| Nominatim geocoding for rural TN street addresses | Many rural roads (e.g. Lucy Black Rd, Bolivar) not in OpenStreetMap - city-center fallback implemented instead | 2026-07-26 |
| Nominatim geocoding for "Hwy 45 Bypass" in Jackson, TN | Highway bypass not mapped under that name in OSM - need to enter coordinates manually from Google Maps | 2026-07-26 |
| US Census Geocoder (geocoding.geo.census.gov) | Blocked by CORS on GitHub Pages - "No Access-Control-Allow-Origin header" - cannot be used from a browser-side app hosted on a different domain | 2026-07-27 |
| Combining locations.html and directory.html into a single page | locations.html uses mergeWithSeedData() to build its data array; directory.html reads tn_polling_custom directly. When combined, the two data-loading patterns conflicted and the browsing views (By District, By County) showed 0 locations. Multiple fix attempts failed. Full session reverted via git reset --hard 1f43f22. Do not attempt again without a clear plan for unifying the data loading first. | 2026-07-28 |

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
- knox-county-voting-locations.csv: 41 locations extracted from KGIS PDF (April 2026), saved in projects/polling-locations/
- Bulk importer now handles 10 formats: name-comma-address, district/precinct run-together, ellipsis, markdown-link, dash, precinct-4-line, block, tab-separated, precinct-tab-full-address (N-N TAB label TAB "Venue, Addr, City Zip"), word-precinct ("Precinct N: Name" + 1-2 address lines)
- Schedule paste parser handles 3 formats: A (parenthesized times), B (inline am/pm times), C (bare HH:MM-HH:MM with & separators); am/pm inferred for bare times (7-11am, 12+1-6pm)
- Re-geocode button on locations.html and location-detail.html both split full address strings before geocoding (reGeocodeAndSplit / epReGeocodeAndSplit)
