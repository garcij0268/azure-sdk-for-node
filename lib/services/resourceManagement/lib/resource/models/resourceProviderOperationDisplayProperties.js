/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResourceProviderOperationDisplayProperties class.
 * @constructor
 * Resource provider operation's display properties.
 * @member {string} [publisher] Gets or sets operation description.
 * 
 * @member {string} [provider] Gets or sets operation provider.
 * 
 * @member {string} [resource] Gets or sets operation resource.
 * 
 * @member {string} [operation] Gets or sets operation.
 * 
 * @member {string} [description] Gets or sets operation description.
 * 
 */
function ResourceProviderOperationDisplayProperties(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.publisher !== undefined) {
      this.publisher = parameters.publisher;
    }
    if (parameters.provider !== undefined) {
      this.provider = parameters.provider;
    }
    if (parameters.resource !== undefined) {
      this.resource = parameters.resource;
    }
    if (parameters.operation !== undefined) {
      this.operation = parameters.operation;
    }
    if (parameters.description !== undefined) {
      this.description = parameters.description;
    }
  }    
}


/**
 * Validate the payload against the ResourceProviderOperationDisplayProperties schema
 *
 * @param {JSON} payload
 *
 */
ResourceProviderOperationDisplayProperties.prototype.serialize = function () {
  var payload = {};
  if (this['publisher'] !== null && this['publisher'] !== undefined) {
    if (typeof this['publisher'].valueOf() !== 'string') {
      throw new Error('this[\'publisher\'] must be of type string.');
    }
    payload['publisher'] = this['publisher'];
  }

  if (this['provider'] !== null && this['provider'] !== undefined) {
    if (typeof this['provider'].valueOf() !== 'string') {
      throw new Error('this[\'provider\'] must be of type string.');
    }
    payload['provider'] = this['provider'];
  }

  if (this['resource'] !== null && this['resource'] !== undefined) {
    if (typeof this['resource'].valueOf() !== 'string') {
      throw new Error('this[\'resource\'] must be of type string.');
    }
    payload['resource'] = this['resource'];
  }

  if (this['operation'] !== null && this['operation'] !== undefined) {
    if (typeof this['operation'].valueOf() !== 'string') {
      throw new Error('this[\'operation\'] must be of type string.');
    }
    payload['operation'] = this['operation'];
  }

  if (this['description'] !== null && this['description'] !== undefined) {
    if (typeof this['description'].valueOf() !== 'string') {
      throw new Error('this[\'description\'] must be of type string.');
    }
    payload['description'] = this['description'];
  }

  return payload;
};

/**
 * Deserialize the instance to ResourceProviderOperationDisplayProperties schema
 *
 * @param {JSON} instance
 *
 */
ResourceProviderOperationDisplayProperties.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['publisher'] !== undefined) {
      this['publisher'] = instance['publisher'];
    }

    if (instance['provider'] !== undefined) {
      this['provider'] = instance['provider'];
    }

    if (instance['resource'] !== undefined) {
      this['resource'] = instance['resource'];
    }

    if (instance['operation'] !== undefined) {
      this['operation'] = instance['operation'];
    }

    if (instance['description'] !== undefined) {
      this['description'] = instance['description'];
    }
  }

  return this;
};

module.exports = ResourceProviderOperationDisplayProperties;