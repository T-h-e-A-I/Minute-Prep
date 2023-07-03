import { ReactElement } from "react";

export type FeatureProps = {
  title: string;
  text: string;
  icon: ReactElement;
};
export const FeatureData = [
  {
    id: 1,
    image: "images/infographics.png",
    title: "Infographics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    image: "images/animation.png",
    title: "Animated Videos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    image: "images/reels.png",
    title: "Short Explanatory Reels",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
