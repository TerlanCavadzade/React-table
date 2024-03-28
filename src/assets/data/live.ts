import icon from "../images/FX.png";

const data = [
  {
    id: 1,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: null,
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: false,
  },
  {
    id: 2,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: null,
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: false,
  },
  {
    id: 3,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: "wait",
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: false,
  },
  {
    id: 4,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: null,
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: false,
  },
  {
    id: 7,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: "go",
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: false,
  },
  {
    id: 8,
    category: {
      name: "test",
      icon,
    },
    country: {
      name: "AZE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png",
    },
    bib: 212,
    name: "Amirbekov Teymur",
    D: "5.400",
    E: "5.400",
    P: "5.400",
    status: null,
    app: {
      count: 7,
      score: "12.500",
    },
    AA: {
      count: 7,
      score: "102.360",
    },
    Team: {
      count: 7,
      score: "102.360",
    },
    inquiry: true,
  },
];

export interface Team {
  id: number;
  category: Category;
  country: Country;
  bib: number;
  name: string;
  D: string;
  E: string;
  P: string;
  status: string | null;
  app: Aa;
  AA: Aa;
  Team: Aa;
  inquiry: boolean;
}

interface Aa {
  count: number;
  score: string;
}

interface Category {
  name: string;
  icon: string;
}

interface Country {
  name: string;
  flag: string;
}

export default data;
