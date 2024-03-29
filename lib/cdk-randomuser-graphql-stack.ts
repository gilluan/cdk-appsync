import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkRandomuserGraphqlStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AppSync API
    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'cdk-notes-appsync-api',
      schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365))
          }
        },
      },
      xrayEnabled: true,
    });


    const notesLambda = new lambda.Function(this, 'AppSyncUserHandler', {
      runtime: lambda.Runtime.NODEJS_14_X ,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('fn-lambda'),
      memorySize: 1024
    });

    // Set the new Lambda function as a data source for the AppSync API
    const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);

    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "listUsers"
    });


    // Prints out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIURL", {
      value: api.graphqlUrl
    });

//     // Prints out the AppSync GraphQL API key to the terminal
//     new cdk.CfnOutput(this, "GraphQLAPIKey", {
//       value: api.apiKey || ''
//     });

    // Prints out the stack region to the terminal
//     new cdk.CfnOutput(this, "Stack Region", {
//       value: this.region
//     });
  }
}
