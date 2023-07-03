import { TeacherData } from "../../../public/database/teachers";
import { TeacherCard } from "./TeacherCard";

const Teachers = () => {
  return (
    <span className="background">
      <section className="gallery">
        {TeacherData.map((teacher) => {
          return <TeacherCard {...teacher} key={teacher.id} />;
        })}
      </section>
    </span>
  );
};

export default Teachers;
