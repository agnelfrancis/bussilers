"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { busRoutes, type BusTime } from "@/lib/bus-data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBus, faSearch, faArrowLeft, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const destinations = [
  "Thrissur",
  "Vadakkanchery",
  "Kechery",
  "Kiralur",
  "Mundur",
  "Kottekad",
  "Arampilly",
  "Vadakanchery",
  "Attathara",
  "Kumblangad",
  "Chelakkara",
  "Pazhayannur",
  "Palakkad",
  "Mundathikode",
  "Medical College",
  "Amballur",
  "Vazhani",
  "Engangadu",
  "Puthuruthy",
  "Kumbangad",
  "Parapur",
  "Oorakam",
  "Pavaratty",
  "Chavakkad",
  "Kunnamkulam",
  "Guruvayur",
  "Choondal Hospital",
  "Kaiparambi",
  "Aloor",
  "Elavally",
  "Matam",
  "Ponnore",
  "Enamavu",
  "Thoykavu",
  "Velur Chungam",
]

export default function SearchPage() {
  const [destination, setDestination] = useState("")
  const [searchResults, setSearchResults] = useState<Array<BusTime & { routeName: string; routeId: string }>>([])

  const handleSearch = () => {
    const results = busRoutes.flatMap((route) =>
      route.data
        .filter((bus) => bus.destinations.some((dest) => dest.toLowerCase().includes(destination.toLowerCase())))
        .map((bus) => ({ ...bus, routeName: route.name, routeId: route.id })),
    )
    setSearchResults(results)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex flex-col items-center justify-start p-4 pt-8">
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-primary mb-4 sm:mb-0">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-primary">Search Buses</h1>
      </div>

      <Card className="w-full max-w-4xl bg-card mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-full pl-10"
              />
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {destinations.map((dest, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setDestination(dest)}
                  className="text-xs"
                >
                  {dest}
                </Button>
              ))}
            </div>
            <Button onClick={handleSearch} className="w-full">
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {searchResults.length > 0 && (
        <Card className="w-full max-w-4xl bg-card">
          <CardHeader>
            <CardTitle className="text-primary">Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {searchResults.map((bus, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-accent rounded-lg"
                >
                  <div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
                      <p className="font-semibold text-primary">{bus.time}</p>
                    </div>
                    <div className="flex items-center mt-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{bus.destinations.join(" - ")}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Route: {bus.routeName}</p>
                  </div>
                  <Link href={`/route/${bus.routeId}`} className="mt-2 sm:mt-0">
                    <Button variant="outline" size="sm">
                      <FontAwesomeIcon icon={faBus} className="mr-2" />
                      View Route
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

