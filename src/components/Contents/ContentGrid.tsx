import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";

type CardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const Card = ({ title, description, image, tags }: CardProps) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      shadow="md"
      m={2}
      p={4}
    >
      <Image src={image} alt={title} />
      <Box mt={4}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text mt={2}>{description}</Text>
        <Flex mt={4}>
          {tags.map((tag) => (
            <Tag key={tag} size="sm" mr={2}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const CardGrid = () => {
  // Placeholder data for cards
  console.log("CardGrid");
  const cardsData = Array.from({ length: 20 }).map((_, index) => ({
    title: `Card ${index + 1}`,
    description: "This is a card description.",
    image: "https://via.placeholder.com/300",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  }));

  return (
    <Wrap justify="center" spacing={4}>
      {cardsData.map((card, index) => (
        <WrapItem key={index}>
          <Card {...card} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default CardGrid;
