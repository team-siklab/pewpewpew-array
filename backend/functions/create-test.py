import json
import os
import logging
import boto3

dynamodb = boto3.resource('dynamodb')


def handler(event, context):
    data = json.loads(event['body'])

    # :: failsafes ---
    if 'TestId' not in data:
        logging.error('No TestId provided.')
        raise Exception('No TestId provided.')

    if data['targeturl'] == '':
        logging.error('No target URL provided.')
        raise Exception('No target URL provided.')

    # :: TODO validation checks for other params

    # :: ---

    table = dynamodb.Table(os.environ['DDB_TESTS'])
    table.put_item(Item=data)

    response = {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True
        }
    }

    return response
