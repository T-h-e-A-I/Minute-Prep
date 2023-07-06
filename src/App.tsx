import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contents from "./pages/Contents";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import { useState, createContext } from "react";
import PageNotFound from "./pages/PageNotFound";
export type LoggedInContextType = {
  loggedIn: boolean;
  updateLoginValue: (type: string) => void;
};
export const LoggedInContext = createContext<LoggedInContextType>({
  loggedIn: false,
  updateLoginValue: () => {
    console.log("updateLoginValue");
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLoginValue = (type: string) => {
    if (type == "form") {
      setLoggedIn(true);
    }
    if (type == "logout") {
      setLoggedIn(false);
    }
  };
  return (
    <>
      <LoggedInContext.Provider value={{ loggedIn, updateLoginValue }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contents/:contentType" element={<Contents />} />
          <Route
            path="contents/:teacherOrSubject/:contentType"
            element={<Contents />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </LoggedInContext.Provider>
    </>
  );
}

export default App;
