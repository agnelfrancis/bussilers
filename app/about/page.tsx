"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faBus,
  faClock,
  faMapMarkerAlt,
  // faUser,
  faStore,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-start p-4 pt-8">
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-primary mb-4 sm:mb-0">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-primary">About Bussily</h1>
      </div>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardHeader>
          <CardTitle className="text-primary">Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Bussily is a project created by{" "}
            <a
              href="https://agnel-francis.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Agnel Francis Olakkengil
            </a>
            . It was developed to provide the people of Velur with easy access to information about upcoming buses,
            aiming to help the public with a user-friendly interface built using Next.js.
          </p>
          <p className="text-muted-foreground">
            The inspiration for Bussily came from bus timings published by a local medical store in Velur. We are
            immensely grateful for their contribution, which motivated us to create this website and add enhanced
            features to make it more useful for the community.
          </p>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardHeader>
          <CardTitle className="text-primary">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Bussily is dedicated to simplifying bus travel for everyone in Velur and surrounding areas. We aim to
            provide accurate, easily accessible information about bus schedules and routes, making your journey smoother
            and more predictable.
          </p>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardHeader>
          <CardTitle className="text-primary">Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faBus} className="mt-1 mr-3 text-primary" />
              <div>
                <h3 className="font-semibold">Comprehensive Route Information</h3>
                <p className="text-muted-foreground">
                  Access detailed information about various bus routes and their schedules.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faClock} className="mt-1 mr-3 text-primary" />
              <div>
                <h3 className="font-semibold">Upcoming Bus Information</h3>
                <p className="text-muted-foreground">Get information on the next available buses for your route.</p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-primary" />
              <div>
                <h3 className="font-semibold">Easy Search</h3>
                <p className="text-muted-foreground">
                  Quickly find buses to your destination with our user-friendly search feature.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardHeader>
          <CardTitle className="text-primary">Data Accuracy Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-2xl mt-1" />
            <p className="text-muted-foreground">
              Please note that while we strive for accuracy, the bus timings provided on Bussily may not always be
              up-to-date. Our data is sourced locally and offline, and we cannot guarantee its complete accuracy. For
              the most current timings, we recommend verifying with the local bus operators. If you notice any
              discrepancies or have updated information, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl bg-card">
        <CardHeader>
          <CardTitle className="text-primary">Acknowledgements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStore} className="text-primary text-2xl mt-1" />
            <p className="text-muted-foreground">
              We would like to extend our heartfelt thanks to the local medical store in Velur for publishing the
              initial bus timings. Their contribution was instrumental in the creation of Bussily. While we don&apos;t
              have any official partnerships, we&apos;re grateful for their indirect support in helping us serve the
              community better.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">Have questions or suggestions? We&apos;d love to hear from you!</p>
        <Link href="/contact">
          <Button className="bg-primary text-white hover:bg-primary/90">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}

