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

/**
 * Defines the parameters for IsDevice match conditions
 *
 */
class IsDeviceMatchConditionParameters {
  /**
   * Create a IsDeviceMatchConditionParameters.
   * @property {boolean} [negateCondition] Describes if this is negate
   * condition or not
   * @property {array} matchValues The match value for the condition of the
   * delivery rule
   * @property {array} [transforms] List of transforms
   */
  constructor() {
  }

  /**
   * Defines the metadata of IsDeviceMatchConditionParameters
   *
   * @returns {object} metadata of IsDeviceMatchConditionParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IsDeviceMatchConditionParameters',
      type: {
        name: 'Composite',
        className: 'IsDeviceMatchConditionParameters',
        modelProperties: {
          odatatype: {
            required: true,
            isConstant: true,
            serializedName: '@odata\\.type',
            defaultValue: '#Microsoft.Azure.Cdn.Models.DeliveryRuleIsDeviceConditionParameters',
            type: {
              name: 'String'
            }
          },
          operator: {
            required: true,
            isConstant: true,
            serializedName: 'operator',
            defaultValue: 'Equal',
            type: {
              name: 'String'
            }
          },
          negateCondition: {
            required: false,
            serializedName: 'negateCondition',
            type: {
              name: 'Boolean'
            }
          },
          matchValues: {
            required: true,
            serializedName: 'matchValues',
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
          transforms: {
            required: false,
            serializedName: 'transforms',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IsDeviceMatchConditionParameters;