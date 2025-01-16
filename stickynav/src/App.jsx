import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

function App() {
  return (
    <div className="min-h-[200vh] bg-zinc-900">
      <Nav/>

      <div className="overflow-clip opacity-30 select-none">
        <p className="break-all text-[30vw] text-white font-semibold">
          Ciao, Welcome to the Beatiful stickyy navigation bar peeeek-a-boo scroll.
        </p>
      </div>
    </div>
  );
}

const Nav = () => {
  const [isHidden, setisHidden] = useState();
  const { scrollY } = useScroll();
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      // if (y > 200) {
      //   setisHidden(true);
      // } else {
      //   setisHidden(false);
      // }

      setisHidden(difference > 0)
    } 
    lastYRef.current = y;
  });

  return (
    <motion.div
      className="fixed top-0  z-10 flex w-full justify-center pt-5"
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={()=> setisHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{
        duration: 0.2

      }}
    >
      <nav className="flex justify-between gap-3 rounded-3xl bg-white p-3 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <a href="#" className="bg-gray-300">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </a>
        <a href="#">Services</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </motion.div>
  );
};

export default App;
