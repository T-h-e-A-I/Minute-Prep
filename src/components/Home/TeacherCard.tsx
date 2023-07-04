import { Heading, useColorModeValue, Text, Box } from "@chakra-ui/react";

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
        <img src={image} alt={nickName} title={nickName} />
      </figure>
      <Box textAlign={"center"} fontSize={"2xl"} fontFamily={"body"}>
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
