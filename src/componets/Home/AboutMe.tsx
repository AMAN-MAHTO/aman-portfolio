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

      
    </div> 
  );
};
