# Polling Locations - Session Memory

## Project Context
- Sol is an admissions counselor covering Tennessee
- This map started with TN State House District 80 as the first data entry point
- District 80 covers: Haywood County, Hardeman County, and parts of Madison County
- Goal is to eventually cover all of Tennessee for all district types

## Key Decisions Made
- Leaflet.js for maps (already in Sol's stack from ACC project)
- Vanilla HTML/CSS/JS - no framework, keeps it simple and fast to open
- GeoJSON for district boundaries (fetched live from ArcGIS/Census APIs)
- polling-locations.js is the live data source; Excel spreadsheet is the editable copy
- Pins and district boundary layers are fully decoupled - pins stay visible no matter what district toggle is active
- Custom/repositioned pins saved to localStorage; Export modal generates JS to make changes permanent
- Schedule data stored as `schedule[]` array of `{days, open, close, label}` objects; `hours` string kept for backward compat display

## Critical Code Patterns

### hasExistingCoords (protect manually placed pins)
Applied in all three geocode functions. Before writing lat/lng from a geocode result, check if the fields already have values. If they do, only update district info - never overwrite coordinates.
```js
var existingLat = parseFloat(document.getElementById("ep-lat").value);
var existingLng = parseFloat(document.getElementById("ep-lng").value);
var hasExistingCoords = !isNaN(existingLat) && !isNaN(existingLng);
if (!hasExistingCoords) {
  document.getElementById("ep-lat").value = gLat.toFixed(6);
  document.getElementById("ep-lng").value = gLng.toFixed(6);
}
var detectLat = hasExistingCoords ? existingLat : gLat;
```
Applied in: `epScheduleGeocode()` (location-detail.html), `geocodeAddress()` (locations.html), `epGeocode()` (directory.html).

### dragend must sync loc in memory
After saving dragged coordinates to localStorage, also update the in-memory `loc` object or the edit panel will repopulate stale pre-drag values:
```js
loc.lat = pos.lat;
loc.lng = pos.lng;
```

## Data Sources (Confirmed Working)
| Layer | Service | Field | Notes |
|---|---|---|---|
| TN Counties | Census TIGERweb State_County MapServer/13 | NAME | 95 counties |
| State House (99) | Census TIGERweb Legislative MapServer/2 | SLDL | 2024 districts |
| Congressional (9) | TN Comptroller FeatureServer/10 | DISTRICT | **2026 redistricting** (May 7, 2026) |
| State Senate (33) | TN Comptroller FeatureServer/8 | NEWSENATEDISTRICT | Same Comptroller service - added 2026-07-26 |
| Congressional (old) | TN Comptroller FeatureServer/11 | NEWCONGRESSDISTRICT | Pre-2026 - do not use |

TN Comptroller base URL: `https://services2.arcgis.com/63Ka7QbNqm4NLbeo/arcgis/rest/services/Redistricting_Address_Lookup/FeatureServer/`

## localStorage Keys
| Key | What it stores |
|---|---|
| `tn_polling_custom` | Custom and edited locations (JSON array) |
| `tn_polling_overrides` | Pin position overrides for seed locations (JSON object, keyed by id) |
| `tn_polling_deleted` | IDs of deleted seed locations (JSON array) |

## Files
- `index.html` - main map with sidebar, toggles, add form, export modal
- `locations.html` - manage locations: table view with full add/edit right panel (schedule builder, all fields)
- `location-detail.html` - per-location detail page with draggable pin map and edit panel
- `directory.html` - directory browse page: by district, county, search, dashboard views; has slide-in edit panel
- `css/style.css` - dark theme, shared form styles
- `data/polling-locations.js` - POLLING_LOCATIONS array + DISTRICTS object
- `district-report.html` - print-friendly per-district report; supports ?type=house&district=80
- `polling-locations.xlsx` - 3 sheets: District 80 data, All Locations template, How to Use
- `obsidian/` - markdown notes for District 80, Congressional 8, Senate 29, Haywood, Hardeman, Madison

## Schedule Builder
All three edit pages (locations.html, location-detail.html, directory.html) now have the full schedule builder:
- Rows: `{days, open, close, label}` where label is "Early Voting", "Election Day", or "" (unlabeled)
- Paste parser: accepts single-line (semicolon-separated) or multi-line (parenthesized times) formats
- Period column only visible when location type is "Both"
- `getScheduleData()` / `epGetScheduleData()` returns `{ hours, schedule }` - always save both for compat

## Sessions
### 2026-07-26 (Session 1)
- Project kicked off
- Step 1 complete: folder, core map, District 80 data, spreadsheet, Obsidian notes

### 2026-07-26 (Session 2)
- Added all 99 TN State House districts (Census API)
- Decoupled pins from district toggle layers
- Built in-app Add Location form with click-to-place + drag-to-reposition
- Added congressional district layer
- Built district-report.html print page
- Fixed congressional districts: switched from Census API (stale) to TN Comptroller service with May 2026 redistricting

### 2026-07-26 (Session 3)
- Added "View District Report" button to sidebar
- Added TN State Senate layer (33 districts, #f472b6 pink, dashed outline, loads on demand)
- Updated header subtitle to include Senate districts
- Senate layer: #f472b6 (pink) to distinguish from congressional (purple) and house (amber)

### 2026-07-27 (Session 4)
- Built locations.html: table view with full add/edit right panel
- Built location-detail.html: per-location detail page with draggable pin map
- Built directory.html: directory browse by district, county, search, dashboard
- All pages share the same localStorage schema

### 2026-07-27 (Session 5)
- Fixed: auto-geocode in location-detail.html was overwriting manually dragged pin coords
  - Root cause 1: geocode function always wrote coords - fixed with hasExistingCoords check
  - Root cause 2: dragend handler didn't sync loc in memory - fixed by adding loc.lat/loc.lng update
- Fixed: Re-geocode button in locations.html also overwrote coords - same hasExistingCoords fix
- Improved: schedule display in locations.html table (shared labels as header, days/time on separate lines, dividers)
- Updated: directory.html edit panel now matches the full form from locations.html
  - Added zip field
  - Added "Both" type radio option
  - Replaced simple open/close selects with full schedule builder (paste parser + multi-row)
  - Fixed geocode in directory.html with same hasExistingCoords guard

### 2026-07-27 (Session 6)
- Time dropdowns now default to blank "-- time --" - no pre-filled times on new rows
- "Save & Add Another" button added to locations.html footer for fast back-to-back data entry
- saveFormData() extracted as shared function used by both Save and Save & Add Another

### 2026-07-29 (Sessions 28-29)
- Fixed hover highlight bug: Leaflet polygon mouseout fires before pin mouseover; solved with deferClearHighlight() 30ms timer + cancellation in pinMouseover/highlightByFilter
- Added clickable district/county tags in popup -> floating action menu (Highlight, Zoom, Report)
- Highlight button spotlights the district polygon with a non-interactive L.geoJSON overlay (currentSpotlightLayer); pendingDistrictHighlight pattern handles pre-load triggers
- district-report.html Report button extended to all 4 types
- parseBulletMarkdownFormat added to locations.html bulk importer
- Fixed districtZoom: now calls setDistrictLayer(type) to trigger fetch; county zoom supported
- Fixed county report button: onclick was unquoted string val (broken JS); switched to safeVal
- Fixed districtReport: strips " County" suffix before URL encoding
- Added spotlightLockUntil 800ms lock to prevent popup-close from immediately clearing spotlight

## Start Here Next Session
1. Continue importing remaining county data
2. Run Export to JS and commit updated data/polling-locations.js
3. Work through remaining "House District ?" locations - Detect from Coords on each
