"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-start p-4 pt-8">
      <motion.div
        className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-primary mb-4 sm:mb-0">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
      </motion.div>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardHeader>
          <CardTitle className="text-primary">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-muted-foreground">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Other Ways to Reach Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you prefer, you can also reach out to us via email or social media:
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@bussily.com" className="text-primary hover:underline">
                contact@bussily.com
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/bussily"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @bussily
              </a>
            </li>
            <li>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://facebook.com/bussily"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Bussily
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

