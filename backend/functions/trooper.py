import boto3
from multiprocessing import Process, Pipe
from botocore.vendored import requests
import time, datetime

class Trooper(object):
    def __init__(self, rate, target_url, testrunid):
        self.rate = rate
        self.target_url = target_url
        self.testrunid = testrunid

    def fire(self):
        # create a list to keep all processes and connections
        processes = []
        parent_connections = []

        # create a pipe for communication
        parent_conn, child_conn = Pipe()
        parent_connections.append(parent_conn)

        # prep the blasters
        for x in range(self.rate):
            # add pew to blaster
            pew = Process(target=self.pew, args=[])
            processes.append(pew)

        # log start time
        self.start = time.time()

        # hit all targets using the blaster
        for process in processes:
            process.start()

        # make sure that all processes have finished
        for process in processes:
            process.join()

    def pew(self):
        r = requests.get(self.target_url)

        dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-1')
        table = dynamodb.Table('pppa-dev-testruns-table')

        response = table.put_item(
            Item={
                'TestRunId': self.testrunid,
                'Timestamp': self.get_timestamp(r.elapsed).strftime('%b %d %Y %H:%M:%S.%f'),
                'StatusCode': r.status_code,
                'Reason': r.reason
            }
        )

        print('elapsed: %s, status_code: %s, reason: %s' % (
            self.get_timestamp(r.elapsed).strftime('%b %d %Y %H:%M:%S.%f'),
            r.status_code,
            r.reason
        ))

        r.close()

    def get_timestamp(self, elapsed):
        start_dt = datetime.datetime.fromtimestamp(self.start)
        return start_dt + elapsed

def lambda_handler(event, context):
    # parse record from event
    record = event['Records'][0]
    rate = int(record['messageAttributes']['rate']['stringValue'])
    testrunid = record['messageAttributes']['testrunid']['stringValue']
    target_url = record['body']

    # deploy trooper
    trooper = Trooper(rate, target_url, testrunid)

    # fire blaster
    trooper.fire()
