import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar";
import { Intro } from "./componets/Intro";
import { QuickCards } from "./componets/QuickCards";
import { Projects } from "./componets/Projects";
import { AboutMe } from "./componets/AboutMe";
import { ContactMe } from "./componets/ContactMe";

function App() {
  return (
    <div className={styles.App}>
      <div className="flex flex-col pt-10 bg-[#e3e3ff]">
        <Navbar />

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
