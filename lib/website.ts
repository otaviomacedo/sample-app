import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class Backend extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const bucket = new Bucket(this, 'Bucket', {
      publicReadAccess: false,
    });

    const fn = new lambda.Function(this, 'Function', {
      code: Code.fromInline('exports.handler = () => "Hello, World!";'),
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
    });

    bucket.grantReadWrite(fn);
  }

}