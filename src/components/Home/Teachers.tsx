import { useEffect, useState } from "react";
import { TeacherCard } from "./TeacherCard";
import { TeachType } from "../../assets/types";
import url from "../../assets/config";
import { Heading } from "@chakra-ui/react";
const Teachers = () => {
  const [teachers, setTeachers] = useState<TeachType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "/teachers");
        const teachers = await response.json();
        setTeachers(teachers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <span className="background">
      <Heading color="white" mb={0}>
        Our Teacher Panel
      </Heading>
      <section className="gallery">
        {teachers &&
          teachers.map((teacher) => {
            return <TeacherCard {...teacher} key={teacher.id} />;
          })}
      </section>
    </span>
  );
};

export default Teachers;
