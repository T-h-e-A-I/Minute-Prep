import { Wrap, WrapItem } from "@chakra-ui/react";
import {
  ContentCardType,
  ContentData,
} from "../../../public/database/Contents";
import { CardProps } from "../../assets/types";
import { ReelCard } from "./ReelCard";
import { VideoCard } from "./VideoCard";
import { InfographicsCard } from "./InfographicsCard";
import { useEffect, useState } from "react";
import url from "../../assets/config";

const CardGrid = ({ type }: { type: string }) => {
  const [cardData, setCardData] = useState<CardProps[] | null>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "/contents/" + type);
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
  if (type.toUpperCase() === "REELS") {
    console.log("reel");
    const reels = ContentData.filter((content) => content.type == "REEL");
    const cardsData = reels.map((content) => ({
      title: content.name,
      image: "/" + content.image,
      tags: [
        content.type,
        subjects[content.subjectId - 1],
        teachers[content.teacherId - 1],
      ],
      url: content.url,
    }));
  }
  if (type.toUpperCase() === "VIDEOS") {
    const videos = ContentData.filter((content) => content.type == "VIDEO");
    const cardsData2 = videos.map((content) => ({
      title: content.name,
      image: content.image,
      tags: [
        content.type,
        subjects[content.subjectId - 1],
        teachers[content.teacherId - 1],
      ],
      url: content.url,
    }));
    return (
      <Wrap justify="center">
        {cardsData2.map((card, index) => (
          <WrapItem key={index}>
            <VideoCard {...card} />
          </WrapItem>
        ))}
      </Wrap>
    );
  }
  if (type.toUpperCase() === "INFOGRAPHICS") {
    const videos = ContentData.filter(
      (content) => content.type == "INFOGRAPHICS"
    );
    const cardsData2 = videos.map((content) => ({
      title: content.name,
      image: content.image,
      tags: [
        content.type,
        subjects[content.subjectId - 1],
        teachers[content.teacherId - 1],
      ],
      url: content.url,
    }));
    return (
      <Wrap justify="center">
        {cardsData2.map((card, index) => (
          <WrapItem key={index}>
            <InfographicsCard {...card} />
          </WrapItem>
        ))}
      </Wrap>
    );
  }
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

// {
//   id: 1,
//   name: "জটিল সংখ্যার n তম মূল নির্ণয় করো খুব সহজেই ...",
//   url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fminuteprep%2Fvideos%2F1302296540379495%2F&show_text=false&width=560&t=0",
//   image:
//     "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fminuteprep%2Fvideos%2F1302296540379495%2F&show_text=false&width=560&t=0",
//   type: "VIDEO",
//   chapterId: 323,
//   teacherId: 1,
//   subjectId: 3,
// },
