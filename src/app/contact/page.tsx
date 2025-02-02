import ContactMeForm from "@/components/contact-me-form";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RequestQuotationForm } from "@/components/request-quotation-form";

export const metadata: Metadata = {
    title: "Contact Me - Rodwell Leo",
    openGraph: {
        title: "Contact Me - Rodwell Leo"
    }
}
export default function Contact() {
    return (
        <main className="space-y-5">
            <section className="space-y-4">
                <div className="space-y-2">
                    <Badge className="text-xl">Contact Me</Badge>
                    <h1 className="font-bold sm:text-5xl text-3xl">Get in Touch</h1>
                    <p className="text-neutral-500">
                        Want to chat or have a project in mind? Just shoot me a <strong>Direct Message</strong> and I will respond as soon as possible.
                    </p>
                </div>
            </section>

            <ContactMeForm />
            {/* <Tabs defaultValue="contact-me" className="w-full">
                <TabsList className="grid w-full">
                    <TabsTrigger value="contact-me">Contact me</TabsTrigger>
                </TabsList>
                <TabsContent value="contact-me">
                    
                </TabsContent>
                <TabsContent value="request-a-quotation">
                    <RequestQuotationForm />
                </TabsContent>
            </Tabs> */}

        </main>
    )
}