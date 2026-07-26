# Polling Locations - Project Instructions

## What This Is
A Tennessee polling location map and data tool. Built with Leaflet.js (interactive maps in the browser).
The map shows county boundaries, district overlays (congressional, state house, state senate), and polling
location pins split by type: early voting vs. election day.

Started with TN State House District 80 (Haywood, Hardeman, parts of Madison County).

## Project Goal
A living tool updated each election cycle. Eventually covers all of Tennessee with:
- All 95 counties
- All 9 US Congressional Districts
- All 99 TN State House Districts
- All 33 TN State Senate Districts
- Population and demographic overlays per county
- Searchable by address

## How Data Works
- `data/polling-locations.js` is the source of truth for polling location pins on the map
- `polling-locations.xlsx` is the spreadsheet version of the same data (for sharing/editing)
- When you update the spreadsheet, copy the changes into polling-locations.js to update the map
- Each location entry has: name, address, county, district, type (early or election_day), lat/lng, hours

## Stack
- Leaflet.js (maps)
- Vanilla HTML/CSS/JS (no framework, no build step)
- GitHub Pages (hosting, when ready)
- Excel (data management)
- Obsidian (notes and graph view)

## File Map
```
polling-locations/
  index.html              - main map page
  css/style.css           - map styling
  data/polling-locations.js  - polling location pin data
  data/districts.js          - district metadata
  obsidian/               - markdown notes for Obsidian graph view
    districts/            - one .md file per district
    counties/             - one .md file per county
  docs/memory.md          - session notes
  polling-locations.xlsx  - spreadsheet version of polling data
```

## Current Status
Step 1 complete - core map with District 80 and sample data.
Next: add all district GeoJSON layers (congressional, state house, state senate).
