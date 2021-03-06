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
 * Properties for retargeting a virtual machine schedule.
 *
 */
class RetargetScheduleProperties {
  /**
   * Create a RetargetScheduleProperties.
   * @property {string} [currentResourceId] The resource Id of the virtual
   * machine on which the schedule operates
   * @property {string} [targetResourceId] The resource Id of the virtual
   * machine that the schedule should be retargeted to
   */
  constructor() {
  }

  /**
   * Defines the metadata of RetargetScheduleProperties
   *
   * @returns {object} metadata of RetargetScheduleProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RetargetScheduleProperties',
      type: {
        name: 'Composite',
        className: 'RetargetScheduleProperties',
        modelProperties: {
          currentResourceId: {
            required: false,
            serializedName: 'currentResourceId',
            type: {
              name: 'String'
            }
          },
          targetResourceId: {
            required: false,
            serializedName: 'targetResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RetargetScheduleProperties;
