/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Property details.
 *
 * @extends models['Resource']
 */
class PropertyContract extends models['Resource'] {
  /**
   * Create a PropertyContract.
   * @member {array} [tags] Optional tags that when provided can be used to
   * filter the property list.
   * @member {boolean} [secret] Determines whether the value is a secret and
   * should be encrypted or not. Default value is false.
   * @member {string} displayName Unique name of Property. It may contain only
   * letters, digits, period, dash, and underscore characters.
   * @member {string} value Value of the property. Can contain policy
   * expressions. It may not be empty or consist only of whitespace.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PropertyContract
   *
   * @returns {object} metadata of PropertyContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyContract',
      type: {
        name: 'Composite',
        className: 'PropertyContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'properties.tags',
            constraints: {
              MaxItems: 32
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          secret: {
            required: false,
            serializedName: 'properties.secret',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: true,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 256,
              MinLength: 1,
              Pattern: '^[A-Za-z0-9-._]+$'
            },
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'properties.value',
            constraints: {
              MaxLength: 4096,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyContract;