import { Box, Heading, Link, Flex, Tag } from "@chakra-ui/react";
import { CardProps } from "../../assets/types";

export const InfographicsCard = ({ title, url, image, tags }: CardProps) => {
  return (
    <Box
      maxW="414px"
      minH="750px"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      shadow="md"
      m={2}
      p={4}
    >
      <iframe
        src={image}
        width="500px"
        height="626px"
        style={{ border: "none", overflow: "hidden" }}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <Box mt={4}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Link mt={2} href={url}>
          Click here to watch on Facebook
        </Link>
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
