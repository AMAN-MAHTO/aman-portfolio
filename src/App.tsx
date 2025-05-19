import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./App.module.css";

import { Contact } from "./componets/Contact/Contact";
import { AboutMe } from "./componets/Home/AboutMe";
import { ContactMe } from "./componets/Home/ContactMe";
import { Intro } from "./componets/Home/Intro";
import { Navbar } from "./componets/Home/Navbar";
import { ProjectDetail } from "./componets/Home/ProjectDetail";
import { Projects } from "./componets/Home/Projects";
import { ExperienceSection } from "./componets/Home/QuickCards";

const HomeSec = () => {
  return (
    <div>
      <div className="bg-white">
        <Intro />
        <div className="flex flex-col w-full">
          <img src="/assets/grunge_divider.svg" alt="divider" />
        </div>

        <div className="flex flex-row -mt-50 mb-10 items-center mx-auto justify-center">
          <ExperienceSection />
        </div>

        <Projects />

        <div className="flex flex-col w-full h-auto">
          <img
            className="transform scale-y-[-1]"
            src="/assets/grunge_divider.svg"
            alt="divider"
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
  const location = useLocation();

  // Automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.App}>
      <div className="flex flex-col pt-10 bg-[#e3e3ff]">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/contact" element={<ContactSec />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

        <div className="mt-20 lg:mt-40">
          <div className="flex flex-col w-full h-auto">
            <img
              className="transform scale-y-[-1]"
              src="/assets/grungedivider_black.svg"
              alt="divider"
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
