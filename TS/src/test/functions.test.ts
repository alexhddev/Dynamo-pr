import { addSong, addSongWithMarshall } from "../app/Queries";
import { checkTableExists, createTable } from "../app/Tables";

describe('functions', () => {

    const tableName = 'Music';

    const someSong = {
        Artist: 'Lady Gaga',
        SongTitle: 'Poker Face',
        Year: 2009
    }

    xtest('create table', async () => {
        const createTableOutput = await createTable();
        expect(createTableOutput.TableDescription?.TableName).toBe(tableName);
    });
    xtest('check table exists', async () => {
        const tableExists = await checkTableExists(tableName);
        expect(tableExists).toBe(true);
    })

    test('add song', async () => {
        const result = await addSong('Maroom 5', 'Sugar');
        expect(result).toBeDefined();
    });

    test('add song with marshall', async () => {
        const result = await addSongWithMarshall(someSong);
        expect(result).toBeDefined();
    });
})