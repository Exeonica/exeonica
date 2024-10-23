import { uploadCV } from "@/utils/methods.js";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const email = formData.get("email");

    if (!file || !email) {
      return new Response(JSON.stringify({ message: "Missing file or email" }), { status: 400 });
    }

    const downloadURL = await uploadCV(file, email);

    return new Response(JSON.stringify({ url: downloadURL }), { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);

    return new Response(JSON.stringify({ message: "File upload failed", error: error.message }), { status: 500 });
  }
}
