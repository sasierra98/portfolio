import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Button } from "@nextui-org/react";
import { paths } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="relative pt-3 z-20">
        <div className="container mx-auto">
          <div className="flex flex-col text-left md:flex-row mb-2">
            {/* Texto y llamado a la acción */}
            <div className="md:w-7/12 mb-5 my-auto">
              <h1
                className="text-dark font-bold text-6xl md:text-5xl sm:text-4xl mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Hi, I’m Jose. Full Stack Developer based in Colombia 👋
              </h1>
              <p
                className="text-dark text-lg leading-relaxed my-4 opacity-50"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Varius amet, integer tellus non eget viverra. Ultrices tellus
                donec gravida <br className="hidden xl:block" />
                id sed senectus dolor cursus sed. Ullamcorper tellus ac cras
                nec, pretium <br className="hidden xl:block" />
                laoreet duis.
              </p>
              <Button
                className="font-bold text-sm bg-blue-500 text-white rounded-none shadow-md"
                href={paths.contact}
                auto
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                Contact Me
              </Button>
            </div>

            {/* Imagen */}
            <div className="md:w-5/12 flex justify-center md:justify-start my-auto">
              <img
                src="./assets/images/PHOTO.png"
                className="w-full max-w-xs"
                alt="Jose's photo"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
