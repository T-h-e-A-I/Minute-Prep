import {
  Heading,
  useColorModeValue,
  Text,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";

type TeacherCardProps = {
  id: number;
  name: string;
  image: string;
  rank: string;
  department: string;
  nickName: string;
};
export const TeacherCard = ({
  name,
  image,
  rank,
  department,
  nickName,
}: TeacherCardProps) => {
  return (
    <article className="card">
      <figure>
        <Link as={Link} href={"./contents/" + nickName + "/reels"}>
          <img src={image} alt={nickName} title={nickName} />
        </Link>
      </figure>
      <Box textAlign={"center"} fontSize={"2xl"} fontFamily={"body"}>
        <Link as={Link} href={"./contents/" + nickName + "/reels"}>
          <Button className="btn-block" width="100%">
            Watch Content
          </Button>
        </Link>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {name}
        </Heading>
        <Text color={"black"} textAlign={"center"}>
          {department}
        </Text>
        <Text color={"black"} textAlign={"center"}>
          BUET Rank: {rank}
        </Text>
      </Box>
    </article>
  );
};
