import styles from "./App.module.css";
import { Navbar } from "./componets/Home/Navbar";
import { Intro } from "./componets/Home/Intro";
import { QuickCards } from "./componets/Home/QuickCards";
import { Projects } from "./componets/Home/Projects";
import { AboutMe } from "./componets/Home/AboutMe";
import { ContactMe } from "./componets/Home/ContactMe";
import { Contact } from "./componets/Contact/Contact";
import { Route, Routes } from "react-router-dom";

const HomeSec = () => {
  return (
    <div>
      <div className="bg-white">
        <Intro />
        <div className="flex flex-col w-full">
          <img src="/assets/grunge_divider.svg" alt="aman" />
        </div>

        <div className="flex flex-row -mt-50 mb-10  items-center mx-auto justify-center ">
          <QuickCards />
        </div>

        <Projects />
        <div className="flex flex-col w-full h-auto">
          <img
            className="transform scale-y-[-1]"
            src="/assets/grunge_divider.svg"
            alt="aman"
          />
        </div>
      </div>

      <AboutMe />
    </div>
  );
};

const ContactSec = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <HomeSec />;
  //     break;
  //   case "/contact":
  //     component = <ContactSec />;
  //     break;
  //   default:
  //     component = <HomeSec />;
  // }
  return (
    <div className={styles.App}>
      <div className="flex flex-col pt-10 bg-[#e3e3ff]">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/contact" element={<ContactSec />} />
        </Routes>

        <div className=" mt-20 lg:mt-40">
          <div className="flex flex-col w-full h-auto">
            <img
              className="transform scale-y-[-1]"
              src="/assets/grungedivider_black.svg"
              alt="aman"
            />
          </div>
          <div className="bg-[#1d1d1d]">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
