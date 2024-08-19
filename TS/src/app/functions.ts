import { CreateTableCommandInput, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const region = 'eu-west-1';

const client = new DynamoDBClient({ region: region });

async function createTable() {
    const createTableCommand: CreateTableCommandInput = {
        TableName: 'Music',
        AttributeDefinitions:[{
            AttributeName: 'Artist',
            AttributeType: 'S'
        }, {
            AttributeName: 'SongTitle',
            AttributeType: 'S'
        },
        ],
        KeySchema: [{
            AttributeName: 'Artist',
            KeyType: 'HASH'
        }, {
            AttributeName: 'SongTitle',
            KeyType: 'RANGE'
        }],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }        
    }
}