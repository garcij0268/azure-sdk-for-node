// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1277?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1277.azuredatalakestore.net\",\"accountId\":\"07a865e6-8bd2-4d0d-9355-7fefa473b801\",\"creationTime\":\"2017-03-23T20:55:06.9490342Z\",\"lastModifiedTime\":\"2017-03-23T20:55:06.9490342Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1277\",\"name\":\"xplattestadls1277\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8582e7cf-f4e2-4f49-8cf2-f6bad1bb4eb6',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '31ee6221-29f3-49f0-8d2c-439468ac3ce9',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205615Z:31ee6221-29f3-49f0-8d2c-439468ac3ce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1277?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls1277.azuredatalakestore.net\",\"accountId\":\"07a865e6-8bd2-4d0d-9355-7fefa473b801\",\"creationTime\":\"2017-03-23T20:55:06.9490342Z\",\"lastModifiedTime\":\"2017-03-23T20:55:06.9490342Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls1277\",\"name\":\"xplattestadls1277\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8582e7cf-f4e2-4f49-8cf2-f6bad1bb4eb6',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '31ee6221-29f3-49f0-8d2c-439468ac3ce9',
  'x-ms-routing-request-id': 'WESTUS2:20170323T205615Z:31ee6221-29f3-49f0-8d2c-439468ac3ce9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:15 GMT',
  connection: 'close' });
 return result; }]];