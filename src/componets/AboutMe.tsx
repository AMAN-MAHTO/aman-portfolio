export const AboutMe = () => {
  return (
    <div className="flex px-10 pt-8  max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row md:gap-10 border rounded-2xl items-center justify-center p-10 max-w-7xl mx-auto">
        <img
          className="rounded-xl w-full max-w-sm lg:max-w-lg h-auto object-cover mb-5 border"
          src="/assets/4.jpeg"
        ></img>
        <div>
          <h1 className="text-3xl  lg:text-4xl text-left mb-2 md:mb-5">
            More About Me
          </h1>
          <p className="text-base  lg:text-lg text-left text-gray-900 mb-5 md:mb-10">
            I am an Android developer skilled in Java and Kotlin, creating
            efficient and user-friendly mobile apps. Let's connect!
          </p>
          <li className="textBtn">
            <a href="/about">Learn More</a>
          </li>
        </div>
      </div>
    </div>
  );
};
