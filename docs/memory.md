# Polling Locations - Session Memory

## Project Context
- Sol is an admissions counselor covering Tennessee
- This map started with TN State House District 80 as the first data entry point
- District 80 covers: Haywood County, Hardeman County, and parts of Madison County
- Goal is to eventually cover all of Tennessee for all district types

## Key Decisions Made
- Leaflet.js for maps (already in Sol's stack from ACC project)
- Vanilla HTML/CSS/JS - no framework, keeps it simple and fast to open
- GeoJSON for district boundaries (fetched from US Census TIGER API)
- polling-locations.js is the live data source; Excel spreadsheet is the editable copy
- Obsidian markdown files are cross-linked so graph view shows district -> county -> polling location hierarchy

## Data Source Plan
- Polling locations: manual entry to start, then pull from TN Secretary of State / county election commissions
- District boundaries: US Census TIGER/Line GeoJSON (federal districts) + TN state GIS (state districts)
- Demographics: US Census ACS (American Community Survey) data by county

## Sessions
### 2026-07-26
- Project kicked off
- Step 1 complete: folder, core map, District 80 data, spreadsheet, Obsidian notes
- Next session: Step 2 - add all district layers (congressional, state house, state senate)
