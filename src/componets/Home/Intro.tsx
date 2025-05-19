export const Intro = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#e3e3ff]">
        <div className="flex flex-col items-center justify-between pt-8 md:pt-14 pb-50 lg:pb-40 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center p-10 md:py-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-40">
              <div className="flex flex-col gap-5  lg:gap-10 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl md:text-left">
                  Hello! I am Aman a mobile app dev
                </h1>
                <p className="text-xl  lg:2xl text-gray-900">
                  I am an Android developer skilled in Java and Kotlin, creating
                  efficient and user-friendly mobile apps. Let's connect!
                </p>
              </div>
              <img
                className=" border w-xs lg:w-sm"
                src="/assets/aman.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
