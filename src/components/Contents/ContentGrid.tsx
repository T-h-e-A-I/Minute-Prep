import { Wrap, WrapItem } from "@chakra-ui/react";
import { ContentCardType } from "../../../public/database/Contents";
import { CardProps } from "../../assets/types";
import { ReelCard } from "./ReelCard";
import { VideoCard } from "./VideoCard";
import { InfographicsCard } from "./InfographicsCard";
import { useEffect, useState } from "react";
import url from "../../assets/config";

const CardGrid = ({
  type,
  teacherOrSubject,
}: {
  type: string;
  teacherOrSubject: string | undefined;
}) => {
  const [cardData, setCardData] = useState<CardProps[] | null>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (teacherOrSubject) {
          response = await fetch(
            url + "/contents/" + teacherOrSubject + "/" + type
          );
          console.log(url + "/contents/" + teacherOrSubject + "/" + type);
        } else {
          response = await fetch(url + "/contents/" + type);
        }
        const contents = await response.json();
        const cardsData = contents.map((content: ContentCardType) => ({
          title: content.name,
          image: content.image,
          tags: [
            content.type,
            subjects[content.subjectId - 1],
            teachers[content.teacherId - 1],
          ],
          url: content.url,
        }));
        setCardData(cardsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrap justify="center">
      {cardData &&
        cardData.map((card, index) => (
          <WrapItem key={index}>
            {type.toUpperCase() === "REELS" ? (
              <ReelCard {...card} />
            ) : type.toUpperCase() === "VIDEOS" ? (
              <VideoCard {...card} />
            ) : (
              <InfographicsCard {...card} />
            )}
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default CardGrid;

enum subjects {
  "Physics",
  "Chemistry",
  "Math",
}
enum teachers {
  "Mashrafi",
  "Maisha",
  "Awesh",
  "Gourab",
  "Tanvir",
}
