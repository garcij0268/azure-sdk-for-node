/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Sku = require('./sku');
exports.Resource = require('./resource');
exports.TrackedResource = require('./trackedResource');
exports.Profile = require('./profile');
exports.ProfileUpdateParameters = require('./profileUpdateParameters');
exports.SsoUri = require('./ssoUri');
exports.SupportedOptimizationTypesListResult = require('./supportedOptimizationTypesListResult');
exports.DeepCreatedOrigin = require('./deepCreatedOrigin');
exports.Endpoint = require('./endpoint');
exports.GeoFilter = require('./geoFilter');
exports.DeliveryRuleAction = require('./deliveryRuleAction');
exports.DeliveryRuleCondition = require('./deliveryRuleCondition');
exports.DeliveryRule = require('./deliveryRule');
exports.EndpointPropertiesUpdateParametersDeliveryPolicy = require('./endpointPropertiesUpdateParametersDeliveryPolicy');
exports.EndpointUpdateParameters = require('./endpointUpdateParameters');
exports.UrlPathConditionParameters = require('./urlPathConditionParameters');
exports.DeliveryRuleUrlPathCondition = require('./deliveryRuleUrlPathCondition');
exports.UrlFileExtensionConditionParameters = require('./urlFileExtensionConditionParameters');
exports.DeliveryRuleUrlFileExtensionCondition = require('./deliveryRuleUrlFileExtensionCondition');
exports.CacheExpirationActionParameters = require('./cacheExpirationActionParameters');
exports.DeliveryRuleCacheExpirationAction = require('./deliveryRuleCacheExpirationAction');
exports.PurgeParameters = require('./purgeParameters');
exports.LoadParameters = require('./loadParameters');
exports.Origin = require('./origin');
exports.OriginUpdateParameters = require('./originUpdateParameters');
exports.ProxyResource = require('./proxyResource');
exports.CustomDomain = require('./customDomain');
exports.CustomDomainParameters = require('./customDomainParameters');
exports.CustomDomainHttpsParameters = require('./customDomainHttpsParameters');
exports.CdnCertificateSourceParameters = require('./cdnCertificateSourceParameters');
exports.CdnManagedHttpsParameters = require('./cdnManagedHttpsParameters');
exports.KeyVaultCertificateSourceParameters = require('./keyVaultCertificateSourceParameters');
exports.UserManagedHttpsParameters = require('./userManagedHttpsParameters');
exports.ValidateCustomDomainInput = require('./validateCustomDomainInput');
exports.ValidateCustomDomainOutput = require('./validateCustomDomainOutput');
exports.CheckNameAvailabilityInput = require('./checkNameAvailabilityInput');
exports.CheckNameAvailabilityOutput = require('./checkNameAvailabilityOutput');
exports.ValidateProbeInput = require('./validateProbeInput');
exports.ValidateProbeOutput = require('./validateProbeOutput');
exports.ResourceUsage = require('./resourceUsage');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.CidrIpAddress = require('./cidrIpAddress');
exports.IpAddressGroup = require('./ipAddressGroup');
exports.EdgeNode = require('./edgeNode');
exports.ErrorResponse = require('./errorResponse');
exports.ProfileListResult = require('./profileListResult');
exports.ResourceUsageListResult = require('./resourceUsageListResult');
exports.EndpointListResult = require('./endpointListResult');
exports.OriginListResult = require('./originListResult');
exports.CustomDomainListResult = require('./customDomainListResult');
exports.OperationsListResult = require('./operationsListResult');
exports.EdgenodeResult = require('./edgenodeResult');
exports.discriminators = {
  'DeliveryRuleAction' : exports.DeliveryRuleAction,
  'DeliveryRuleCondition' : exports.DeliveryRuleCondition,
  'DeliveryRuleCondition.UrlPath' : exports.DeliveryRuleUrlPathCondition,
  'DeliveryRuleCondition.UrlFileExtension' : exports.DeliveryRuleUrlFileExtensionCondition,
  'DeliveryRuleAction.CacheExpiration' : exports.DeliveryRuleCacheExpirationAction,
  'CustomDomainHttpsParameters' : exports.CustomDomainHttpsParameters,
  'CustomDomainHttpsParameters.Cdn' : exports.CdnManagedHttpsParameters,
  'CustomDomainHttpsParameters.AzureKeyVault' : exports.UserManagedHttpsParameters
};
