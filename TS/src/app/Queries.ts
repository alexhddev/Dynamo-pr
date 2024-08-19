import { CreateTableCommand, CreateTableCommandInput, DynamoDBClient, ListTablesCommand, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall } from '@aws-sdk/util-dynamodb'

const region = 'eu-west-1';

const client = new DynamoDBClient({ region: region });

export async function addSongWithMarshall(song: { Artist: string, SongTitle: string }) {
    const addSongCommand : PutItemCommandInput = {
        TableName: 'Music',
        Item: marshall(song),
        ReturnValues: 'ALL_OLD'
    }
    const result = await client.send(new PutItemCommand(addSongCommand));
    return result;
}

export async function addSong ( artist: string, songTitle: string ) {
    const addSongCommand : PutItemCommandInput = {
        TableName: 'Music',
        Item: {
            'Artist': {S: artist},
            'SongTitle': {S: songTitle}
        },
        ReturnValues: 'ALL_OLD'
    }
    const result = await client.send(new PutItemCommand(addSongCommand));
    return result;

}