#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsCdkTodoStack } from '../lib/aws_cdk_todo-stack';

const app = new cdk.App();
new AwsCdkTodoStack(app, 'AwsCdkTodoStack');
