// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2017-04-02', '*')
  .reply(200, "{\r\n  \"nameAvailable\":true,\"reason\":null,\"message\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '57',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'c8069ac8-56b4-4d62-8756-0aaf93227d4e',
  'x-ms-client-request-id': '5cb59365-1760-45df-b610-70a48a170832',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': 'e85e4ade-47ef-4acd-b8cc-34bbe12fe9a7',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212010Z:e85e4ade-47ef-4acd-b8cc-34bbe12fe9a7',
  date: 'Tue, 13 Dec 2016 21:20:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2017-04-02', '*')
  .reply(200, "{\r\n  \"nameAvailable\":true,\"reason\":null,\"message\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '57',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'c8069ac8-56b4-4d62-8756-0aaf93227d4e',
  'x-ms-client-request-id': '5cb59365-1760-45df-b610-70a48a170832',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': 'e85e4ade-47ef-4acd-b8cc-34bbe12fe9a7',
  'x-ms-routing-request-id': 'CENTRALUS:20161213T212010Z:e85e4ade-47ef-4acd-b8cc-34bbe12fe9a7',
  date: 'Tue, 13 Dec 2016 21:20:09 GMT',
  connection: 'close' });
 return result; }]];