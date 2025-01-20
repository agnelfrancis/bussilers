export type BusTime = {
  time: string
  destinations: string[]
  viaVazhani?: boolean
}

export type BusRoute = {
  id: string
  name: string
  data: BusTime[]
}

export const busRoutes: BusRoute[] = [
  {
    id: "thrissur",
    name: "Thrissur",
    data: [
      { time: "05:45", destinations: ["Kiralur", "Thrissur"] },
      { time: "06:40", destinations: ["Kiralur", "Thrissur"] },
      { time: "06:40", destinations: ["Kecheri", "Mundur", "Kottekkad", "Thrissur"] },
      { time: "07:25", destinations: ["Kiralur", "Thrissur"] },
      { time: "07:45", destinations: ["Kiralur", "Mundur", "Thrissur"] },
      { time: "08:15", destinations: ["Arampilly", "Thrissur"] },
      { time: "09:10", destinations: ["Kiralur", "Thrissur"] },
      { time: "10:25", destinations: ["Kiralur", "Thrissur"] },
      { time: "10:40", destinations: ["Arampilly", "Thrissur"] },
      { time: "10:55", destinations: ["Kechery", "Mundur", "Kottekad", "Thrissur"] },
      { time: "11:25", destinations: ["Kiralur", "Thrissur"] },
      { time: "11:30", destinations: ["Arampilly", "Thrissur"] },
      { time: "13:10", destinations: ["Kiralur", "Mundur", "Thrissur"] },
      { time: "14:20", destinations: ["Arampilly", "Thrissur"] },
      { time: "15:25", destinations: ["Kiralur", "Thrissur"] },
      { time: "15:45", destinations: ["Arampilly", "Thrissur"] },
      { time: "16:20", destinations: ["Kechery", "Mundur", "Kottekad", "Thrissur"] },
      { time: "17:05", destinations: ["Kiralur", "Mundur", "Thrissur"] }
    ]
  },
  {
    id: "vadakkanchery",
    name: "Vadakkanchery",
    data: [
      { time: "06:15", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "06:50", destinations: ["Vadakancherry"], viaVazhani: false },
      { time: "07:05", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "07:20", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "07:35", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "07:50", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:00", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:15", destinations: ["Vadakanchery", "Attathara", "Kumblangad"], viaVazhani: false },
      { time: "08:25", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:35", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:45", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "08:50", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "09:05", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "09:20", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "09:25", destinations: ["Chelakkara", "Pazhayannur", "Palakkad"], viaVazhani: false },
      { time: "09:25", destinations: ["Mundathikode", "Medical College"], viaVazhani: false },
      { time: "09:40", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "09:50", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "10:00", destinations: ["Vadakanchery", "Chelakkara", "Amballur"], viaVazhani: false },
      { time: "10:05", destinations: ["Medical College", "Thrissur"], viaVazhani: false },
      { time: "10:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "10:25", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "10:35", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "10:45", destinations: ["Vadakanchery", "Vazhani"], viaVazhani: true },
      { time: "10:55", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "11:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "11:20", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "11:40", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "11:55", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "12:10", destinations: ["Vadakancheri"], viaVazhani: false },
      { time: "12:25", destinations: ["Vadakancheri"], viaVazhani: false },
      { time: "12:30", destinations: ["Vadakancherry", "Attathara", "Kumbalangad"], viaVazhani: false },
      { time: "12:45", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "13:05", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "13:15", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "13:30", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "13:45", destinations: ["Vadakancheri", "Vazhani", "Engangadu"], viaVazhani: true },
      { time: "14:00", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "14:15", destinations: ["Vadakanchery", "Vazhani"], viaVazhani: true },
      { time: "14:30", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "14:45", destinations: ["Vadakancherry"], viaVazhani: false },
      { time: "14:55", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "15:05", destinations: ["Puthuruthy", "Kumbangad", "Vadakanchery"], viaVazhani: false },
      { time: "15:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "15:35", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "15:45", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "15:50", destinations: ["Vadakancherry"], viaVazhani: false },
      { time: "16:05", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "16:15", destinations: ["Vadakancheri", "Vazhani"], viaVazhani: true },
      { time: "16:30", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "16:45", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "17:00", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "17:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "17:15", destinations: ["Vadakanchery", "Chelakkara", "Palakkad"], viaVazhani: false },
      { time: "17:30", destinations: ["Puthutruthy", "Kumblangad", "Vadakanchery"], viaVazhani: false },
      { time: "17:45", destinations: ["Vadakanchery", "Vazhani"], viaVazhani: true },
      { time: "17:55", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "18:00", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "18:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "18:25", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "18:40", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:00", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:15", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:30", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:35", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "19:50", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "20:10", destinations: ["Vadakanchery"], viaVazhani: false },
      { time: "20:25", destinations: ["Velur Chungam"], viaVazhani: false },
      { time: "20:40", destinations: ["Velur Chungam"], viaVazhani: false },
    ]
  },
  {
    id: "kechery",
    name: "Kechery",
    data: [
      { time: "06:00", destinations: ["Kecheri", "Parapur", "Oorakam"] },
      { time: "06:25", destinations: ["Kecheri", "Parapur", "Pavaratty", "Chavakkad"] },
      { time: "06:45", destinations: ["Kecheri", "Mundur", "Kottekkad", "Thrissur"] },
      { time: "06:55", destinations: ["Kecheri", "Kunnamkulam"] },
      { time: "07:05", destinations: ["Kecheri", "Pavaratty"] },
      { time: "07:15", destinations: ["Kecheri", "Kunnamkulam"] },
      { time: "07:30", destinations: ["Kecheri", "Guruvayur", "Choondal Hospital"] },
      { time: "07:35", destinations: ["Kecheri", "Kaiparambi", "Parappur", "Pavaratty", "Elavally"] },
      { time: "07:35", destinations: ["Kecheri", "Aloor", "Pavaratty"] },
      { time: "07:40", destinations: ["Kecheri", "Guruvayoor"] },
      { time: "07:40", destinations: ["Kunnamkulam", "Guruvayoor"] },
      { time: "08:00", destinations: ["Kecheri", "Guruvayoor"] },
      { time: "08:05", destinations: ["Kecheri", "Kunnamkulam"] },
      { time: "08:10", destinations: ["Kecheri", "Matam", "Pavaratty"] },
      { time: "08:20", destinations: ["Kecheri", "Guruvayur"] },
      { time: "08:30", destinations: ["Kecheri", "Alur", "Pavaratty"] },
      { time: "08:45", destinations: ["Kecheri", "Kunnamkulam", "Pavaratty"] },
      { time: "08:50", destinations: ["Kecheri", "Alur", "Parapur"] },
      { time: "09:05", destinations: ["Kecheri", "Ponnore", "Parappur", "Enamavu", "Thoykavu"] },
      { time: "09:20", destinations: ["Kecheri", "Choondal", "Pavaratty"] },
      { time: "09:30", destinations: ["Kecheri"] },
      { time: "09:35", destinations: ["Kecheri", "Kaiparam", "Parapur", "Oorakam"] },
      { time: "09:50", destinations: ["Kecheri", "Matam", "Pavaratty", "Choondal Hospital"] },
      { time: "09:55", destinations: ["Kecheri", "Alur", "Pavaratty"] },
      { time: "10:00", destinations: ["Kecheri"] },
      { time: "10:10", destinations: ["Kecheri", "Kaiparambu", "Chavakkadu"] },
      { time: "10:20", destinations: ["Kecheri", "Pavaratty", "Choondal Hospital"] },
      { time: "10:30", destinations: ["Kecheri"] },
      { time: "10:40", destinations: ["Kechery", "Aloor", "Pavaratty"] },
      { time: "10:55", destinations: ["Kecheri", "Mundur", "Kottekkad", "Thrissur"] },
      { time: "11:10", destinations: ["Kecheri", "Guruvayur"] },
      { time: "11:20", destinations: ["Kecheri"] },
      { time: "11:35", destinations: ["Kecheri", "Mattam", "Pavaratty", "Enamavu"] },
      { time: "11:45", destinations: ["Kecheri", "Kaiparambu", "Parapur", "Pavaratty"] },
      { time: "11:55", destinations: ["Kecheri"] },
      { time: "12:05", destinations: ["Kecheri", "Aloor", "Pavaratty"] },
      { time: "12:10", destinations: ["Kecheri", "Kunnamkulam", "Guruvayoor"] },
      { time: "12:15", destinations: ["Kecheri"] },
      { time: "12:40", destinations: ["Kecheri", "Matam", "Pavaratty", "Enamavu"] },
      { time: "13:00", destinations: ["Kecheri"] },
      { time: "13:10", destinations: ["Kecheri", "Kaiparambu", "Parapur", "Oorakam"] },
      { time: "13:20", destinations: ["Kecheri"] },
      { time: "13:35", destinations: ["Kecheri", "Kaiparambu", "Parapur", "Enamavu", "Thoykavu"] },
      { time: "13:45", destinations: ["Kecheri"] },
      { time: "13:50", destinations: ["Kecheri", "Mattam", "Pavaratty"] },
      { time: "14:10", destinations: ["Kecheri", "Alur", "Pavaratty", "Choondal Hospital"] },
      { time: "14:30", destinations: ["Kecheri", "Alur", "Pavaratty", "Choondal Hospital"] },
      { time: "14:40", destinations: ["Kecheri", "Matam", "Pavaratty"] },
      { time: "14:50", destinations: ["Kecheri"] },
      { time: "15:05", destinations: ["Kecheri"] },
      { time: "15:20", destinations: ["Kecheri", "Kaiparambu", "Parapur", "Pavaratty", "Chavakkad"] },
      { time: "15:35", destinations: ["Kecheri"] },
      { time: "15:40", destinations: ["Kecheri", "Guruvayur"] },
      { time: "15:50", destinations: ["Kecheri", "Guruvayur"] },
      { time: "16:05", destinations: ["Kecheri"] },
      { time: "16:20", destinations: ["Kecheri", "Mundur", "Kottekkad", "Thrissur"] },
      { time: "16:30", destinations: ["Kecheri", "Kaiparambu", "Ponnore", "Parapur"] },
      { time: "16:45", destinations: ["Kecheri", "Kunnamkulam", "Guruvayoor"] },
      { time: "16:50", destinations: ["Kecheri", "Thaiyoor"] },
      { time: "16:55", destinations: ["Kecheri", "Guruvayur"] },
      { time: "17:10", destinations: ["Kecheri", "Mattam", "Pavaratty", "Enamavu"] },
      { time: "17:20", destinations: ["Kecheri", "Ponnore", "Parapur", "Oorakam"] },
      { time: "17:30", destinations: ["Kecheri", "Ponnore", "Parapur", "Pangu", "Thoykavu"] },
      { time: "17:45", destinations: ["Kechery"] },
      { time: "17:50", destinations: ["Kecheri", "Guruvayur"] },
      { time: "17:50", destinations: ["Kecheri", "Parapur", "Ponnore", "Elavally", "Pavaratty"] },
      { time: "18:05", destinations: ["Kecheri"] },
      { time: "18:15", destinations: ["Kecheri", "Mattom", "Pavaratty"] },
      { time: "18:30", destinations: ["Kecheri", "Mattom", "Pavaratty"] },
      { time: "18:45", destinations: ["Kecheri", "Mattom", "Pavaratty", "Choondal Hospital"] },
      { time: "19:05", destinations: ["Kecheri"] },
      { time: "19:10", destinations: ["Kecheri"] },
      { time: "19:20", destinations: ["Kecheri"] },
      { time: "19:25", destinations: ["Kaiparambu", "Parappur"] },
      { time: "19:50", destinations: ["Kecheri"] },
      { time: "20:00", destinations: ["Kecheri"] },
      { time: "20:05", destinations: ["Kecheri"] },
    ]
  }
]

export const getAllDestinations = () => {
  const destinations = new Set<string>();
  busRoutes.forEach(route => {
    route.data.forEach(bus => {
      bus.destinations.forEach(destination => {
        destinations.add(destination);
      });
    });
  });
  return Array.from(destinations).sort();
};

export const getAllUniqueStops = () => {
  const stops = new Set<string>();
  busRoutes.forEach(route => {
    route.data.forEach(bus => {
      bus.destinations.forEach(destination => {
        stops.add(destination);
      });
    });
  });
  return Array.from(stops).sort();
};

