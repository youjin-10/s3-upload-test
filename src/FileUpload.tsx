import React, { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import S3 from "react-aws-s3";
import ReactS3Client from "react-aws-s3-typescript";
import { s3Config } from "./s3Config";

const config = {
  bucketName: "yj-pinks-test",
  //   dirName: "" /* optional */,
  region: "ap-northeast-2",
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  s3Url: "https://yj-pinks-test.s3.ap-northeast-2.amazonaws.com" /* optional */,
};

// const ReactS3Client = new S3(config);

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<any>();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const fileName = selectedFile.name;
    console.log(fileName);
    console.log(typeof selectedFile);

    const s3 = new ReactS3Client(s3Config);
    s3.uploadFile(selectedFile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // ReactS3Client.uploadFile(selectedFile)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));

    // Upload file to S3 here
    // const client = new S3Client({
    //   region: "ap-northeast-2",
    //   credentials: {
    //     accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    //     secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    //   },
    // });
    // const command = new PutObjectCommand({
    //   Bucket: "yj-pinks-test",
    //   Key: selectedFile!.name,
    //   Body: selectedFile,
    // });

    // try {
    //   const signedUrl = await getSignedUrl(client, command, {
    //     expiresIn: 3600,
    //   });
    //   console.log(`Successfully uploaded file. URL: ${signedUrl}`);
    // } catch (err) {
    //   console.error("Error uploading file: ", err);
    // }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
