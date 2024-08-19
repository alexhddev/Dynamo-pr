import { DynamoDBClient, ListTablesCommand, CreateTableCommandInput, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const region = 'eu-west-1';

const client = new DynamoDBClient({ region: region });

export async function checkTableExists(tableName: string) {
    const tables = await client.send(new ListTablesCommand({}));
    const tableNames = tables.TableNames;
    if (tableNames) {
        return tableNames.includes(tableName);
    }
    return false;
}

export async function createTable() {
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

    const result = await client.send(new CreateTableCommand(createTableCommand));
    return result;
}