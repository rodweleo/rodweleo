"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ContactMeSchema } from "@/utils/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function ContactMeForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactForm = useForm<z.infer<typeof ContactMeSchema>>({
        resolver: zodResolver(ContactMeSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof ContactMeSchema>) {
        setIsSubmitting(true);
        toast.loading("Sending message. Please wait...", {
            id: "1"
        })
        try {
            const res = await fetch("/api/sendMessage", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw new Error("Failed to send message.");
            }

            toast.success("Message sent successfully!");
            // Reset the form after success
            contactForm.reset();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong.", {
                id: "1"
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-2.5">
                <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="abc@example.com" {...field} className="text-md" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type message here..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending message..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}