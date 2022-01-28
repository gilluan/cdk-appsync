import { Template, Match } from '@aws-cdk/assertions';
import * as cdk from '@aws-cdk/core';

import * as CdkRandomuserGraphql from '../lib/cdk-randomuser-graphql-stack';

test('Stack contains GraphQLApi', () => {
    const app = new cdk.App();

    const stack = new CdkRandomuserGraphql.CdkRandomuserGraphqlStack(app, 'MyTestStack');

    const template = Template.fromStack(stack)

    template.hasResourceProperties('AWS::AppSync::GraphQLApi', {
        Name: "cdk-notes-appsync-api"
    })

});


test('Stack contains GraphQLSchema', () => {
    const app = new cdk.App();

    const stack = new CdkRandomuserGraphql.CdkRandomuserGraphqlStack(app, 'MyTestStack');

    const template = Template.fromStack(stack)

    template.hasResourceProperties('AWS::AppSync::GraphQLSchema', {})

});


test('Stack contains ApiKey', () => {
    const app = new cdk.App();

    const stack = new CdkRandomuserGraphql.CdkRandomuserGraphqlStack(app, 'MyTestStack');

    const template = Template.fromStack(stack)

    template.hasResourceProperties('AWS::AppSync::ApiKey', {})

});
