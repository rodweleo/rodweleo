"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ContactMeSchema } from "@/utils/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import { toast } from 'react-toastify';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMeForm() {
    const formRef = useRef<HTMLFormElement | null>(null)

    const contactForm = useForm<z.infer<typeof ContactMeSchema>>({
        resolver: zodResolver(ContactMeSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof ContactMeSchema>) {
        if (formRef.current) {
            emailjs.sendForm(process.env.NEXT_EMAILJS_SERVICE_ID!, process.env.NEXT_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_EMAILJS_PUBLIC_KEY!).then(() => {
                toast.success(`Hello ${values.firstName}, your message has been sent.`)
                contactForm.reset();
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <Form {...contactForm}>
            <form ref={formRef} onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                        control={contactForm.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className="text-md">First name</FormLabel>
                                <FormControl>
                                    <Input className="text-md" type="text" placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={contactForm.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Last name</FormLabel>
                                <FormControl>
                                    <Input type="Doe" placeholder="Doe" {...field} className="text-md" />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md">Email Address</FormLabel>
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
                            <FormLabel className="text-md">Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type message here..." {...field} className="text-md" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={!contactForm.formState.isDirty || !contactForm.formState.isValid}>Send Message</Button>
            </form>
        </Form>
    )
}