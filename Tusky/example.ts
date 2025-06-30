import { Tusky } from "@tusky-io/ts-sdk";

const APIKEY = process.env.TUSKY_API_KEY as string;
const VAULT_NAME = "NFTs"
let vaultId = "" // needs to be created with createVault first
const fileIds: string[] = [];

const createVault = async (client: Tusky) => {
    const response = await client.vault.create(VAULT_NAME, {encrypted: false});
    vaultId = response.id;
    console.log(response);
}


const uploadFile = async(client: Tusky, filePath: string) => {
    const fileId = await client.file.upload(vaultId, filePath);
    fileIds.push(fileId);
    console.log(`File uploaded successfully and got id: ${fileId}`);
}

const readFile = async(client: Tusky) => {
    if (fileIds.length > 0) {
        const response = await client.file.get(fileIds[0]);
        console.log (response)
    }
}

const main = async () => {
    const fileToUpload = "../images/walrus1.jpg"
    // Create a client
    const client = new Tusky({apiKey: APIKEY});

    // Create a vault
    await createVault(client);

    // Upload a file
    await uploadFile(client, fileToUpload);

    // Read the file
    readFile(client);
}