import { Client, Storage, InputFile } from "node-appwrite";

export async function initApi() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
    .setProject("6487629c7b2b884402f4") // Your project ID 
  return new Storage(client);
}

export async function uploadFile(api, fileName, file) {
  await api.createFile(
    "6488c941246c76aa73d6",
    fileName,
    InputFile.fromBuffer(file, fileName)
  );
}

export async function downloadFile(api, fileName) {
  const response = await api.getFileView("6488c941246c76aa73d6", fileName);
}
