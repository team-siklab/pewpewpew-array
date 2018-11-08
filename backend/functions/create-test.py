import json
import os
import logging
import boto3

dynamodb = boto3.resource('dynamodb')


def handler(event, context):
    data = json.loads(event['body'])

    # :: failsafes ---
    if 'testid' not in data:
        logging.error('No testid provided.')
        raise Exception('No testid provided.')

    if 'targeturl' not in data:
        logging.error('No target URL provided.')
        raise Exception('No target URL provided.')

    # :: TODO validation checks for other params

    # :: ---

    table = dynamodb.Table(os.environ['DDB_TESTS'])
    table.put_item(data)

    response = {
        'statusCode': 200,
        'body': json.dumps(data)
    }

    return response
