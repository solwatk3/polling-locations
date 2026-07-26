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
- Obsidian markdown files are cross-linked so graph view shows district -> county -> polling location hierarchy
- Pins and district boundary layers are fully decoupled - pins stay visible no matter what district toggle is active
- Custom/repositioned pins saved to localStorage; Export modal generates JS to make changes permanent

## Data Sources (Confirmed Working)
| Layer | Service | Field | Notes |
|---|---|---|---|
| TN Counties | Census TIGERweb State_County MapServer/13 | NAME | 95 counties |
| State House (99) | Census TIGERweb Legislative MapServer/2 | SLDL | 2024 districts |
| Congressional (9) | TN Comptroller FeatureServer/10 | DISTRICT | **2026 redistricting** (May 7, 2026) |
| State Senate (33) | TN Comptroller FeatureServer/8 | NEWSENATEDISTRICT | Same Comptroller service - added 2026-07-26 |
| Congressional (old) | TN Comptroller FeatureServer/11 | NEWCONGRESSDISTRICT | Pre-2026 - do not use |

TN Comptroller base URL: `https://services2.arcgis.com/63Ka7QbNqm4NLbeo/arcgis/rest/services/Redistricting_Address_Lookup/FeatureServer/`

## Files
- `index.html` - main map with sidebar, toggles, add form, export modal
- `css/style.css` - dark theme, form styles, placement mode overlay
- `data/polling-locations.js` - POLLING_LOCATIONS array + DISTRICTS object (all data is PLACEHOLDER)
- `district-report.html` - print-friendly per-district report; supports ?type=house&district=80
- `polling-locations.xlsx` - 3 sheets: District 80 data, All Locations template, How to Use
- `obsidian/` - markdown notes for District 80, Congressional 8, Senate 29, Haywood, Hardeman, Madison

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
- Added "View District Report" button to sidebar (green link button, opens district-report.html?type=house&district=80 in new tab)
- Added TN State Senate layer (33 districts, pink/rose color, dashed outline, loads on demand)
- Updated header subtitle to include Senate districts
- Reviewed district-report.html - no bugs found, print layout confirmed solid
- Senate layer color: #f472b6 (pink) to distinguish from congressional (purple) and house (amber)

## Start Here Next Session
1. Open index.html in browser and toggle the Senate layer to verify it loads from the Comptroller API
2. Click "View District Report" and verify it pre-selects House District 80
3. Step 3: Data management - import from spreadsheet workflow
4. Step 4: Obsidian notes for remaining counties and districts
5. Consider: address search bar, GitHub Pages deployment
