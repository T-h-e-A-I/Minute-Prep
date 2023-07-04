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
    description:
      "Animated reel, Infographics, Shortcuts, BUET DU CKRUET IIT SOLVE and much more.",
  },
  {
    id: 2,
    name: "Chemistry",
    image: "./images/Subjects/chemistry.png",
    description:
      "Reaction Infographics, Visualisation, Memorising tricks, Flash cards, Question Solve and much more.",
  },
  {
    id: 3,
    name: "Mathematics",
    image: "./images/Subjects/math.png",
    description:
      "Animated explanatory videos and reels, Shortcuts, Calculator hacks, Without calculator hacks.",
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
