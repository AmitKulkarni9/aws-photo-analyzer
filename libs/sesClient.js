// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
sesClient.js is a helper function that creates the Amazon Simple Email Solution (Amazon SES) service clients.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[photo-analyzer.JavaScript.sesClient]
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { SESClient } from "@aws-sdk/client-ses";

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:3f4987bd-541d-4ef6-aa4e-343abc1f98d1"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon SES service client object.
const sesClient = new SESClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

export { sesClient };
// snippet-end:[photo-analyzer.JavaScript.sesClient]
