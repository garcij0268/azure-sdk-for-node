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
 * BackupStatus response.
 *
 */
class BackupStatusResponse {
  /**
   * Create a BackupStatusResponse.
   * @member {string} [protectionStatus] Specifies whether the container is
   * registered or not. Possible values include: 'Invalid', 'NotProtected',
   * 'Protecting', 'Protected', 'ProtectionFailed'
   * @member {string} [vaultId] Specifies the arm resource id of the vault
   * @member {string} [fabricName] Specifies the fabric name - Azure or AD.
   * Possible values include: 'Invalid', 'Azure'
   * @member {string} [containerName] Specifies the product specific container
   * name. E.g. iaasvmcontainer;iaasvmcontainer;csname;vmname.
   * @member {string} [protectedItemName] Specifies the product specific ds
   * name. E.g. vm;iaasvmcontainer;csname;vmname.
   * @member {string} [errorCode] ErrorCode in case of intent failed
   * @member {string} [errorMessage] ErrorMessage in case of intent failed.
   * @member {string} [policyName] Specifies the policy name which is used for
   * protection
   * @member {string} [registrationStatus] Container registration status
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupStatusResponse
   *
   * @returns {object} metadata of BackupStatusResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupStatusResponse',
      type: {
        name: 'Composite',
        className: 'BackupStatusResponse',
        modelProperties: {
          protectionStatus: {
            required: false,
            serializedName: 'protectionStatus',
            type: {
              name: 'String'
            }
          },
          vaultId: {
            required: false,
            serializedName: 'vaultId',
            type: {
              name: 'String'
            }
          },
          fabricName: {
            required: false,
            serializedName: 'fabricName',
            type: {
              name: 'String'
            }
          },
          containerName: {
            required: false,
            serializedName: 'containerName',
            type: {
              name: 'String'
            }
          },
          protectedItemName: {
            required: false,
            serializedName: 'protectedItemName',
            type: {
              name: 'String'
            }
          },
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'errorMessage',
            type: {
              name: 'String'
            }
          },
          policyName: {
            required: false,
            serializedName: 'policyName',
            type: {
              name: 'String'
            }
          },
          registrationStatus: {
            required: false,
            serializedName: 'registrationStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupStatusResponse;