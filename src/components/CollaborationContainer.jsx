import { Button } from "./ui/Button";

export const CollaborationContainer = () => (
  <section className="pb-0">
    <div className="container">
      <div
        className="wrapper__contact position-relative bg__black rounded-md"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <img
          src="/portfolio/Mask group (1).png"
          className="path__5"
          alt=""
        />
        <div className="text-center position-relative z-2">
          <h2
            className="bold font__size--45 text__45-1024 text__45-md color__white mb-4"
          >
            Have a project idea to <br className="d-none d-sm-block" />
            collaborate with?
          </h2>
          <Button>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
)