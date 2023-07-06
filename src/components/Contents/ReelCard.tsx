import { Box, Heading, Link, Image, Flex, Tag } from "@chakra-ui/react";
export type CardProps = {
  title: string;
  url: string;
  image: string;
  tags: string[];
};

export const ReelCard = ({ title, url, image, tags }: CardProps) => {
  return (
    <Box
      maxW="sm"
      minH="750px"
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
