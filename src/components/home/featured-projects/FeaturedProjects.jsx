import { Button } from "../../ui/Button";
import { FeatureProjectsCards } from "../FeatureProjectsCards";

export const FeaturedProjects = () => {
  return (
    <section className="bg__gray-2 position-relative">
      <img src="/portfolio/GRAPHIC.png" class="path__2" alt="" />
      <div className="container position-relative z-2">
        <h2
          className="text-center bold font__size--40 text__40-1024 text__40-mm mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Featured Projects
        </h2>

        <FeatureProjectsCards />

        <div className="text-center">
          <Button
            href="#!"
            // className="d-inline-block bold font__size--14 text__14-1024 btn btn__outlined--blue color__blue no__opacity shadow rounded-0"
            // variant="secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          ></Button>
        </div>
      </div>
    </section>
  );
};
