import "./App.css";
import "./Reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserContextProvider from "./context/UserContextProvider";
import SinglePost from "./components/home-comp/posts/SinglePost";
// import Footer from "./pages/Footer";
import DemoApp from "./pages/DemoApp";
import HideLayout from "./components/routes/HideLayout";
import ThemeContainer from "./theme/ThemeContainer";
import ThemeContextProvider from "./theme/ThemeContextProvider";
import LanguageContextProvide from "./context/LanguageContextProvide";
import Signup from "./components/users/SignUp";
import LogIn from "./components/users/LogIn";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import ErrorPage from "./components/routes/ErrorPage";
import LoginRequired from "./components/routes/LoginRequired";

function App() {
  // const [userLogged, setUserLogged] = useState(false);

  return (
    <>
      {/* <DataContextProvider> */}
      <LanguageContextProvide>
        <ThemeContextProvider>
          <ThemeContainer>
            <UserContextProvider>
              <BrowserRouter>
                {/* HideLayout hides navbar and footer on '/demo-app' */}
                <HideLayout>
                  {/* <div className="App"> */}
                  {/* <Navbar /> */}
                  <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="login-required" element={<LoginRequired />} />
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/sign-up" element={<Signup />} /> */}
                    {/* <Route path="/login" element={<LogIn />} /> */}

                    <Route path="/movie/:postId" element={<SinglePost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                      path="/demo-app"
                      element={
                        // <ProtectedRoute>
                        <DemoApp />
                        // </ProtectedRoute>
                      }
                    />
                  </Routes>
                  {/* <Footer /> */}
                  {/* </div> */}
                </HideLayout>
              </BrowserRouter>
            </UserContextProvider>
            {/* </DataContextProvider> */}
          </ThemeContainer>
        </ThemeContextProvider>
      </LanguageContextProvide>
    </>
  );
}

export default App;
