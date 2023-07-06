import { Box, Flex, Link } from "@chakra-ui/react";

const TabBar = () => {
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
          <Link href={"/contents/reels"}>REELS</Link>
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
          <Link href={"/contents/videos"}>Videos</Link>
        </Box>
        <Box
          as="button"
          px={4}
          py={2}
          bg="transparent"
          color="black"
          borderRadius="none"
        >
          <Link href={"/contents/infographics"}>Infographics</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default TabBar;
