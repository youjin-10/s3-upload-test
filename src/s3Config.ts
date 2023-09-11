export const s3Config = {
  bucketName: "yj-pinks-test",
  // dirName: 'directory-name',      /* Optional */
  region: "ap-northeast-2",
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,

  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  s3Url: "https://yj-pinks-test.s3.ap-northeast-2.amazonaws.com" /* optional */,
};
