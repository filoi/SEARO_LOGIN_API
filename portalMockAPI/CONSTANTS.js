exports.DHIS_URL_BASE = "http://localhost:8080/dhis2-stable-2.33.5";

exports.username = "";
exports.password = "";
exports.auth =
  "Basic " +
  new Buffer(exports.username + ":" + exports.password).toString("base64");

exports.endpointWhitelist = [
  "organisationUnits",
  "organisationUnitGroups",
  "indicatorGroups",
  "analytics",
  "dataElementGroups",
  "sqlViews",
  "system",
  "systemSettings",
  "dimensions",
  "me",
  "geoFeatures",
  "optionSets"
];
