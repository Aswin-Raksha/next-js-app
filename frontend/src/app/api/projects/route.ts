import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");
  const projectName = formData.get("name");

  if (!file || !(file instanceof Blob) || !projectName) {
    return NextResponse.json({ error: "Invalid file upload" }, { status: 400 });
  }

  console.log(`Project Uploaded: ${projectName}`);

  return NextResponse.json({ message: "Project uploaded successfully!" });
}
