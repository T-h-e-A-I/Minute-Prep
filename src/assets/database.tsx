export type SubjectType = {
  id: number;
  name: string;
  image: string;
  description: string;
};
export const Subjects = [
  {
    id: 1,
    name: "Physics",
    image: "./images/Subjects/physics.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Chemistry",
    image: "./images/Subjects/chemistry.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Mathematics",
    image: "./images/Subjects/math.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export type TeachType = {
  id: number;
  name: string;
  image: string;
  rank: string;
  department: string;
  nickName: string;
};
export const Teachers = [
  {
    id: 1,
    name: "Mir Mashrafi Ahsan",
    image: "./images/teachers/mashrafi.jpg",
    rank: "605th",
    department: "BME",
    nickName: "Mashrafi",
  },
  {
    id: 2,
    name: "Anika Tasnim Maisha",
    image: "./images/teachers/maisha.jpg",
    rank: "763rd",
    department: "CE",
    nickName: "Maisha",
  },
  {
    id: 3,
    name: "Awesh Islam",
    image: "./images/teachers/awesh.jpg",
    rank: "83rd",
    department: "CSE",
    nickName: "Awesh",
  },
  {
    id: 4,
    name: "Gourab Jit Biswas",
    image: "./images/teachers/gourab.jpg",
    rank: "55th",
    department: "CSE",
    nickName: "Gourab",
  },
  {
    id: 5,
    name: "Tanvir Islam",
    image: "./images/teachers/tanvir.jpg",
    rank: "32nd",
    department: "EEE",
    nickName: "Tanvir",
  },
];
