// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2019-08-01.10.0', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2019-08-05T19:39:49.245153Z\",\"results\":\"$TargetDedicatedNodes=2;$TargetLowPriorityNodes=0;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fe031b27-a717-4d84-abe9-2c6b9c412848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Mon, 05 Aug 2019 19:39:49 GMT',
  connection: 'close' });
 return result; }]];