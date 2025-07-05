export const AboutMe = () => {
  return (
    <div className="flex-row px-10 pt-8  max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row md:gap-20  items-center justify-center p-10 max-w-7xl mx-auto">
        <img
          className="rounded-xl w-full max-w-sm lg:max-w-lg h-auto object-cover mb-5 border"
          src="/assets/21.jpg"
        ></img>
        <div>
          <h1 className="text-3xl  lg:text-4xl text-left mb-2 md:mb-5">
            More About Me
          </h1>
          <p className="text-base  lg:text-lg text-left text-gray-900 mb-5 md:mb-5">
           I'm Aman Mahto, an Android developer obsessed with crafting intuitive, high-performance mobile experiences.
               Proficient in Kotlin, Jetpack Compose, and scalable architectures like MVVM and Clean Architecture,
          I blend solid computer science fundamentals with sharp UI/UX instincts.
           </p>
        
          <p className="text-base  lg:text-lg text-left text-gray-900 mb-5 md:mb-10">
          Currently pursuing a B.Tech in CSE at GGSIPU, I engineer solutions across native Android, Flutter,
           and backend systems using Firebase and Node.js — always with precision and purpose.
          </p>
          <li className="textBtn">
            <a href="/about">Learn More</a>
          </li>
        </div>
      </div>
{/* 
      <div className="flex flex-col items-center justify-center p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-2 md:mb-5">
          My Core Skills
        </h1>
        <p className="text-xl  lg:text-2xl text-center mb-5 md:mb-10 text-gray-700">
          Here are some of the skills I have acquired over the years.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex flex-row items-center rounded-4xl border gap-5 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/kotlin.jpeg"
              alt="Kotlin"
            />
            <p className="text-center text-gray-900 text-lg">Kotlin</p>
          </div>
          <div className="flex flex-row items-center rounded-4xl border gap-5 p-3 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/java.png"
              alt="Java"
            />
            <p className="text-center text-gray-900 text-xl">Java</p>
          </div>
          <div className="flex flex-row items-center rounded-4xl border gap-5 p-3 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/compose.png"
              alt="Jetpack Compose"
            />
            <p className="text-center text-gray-900 text-xl">Jetpack Compose</p>
          </div>
          <div className="flex flex-row items-center rounded-4xl border gap-5 p-3 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/firebase.png"
              alt="Firebase"
            />
            <p className="text-center text-gray-900 text-xl">Firebase</p>
          </div>
          <div className="flex flex-row items-center rounded-4xl border gap-5 p-3 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/flutter.png"
              alt="Flutter"
            />
            <p className="text-center text-gray-900 text-xl">Flutter</p>
          </div>
          <div className="flex flex-row items-center rounded-4xl border gap-5 p-3 pl-5 pr-5 bg-white">
            <img
              className="w-6 h-auto object-cover "
              src="/assets/nodejs.png"
              alt="Node.js"
            />
            <p className="text-center text-gray-900 text-xl">Node.js</p>
          </div>
        </div>
    </div> */}
    </div> 
  );
};
