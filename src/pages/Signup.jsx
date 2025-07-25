import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import signupImageSrc from "../assets/signup image.webp";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset();
  };
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center gap-4 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-7xl mx-auto overflow-hidden">
      <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
        <img
          src={signupImageSrc}
          alt="Illustration of a person with hands joined, representing welcome or greeting"
          loading="lazy"
          className="w-full aspect-1/1 md:aspect-square object-cover object-top rounded-lg shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x600/CCCCCC/333333?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 lg:w-3/5 flex-grow p-6 md:p-8 lg:p-10 bg-white shadow-xl rounded-lg">
        <div className="w-full max-w-md">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[dosis] text-center font-semibold mb-6 md:mb-8">
            Sign up
          </h1>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col items-center gap-4 text-base sm:text-lg"
          >
            <label className="w-full">
              Email
              <input
                type="email"
                name="email"
                className="outline-none border-2 border-[var(--coral)] rounded-lg px-4 py-3 mt-1 w-full focus:ring-2 focus:ring-[var(--coral)] focus:border-transparent transition-all duration-200"
                placeholder="email@example.com"
                {...register("email")}
                id="email"
                required={true}
              />
            </label>
            <label className="w-full">
              Password
              <input
                type="password"
                name="password"
                id="password"
                className="outline-none border-2 border-[var(--coral)] rounded-lg px-4 py-3 mt-1 w-full focus:ring-2 focus:ring-[var(--coral)] focus:border-transparent transition-all duration-200"
                placeholder="********"
                {...register("password")}
                required={true}
              />
            </label>
            <button
              type="submit"
              className="px-8 py-3 border-2 border-[var(--coral)] w-full sm:w-auto rounded-xl text-base sm:text-lg hover:bg-[var(--coral)] hover:text-[var(--seasalt)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--coral)] focus:ring-offset-2"
            >
              Sign Up or Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
