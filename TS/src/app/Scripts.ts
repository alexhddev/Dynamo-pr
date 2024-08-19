import { addSongWithMarshall } from "./Queries";




/**
 * produces ProvisionedThroughputExceededException: The level of configured provisioned throughput for the table was exceeded. Consider increasing 
your provisioning level with the UpdateTable API.
for WriteCapacityUnits: 1
 */
export async function stressTable() {
    try {
        for (let i = 0; i < 100; i++) {
            const song = getLargeSong();
            await addSongWithMarshall(song);
            console.log('Added song ', i);
        }
    } catch (error) {
        console.error(error);
    }
}

stressTable();

function getLargeSong() {

    let longString = '';
    for (let i = 0; i < 30; i++){
        longString += generateRandomString();
    }

    return {
        Artist: 'LargeArtist' + generateRandomString(),
        SongTitle: 'Large SongTitle' + generateRandomString(),
        description: longString
    }
}

function generateRandomString(){
    return Math.random().toString(36).substring(7);
}
