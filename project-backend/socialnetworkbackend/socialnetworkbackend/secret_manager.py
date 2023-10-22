# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/

import boto3
from botocore.exceptions import ClientError
import environ
import json

env = environ.Env()


def get_secret(name, key):

    secret_name = name
    region_name = "ap-southeast-1" 

    try: 
        try:
            aws_access_key_id = env(
            'AWS_ACCESS_KEY_ID')
            aws_secret_access_key = env('AWS_SECRET_ACCESS_KEY')
        except: 
            return env(key)

        # Create a Secrets Manager client
        session = boto3.session.Session(aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key)
        client = session.client(
            service_name='secretsmanager',
            region_name=region_name
        )
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        ) 
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        print('client err', e)
        return None

    # Decrypts secret using the associated KMS key.
    secret = get_secret_value_response['SecretString']

    # Your code goes here.
    return json.loads(secret)[key]
