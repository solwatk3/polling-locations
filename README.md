# Tennessee Polling Locations Map

An interactive map of Tennessee polling locations, layered by county, congressional district,
state house district, and state senate district.

## What It Does
- Shows all polling locations in Tennessee as clickable map pins
- Distinguishes early voting locations from election day locations
- Lets you toggle different district boundary layers on and off
- Includes address, hours, and district info for each location

## How to Open
Open `index.html` directly in any browser. No server required.

## How to Add Polling Locations
1. Open `data/polling-locations.js`
2. Copy an existing entry and fill in the new location's details
3. Save the file and refresh the map

OR update the spreadsheet `polling-locations.xlsx` and copy the new rows into the JS file.

## Data Currently Loaded
- TN State House District 80 (Haywood County, Hardeman County, parts of Madison County)

## Planned Additions
- All TN district boundary layers (congressional, state senate, state house)
- Demographics overlay (population, voter registration by county)
- Address search
- Full statewide polling location data
