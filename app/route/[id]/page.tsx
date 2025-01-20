"use client"

import { useState, useMemo, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { busRoutes, type BusTime } from "@/lib/bus-data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faMapMarkerAlt,
  faChevronUp,
  faChevronDown,
  faExclamationTriangle,
  faArrowLeft,
  faBus,
  faRoute,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons"

const routeDirections = {
  thrissur: "Southeast",
  vadakkanchery: "Northeast",
  kechery: "Southwest",
}

export default function RoutePage() {
  const { id } = useParams()
  const [showAllBuses, setShowAllBuses] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const route = useMemo(() => busRoutes.find((r) => r.id === id), [id])
  const routeIndex = useMemo(() => busRoutes.findIndex((r) => r.id === id), [id])
  const routeNumber = routeIndex + 1

  const filteredBusTimes = useMemo(() => {
    if (!route) return []
    return route.data.filter(
      (bus: BusTime) =>
        bus.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.destinations.some((dest) => dest.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [route, searchQuery])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!route) return <div className="text-gray-800">Route not found</div>

  const getUpcomingBuses = () => {
    const now = new Date()
    const currentTime = now.getHours() * 60 + now.getMinutes()

    return filteredBusTimes.filter((bus: BusTime) => {
      const [hours, minutes] = bus.time.split(":").map(Number)
      const busTime = hours * 60 + minutes
      return busTime > currentTime
    })
  }

  const nextBus = getUpcomingBuses()[0]
  const upcomingBuses = getUpcomingBuses().slice(1, 4)

  const displayedBuses = showAllBuses ? filteredBusTimes : upcomingBuses

  const formatRemainingTime = (busTime: string) => {
    const now = new Date()
    const [hours, minutes] = busTime.split(":").map(Number)
    const busDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes)
    if (busDate < now) busDate.setDate(busDate.getDate() + 1)
    const diff = busDate.getTime() - now.getTime()
    const remainingMinutes = Math.floor(diff / (1000 * 60))
    if (remainingMinutes === 0) return "Now"
    const remainingHours = Math.floor(remainingMinutes / 60)
    return remainingHours > 0 ? `${remainingHours}h ${remainingMinutes % 60}m` : `${remainingMinutes}m`
  }

  const formatDestinations = (destinations: string[]) => {
    if (destinations.length <= 2) return destinations.join(" - ")
    return `${destinations[0]} - ... - ${destinations[destinations.length - 1]}`
  }

  const isSunday = new Date().getDay() === 0
  const isLastBusPassed = getUpcomingBuses().length === 0
  const isLastBusOfDay = isLastBusPassed && !isSunday

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-start p-2 sm:p-4 pt-4 sm:pt-8">
      <div className="w-full max-w-4xl flex flex-col items-start mb-4 sm:mb-8">
        <Link href="/" className="mb-4">
          <Button variant="ghost" size="sm" className="text-primary hover:bg-red-100 transition-colors duration-300">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Routes
          </Button>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary text-left">
          <span className="block">{route.name} Bus Schedule</span>
          <span className="block text-base sm:text-lg font-normal mt-2">
            <FontAwesomeIcon icon={faRoute} className="mr-2" />
            Route {routeNumber} - Towards {routeDirections[id as keyof typeof routeDirections]}
          </span>
        </h1>
      </div>

      {nextBus && (
        <Card className="w-full max-w-4xl mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl flex items-center text-white">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <FontAwesomeIcon icon={faBus} className="text-white" />
              </div>
              <span className="ml-2">Next Bus</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-white" />
                  <span className="font-semibold text-xl sm:text-2xl">{nextBus.time}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />
                  <span className="text-base sm:text-lg">{formatDestinations(nextBus.destinations)}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl sm:text-4xl font-bold">{formatRemainingTime(nextBus.time)}</p>
                <p className="text-sm mt-1">until departure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="w-full max-w-4xl bg-white shadow-md border-2 border-red-100">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-xl sm:text-2xl flex items-center text-primary">
            <FontAwesomeIcon icon={faRoute} className="mr-2" />
            {showAllBuses ? "All Buses" : "Upcoming Buses"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mt-4">
            <div className="relative">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by time or destination"
                className="pl-10 border-2 border-red-100 focus:border-primary focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex justify-end mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAllBuses(!showAllBuses)}
                className="text-primary hover:bg-red-100 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={showAllBuses ? faChevronUp : faChevronDown} className="mr-2" />
                {showAllBuses ? "Show Less" : "Show All"}
              </Button>
            </div>

            {isSunday && route.name === "Thrissur" ? (
              <div className="flex items-center justify-center p-6 bg-yellow-100 rounded-lg border-2 border-yellow-200">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-3xl mr-4" />
                <p className="text-yellow-700 font-medium text-lg">No buses are running on this route on Sundays.</p>
              </div>
            ) : isLastBusOfDay ? (
              <div className="flex items-center justify-center p-6 bg-orange-100 rounded-lg border-2 border-orange-200">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-500 text-3xl mr-4" />
                <p className="text-orange-700 font-medium text-lg">No more buses for today. Check back tomorrow!</p>
              </div>
            ) : displayedBuses.length === 0 ? (
              <div className="flex items-center justify-center p-6 bg-red-100 rounded-lg border-2 border-red-200">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-3xl mr-4" />
                <p className="text-red-700 font-medium text-lg">No buses found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedBuses.map((bus: BusTime, index: number) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center p-4 bg-white rounded-lg hover:bg-red-50 transition-colors duration-200 border-2 border-red-100 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faBus} className="text-primary text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
                          <span className="font-semibold text-lg">{bus.time}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />
                          <span className="text-sm sm:text-base text-gray-600">
                            {formatDestinations(bus.destinations)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {getUpcomingBuses().includes(bus) && (
                      <div className="text-right">
                        <p className="text-lg font-medium text-primary">{formatRemainingTime(bus.time)}</p>
                        <p className="text-sm text-gray-500">until departure</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <footer className="mt-8 sm:mt-16 text-center px-4 py-6 sm:py-8 w-full bg-gradient-to-r from-red-100 to-red-50 border-t-2 border-red-200">
        <p className="text-gray-700 font-semibold text-sm sm:text-base">© 2023 Bussily. All rights reserved.</p>
        <div className="flex flex-wrap justify-center space-x-4 mt-2 sm:mt-4">
          <Link href="/about" className="text-primary hover:underline text-sm sm:text-base">
            About
          </Link>
          <Link href="/contact" className="text-primary hover:underline text-sm sm:text-base">
            Contact
          </Link>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-2 sm:right-4 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  )
}

