// =============================================================================
// POLLING LOCATIONS DATA - TN State House District 80
// =============================================================================
// HOW TO ADD A LOCATION:
//   1. Copy one of the existing entries below
//   2. Fill in all the fields with the new location's info
//   3. Make sure "type" is either "early" or "election_day"
//   4. Get lat/lng from Google Maps (right-click a location -> copy coordinates)
//   5. Save this file and refresh the map
// =============================================================================

const POLLING_LOCATIONS = [

  // ---------------------------------------------------------------------------
  // HAYWOOD COUNTY
  // ---------------------------------------------------------------------------
  {
    id: "hay-001",
    name: "Haywood County Election Commission",
    address: "107 N. Washington Ave, Brownsville, TN 38012",
    county: "Haywood",
    state_district: "80",         // TN State House District
    congressional_district: "8",  // US Congressional District
    state_senate_district: "29",  // TN State Senate District
    type: "early",                // "early" or "election_day"
    hours: "Mon-Fri 8am-4:30pm (early voting period)",
    notes: "Main election commission office - serves as early voting site",
    lat: 35.5934,
    lng: -89.2612
  },
  {
    id: "hay-002",
    name: "Brownsville City Hall",
    address: "111 N. Washington Ave, Brownsville, TN 38012",
    county: "Haywood",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "election_day",
    hours: "7am-7pm (Election Day only)",
    notes: "Main election day polling location for Brownsville precinct",
    lat: 35.5930,
    lng: -89.2615
  },
  {
    id: "hay-003",
    name: "Haywood County Courthouse",
    address: "1 N. Washington Ave, Brownsville, TN 38012",
    county: "Haywood",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "election_day",
    hours: "7am-7pm (Election Day only)",
    notes: "Courthouse precinct - verify with Haywood Co. Election Commission",
    lat: 35.5928,
    lng: -89.2618
  },

  // ---------------------------------------------------------------------------
  // HARDEMAN COUNTY
  // ---------------------------------------------------------------------------
  {
    id: "hard-001",
    name: "Hardeman County Election Commission",
    address: "100 N. Main St, Bolivar, TN 38008",
    county: "Hardeman",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "early",
    hours: "Mon-Fri 8am-4:30pm (early voting period)",
    notes: "Main election commission office - primary early voting site",
    lat: 35.2990,
    lng: -88.9993
  },
  {
    id: "hard-002",
    name: "Bolivar City Hall",
    address: "301 S. Washington St, Bolivar, TN 38008",
    county: "Hardeman",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "election_day",
    hours: "7am-7pm (Election Day only)",
    notes: "Main Bolivar precinct polling location",
    lat: 35.2975,
    lng: -88.9985
  },
  {
    id: "hard-003",
    name: "Toone Community Center",
    address: "Main St, Toone, TN 38381",
    county: "Hardeman",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "election_day",
    hours: "7am-7pm (Election Day only)",
    notes: "Toone precinct - verify address with Hardeman Co. Election Commission",
    lat: 35.3665,
    lng: -88.9420
  },

  // ---------------------------------------------------------------------------
  // MADISON COUNTY (parts in District 80)
  // ---------------------------------------------------------------------------
  {
    id: "mad-001",
    name: "South Jackson Civic Center",
    address: "2220 E. Chester St, Jackson, TN 38301",
    county: "Madison",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "early",
    hours: "Mon-Sat 8am-6pm, Sun 1pm-5pm (early voting period)",
    notes: "Early voting site serving the District 80 portion of Madison County",
    lat: 35.5892,
    lng: -88.7873
  },
  {
    id: "mad-002",
    name: "Tigrett Middle School",
    address: "1035 Hollywood Dr, Jackson, TN 38301",
    county: "Madison",
    state_district: "80",
    congressional_district: "8",
    state_senate_district: "29",
    type: "election_day",
    hours: "7am-7pm (Election Day only)",
    notes: "South Jackson precinct - part of District 80 within Madison County",
    lat: 35.5820,
    lng: -88.7790
  }

];

// =============================================================================
// DISTRICT METADATA
// Used by the map to label and color district info in popups
// =============================================================================
const DISTRICTS = {
  state_house: {
    "80": {
      name: "TN House District 80",
      counties: ["Haywood", "Hardeman", "Madison (partial)"],
      representative: "TBD - verify current rep",
      color: "#2563eb"
    }
  },
  congressional: {
    "8": {
      name: "US Congressional District 8",
      color: "#7c3aed"
    }
  },
  state_senate: {
    "29": {
      name: "TN Senate District 29",
      color: "#059669"
    }
  }
};
