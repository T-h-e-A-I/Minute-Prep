import { Box, Flex, Link } from "@chakra-ui/react";

const TabBar = ({
  teacherOrSubject,
}: {
  teacherOrSubject: string | undefined;
}) => {
  let link;
  if (teacherOrSubject) {
    link = "/contents/" + teacherOrSubject;
  } else {
    link = "/contents";
  }
  return (
    <Box mx="200px">
      <Flex
        alignItems="center"
        justify="center"
        borderBottom="0.5px solid black"
        pb={2}
      >
        <Box
          as="button"
          px={4}
          py={2}
          mr={4}
          bg="transparent"
          color="black"
          borderRadius="none"
        >
          <Link href={link + "/reels"}>Reels</Link>
        </Box>
        <Box
          as="button"
          px={4}
          py={2}
          mr={4}
          bg="transparent"
          color="black"
          borderRadius="none"
        >
          <Link href={link + "/videos"}>Videos</Link>
        </Box>
        <Box
          as="button"
          px={4}
          py={2}
          bg="transparent"
          color="black"
          borderRadius="none"
        >
          <Link href={link + "/infographics"}>Infographics</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default TabBar;
