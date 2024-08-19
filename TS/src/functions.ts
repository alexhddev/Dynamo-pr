import { CreateTableCommandInput, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const region = 'eu-west-1';

const client = new DynamoDBClient({ region: region });

async function createTable() {
    const createTableCommand: CreateTableCommandInput = {
        TableName: 'Books',
        
    }

}