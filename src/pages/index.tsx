import Image from "next/image";
import { Inter } from "next/font/google";
import FileUpload from "@/FileUpload";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>123123123</div>
      <FileUpload />
    </main>
  );
}
