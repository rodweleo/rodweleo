import { NextResponse, NextRequest } from "next/server";
import emailjs from "@emailjs/nodejs";

const SERVICE_ID = process.env.NEXT_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_EMAILJS_TEMPLATE_ID!;
const PRIVATE_KEY = process.env.NEXT_EMAILJS_PRIVATE_KEY!;
const PUBLIC_KEY = process.env.NEXT_EMAILJS_PUBLIC_KEY!;

export async function POST(req: NextRequest) {
    try {
        // Parse the JSON body of the request
        const data = await req.json();

        const templateParams = {
            name: data.firstName + " " + data.lastName,
            ...data
        }
        // send an email using EmailJS
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
            publicKey: PUBLIC_KEY,
            privateKey: PRIVATE_KEY
        });

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error in sending message:", error);
        return NextResponse.json(
            { error: error.message || "Failed to send message" },
            { status: 500 }
        );
    }
}
