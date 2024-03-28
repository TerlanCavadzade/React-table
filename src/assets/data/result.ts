const data = [
  {
    id: 1,
    team: {
      county: "RUS",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
    },
    bib: 212,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833, 48.333, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 2,
    team: {
      county: "EST",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/2560px-Flag_of_Estonia.svg.png",
    },
    bib: 132,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 3,
    team: {
      county: "POR",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/800px-Flag_of_Portugal.svg.png",
    },
    bib: 624,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 4,
    team: {
      county: "ISR",
      flag: "https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg",
    },
    bib: 624,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 5,
    team: {
      county: "POL",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png",
    },
    bib: 102,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 6,
    team: {
      county: "NED",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
    },
    bib: 102,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
  {
    id: 7,
    team: {
      county: "GBR",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    },
    bib: 102,
    name: "Bonartsev Aleksandr",
    D: [43.833, 43.833],
    E: [43.833, 43.833],
    PEN: [43.833, 43.833],
    Total: [102.256, 102.256],
    Score: 102.256,
  },
];

export interface Player {
  id: number;
  team: Team;
  bib: number;
  name: string;
  D: number[];
  E: number[];
  PEN: number[];
  Total: number[];
  Score: number;
}

interface Team {
  county: string;
  flag: string;
}

export default data;
export type Players = Player[];
