#!/usr/bin/env node
import { CfnGuardValidator } from '@cdklabs/cdk-validator-cfnguard';
import { App, Stack } from 'aws-cdk-lib';
import 'source-map-support/register';
import { Backend } from '../lib/website';

const app = new App({
  policyValidationBeta1: [
    new CfnGuardValidator()
  ]
});
const stack = new Stack(app, 'MyStack');

new Backend(stack, 'Backend');