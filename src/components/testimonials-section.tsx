'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Rodwell Leo was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish.",
    author: "Tevin",
    role: "Developer Relations",
    company: "ICP Hub - Kenya",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "Working with Rodwell was an absolute delight. His attention to detail and creative solutions elevated our project beyond our expectations.",
    author: "John Ndungu",
    role: "Product Owner",
    company: "Manivas",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-18 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground">
            People I&apos;ve worked with have said some nice things...
          </p>
        </div>

        <Card className="border-none shadow-none">
          <CardContent className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={testimonials[activeIndex].image} alt="Profile picture" />
                  <AvatarFallback>{testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <q className="text-xl leading-relaxed max-w-2xl mx-auto pt-10">
                  {testimonials[activeIndex].quote}
                </q>

                <div className="space-y-2">
                  <div className="font-semibold">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

