import boto3
import json
import uuid

aws_account_id = '214400071163'
queue_name = 'dropship'

def lambda_handler(event, context):
    # load body
    body = json.loads(event.get('body'))

    # get target url
    target_url = body.get('target_url', None)

    if target_url is None:
        print('Target URL not provided. Halting.')
    else:
        # get parameters from event
        rate = body.get('rate', 10)
        wait = body.get('wait', 1)
        duration = body.get('duration', 60)
        testrunid = body.get('testrunid', str(uuid.uuid4()))

        print('Star Destroyer has set parameters: rate=%s, wait=%s, duration=%s' %(
            rate,
            wait,
            duration
        ))

        # get active regions
        region_list = []
        (region_list.append('us-east-1') if body.get('us-east-1', False) else None)
        (region_list.append('us-east-2') if body.get('us-east-2', False) else None)
        (region_list.append('us-west-1') if body.get('us-west-1', False) else None)
        (region_list.append('us-west-2') if body.get('us-west-2', False) else None)
        (region_list.append('ap-south-1') if body.get('ap-south-1', False) else None)
        (region_list.append('ap-northeast-1') if body.get('ap-northeast-1', False) else None)
        (region_list.append('ap-northeast-2') if body.get('ap-northeast-2', False) else None)
        (region_list.append('ap-southeast-1') if body.get('ap-southeast-1', False) else None)
        (region_list.append('ap-southeast-2') if body.get('ap-southeast-2', False) else None)
        (region_list.append('ca-central-1') if body.get('ca-central-1', False) else None)
        (region_list.append('eu-central-1') if body.get('eu-central-1', False) else None)
        (region_list.append('eu-west-1') if body.get('eu-west-1', False) else None)
        (region_list.append('eu-west-2') if body.get('eu-west-2', False) else None)
        (region_list.append('eu-west-3') if body.get('eu-west-3', False) else None)
        (region_list.append('sa-east-1') if body.get('sa-east-1', False) else None)

        # loop through each active region
        for region in region_list:
            print('Launching Dropship to %s region' % (region))

            # init tick
            tick = 0

            sqs = boto3.client('sqs', region_name=region)
            queue_url = 'https://sqs.%s.amazonaws.com/%s/dropship' % (
                region,
                aws_account_id
            )

            # loop through the duration
            for x in range(duration):
                tick += 1
                if tick == wait: # if done waiting?
                    tick = 0 # rest tick

                    response = sqs.send_message(
                        QueueUrl=queue_url,
                        DelaySeconds=x+1,
                        MessageAttributes={
                            'rate': {
                                'DataType': 'Number',
                                'StringValue': str(rate)
                            },
                            'testrunid': {
                                'DataType': 'String',
                                'StringValue': testrunid
                            }
                        },
                        MessageBody=target_url
                    )

            print('Dropship launched for %s region.' % (region))
            print('%s troopers will deploy every %s second/s for %s second/s. Watch out for pew pew pew!' % (
                rate,
                wait,
                duration
            ))

    return {
        'statusCode': 200,
        'body': 'Fire in the hole!',
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
