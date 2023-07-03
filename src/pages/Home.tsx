import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import SubjectCards from "../components/Home/SubjectCards";
import QuestionForm from "../components/Home/QuestionForm";
import Teachers from "../components/Home/Teachers";

const Home = () => {
  return (
    <>
      <Banner />
      <SubjectCards />
      <Teachers />
      <QuestionForm />
      <Features />
    </>
  );
};

export default Home;
