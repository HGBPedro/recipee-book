import { PutObjectCommand } from '@aws-sdk/client-s3'
import { s3Client } from '../libs/sampleClient'

async function uploadToBucket (imageName: string, blob: Buffer) {
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imageName,
      Body: blob,
      ACL: 'public-read'
    }

    const results = await s3Client.send(new PutObjectCommand(params))
    console.log("Successfully created " + params.Key + " and uploaded it to " + params.Bucket + "/" + params.Key)
    return results
  } catch (err) {
    throw err
  }
}

export { uploadToBucket }