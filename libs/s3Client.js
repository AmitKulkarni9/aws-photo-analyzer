// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/*
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
s3Client.js is a helper function that creates the Amazon Simple Storage Solution (Amazon S3) service clients.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[photo-analyzer.JavaScript.s3Client]
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client } from "@aws-sdk/client-s3";

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:3f4987bd-541d-4ef6-aa4e-343abc1f98d1"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon S3 service client object.
const s3Client = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

export { REGION, s3Client };
// snippet-end:[photo-analyzer.JavaScript.s3Client]
