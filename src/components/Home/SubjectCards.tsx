import { Grid, GridItem } from "@chakra-ui/react";
import { Subjects } from "../../assets/database";
import Subject from "./Subject";
const SubjectCards = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
    >
      {Subjects.map((subject) => {
        return (
          <GridItem w="100%" key={subject.id}>
            <Subject {...subject} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default SubjectCards;
