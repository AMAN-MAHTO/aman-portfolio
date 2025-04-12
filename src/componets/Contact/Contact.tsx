import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess(null);
      return;
    }

    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setError(null);
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to send message. Please try again.");
        setSuccess(null);
      });

    form.current!.reset();
  };
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto justify-center pt-20 p-10  bg-[#e3e3ff]">
      <h1 className="text-3xl text-center lg:text-4xl mb-2 md:mb-5">
        How can i help you about your project?
      </h1>
      <p className="text-base lg:text-lg text-center text-gray-900 mb-5 md:mb-10">
        Need assistance more about my services? Fill out the contact form below
        and i will be in touch soon!
      </p>

      <div
        className="flex flex-col justify-between md:flex-row  gap-10 border
       rounded-2xl  p-10 lg:p-20  w-full mx-auto
       bg-white"
      >
        <div>
          <h1 className="text-2xl text-left mb-2">Let's get in touch</h1>
          <p className="text-base text-left mb-4">
            Want to build something awesome together? I'm just a message away.
          </p>
          <div className="flex flex-col gap-8 text-sm md:text-base">
            <div className="flex items-start gap-4">
              <div className="text-pink-500">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9997 16.6666C23.6816 16.6666 26.6663 13.6818 26.6663 9.99992C26.6663 6.31802 23.6816 3.33325 19.9997 3.33325C16.3178 3.33325 13.333 6.31802 13.333 9.99992C13.333 13.6818 16.3178 16.6666 19.9997 16.6666Z"
                    fill="currentColor"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 16.6667V31.6667"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.333 26.6667H9.99967L3.33301 36.6667H36.6663L29.9997 26.6667H26.6663"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold">Address</h5>
                <p>Jai-vihar Najafgarh New-Delhi-110043, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-yellow-400">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66699 25H33.3337V35C33.3337 35.9205 32.5875 36.6667 31.667 36.6667H8.33366C7.41318 36.6667 6.66699 35.9205 6.66699 35V25Z"
                    fill="currentColor"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M33.3337 24.9999V4.99992C33.3337 4.07944 32.5875 3.33325 31.667 3.33325H8.33366C7.41318 3.33325 6.66699 4.07944 6.66699 4.99992V24.9999"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18.333 30.8333H21.6663"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold">Phone</h5>
                <p>+91 9873887557</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-500">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 15H3.33301V35H36.6663V15H31.6663"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M31.6663 5H8.33301V18.75L19.9997 27.5L31.6663 18.75V5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8.33301 18.75L19.9997 27.5L31.6663 18.75M8.33301 18.75V5H31.6663V18.75M8.33301 18.75L3.33301 15M31.6663 18.75L36.6663 15"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15.833 15.8333L19.9997 19.9999M19.9997 19.9999L24.1663 15.8333M19.9997 19.9999V10.8333"
                    stroke="#1D1D1D"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold">E-mail</h5>
                <a
                  href="mailto:amahto848@email.com"
                  className="text-blue-600 hover:underline"
                >
                  amahto848@email.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          className="flex flex-col w-full  max-w-lg  lg:mt-0"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col  gap-8 ">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 w-full "
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-3 w-full  h-32"
            ></textarea>

            <button type="submit" className="textBtn w-40">
              Send Message
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
};
