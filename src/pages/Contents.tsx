import ContentGrid from "../components/Contents/ContentGrid.tsx";
import { useParams } from "react-router-dom";
import Tabbar from "../components/Contents/Tabbar.tsx";

const Contents = () => {
  const params = useParams();
  const contentType = params.contentType;
  return (
    <>
      {contentType ? (
        <>
          <Tabbar />
          <ContentGrid type={contentType} />
        </>
      ) : (
        <Tabbar />
      )}
    </>
  );
};

export default Contents;
