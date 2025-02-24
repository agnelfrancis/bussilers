import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { busRoutes } from "@/lib/bus-data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBus, faSearch, faInfoCircle, faPhone, faCompass } from "@fortawesome/free-solid-svg-icons"

const routeDirections = {
  thrissur: "Southeast",
  vadakkanchery: "Northeast",
  kechery: "Southwest",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-start p-4 pt-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-center">Bussily</h1>

      <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-2xl px-4">
        Your modern companion for hassle-free bus travel in Velur
      </p>

      <div className="w-full max-w-md mb-12 px-4">
        <Link href="/search">
          <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" />
            Search Buses
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-8">
        {busRoutes.map((route, index) => (
          <Link key={route.id} href={`/route/${route.id}`}>
            <Card className="hover:shadow-lg transition-all duration-300 bg-white hover:bg-red-50 cursor-pointer h-full border-2 border-red-100">
              <CardHeader className="bg-red-100">
                <CardTitle className="flex items-center justify-between text-primary">
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faBus} className="mr-2 w-4 h-4" />
                    {route.name}
                  </span>
                  <span className="text-sm font-normal bg-red-200 px-2 py-1 rounded-full">Route {index + 1}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 flex items-center">
                  <FontAwesomeIcon icon={faCompass} className="mr-2 text-primary w-4 h-4" />
                  Towards {routeDirections[route.id as keyof typeof routeDirections]}
                </p>
                <p className="text-sm text-gray-500 mt-2">View schedule</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Bussiler Conn Announcement */}
      <div className="w-full max-w-2xl px-4 mt-12 text-center bg-red-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-4">New Software Release</h2>
        <p className="text-lg text-gray-700 mb-4">
          Bussiler Conn is a new platform where users can contribute and access updated bus schedules in real-time. Visit the platform to get the latest timetable and help improve bus timings.
        </p>
        <Link href="https://bussilerconn.netlify.app" passHref>
          <Button className="text-lg py-3 px-6 bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            Visit Bussiler Conn
          </Button>
        </Link>
      </div>

      <footer className="mt-16 text-center px-4 py-8 w-full bg-red-100 border-t-2 border-red-200">
        <h2 className="text-2xl font-semibold text-primary mb-4">About Bussily</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Bussily is your go-to platform for real-time bus schedules and route information in Velur. We&apos;re
          committed to making your travel experience smoother and more efficient.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/about">
            <Button variant="outline" className="w-full sm:w-auto hover:bg-red-200 transition-colors duration-300">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2 w-4 h-4" />
              Learn More
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto hover:bg-red-200 transition-colors duration-300">
              <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">© 2023 Bussily. All rights reserved.</p>
      </footer>
    </div>
  )
}
