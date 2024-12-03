import { Button } from "../ui/Button";

export const Hero = () => (
  <section className="position-relative pt-3 z-2">
    <div className="container">
      <div className="row mb__min-2">
        <div className="col-md-7 mb-5 my-md-auto">
          <h1
            className="color__white bold font__size--60 text__60-1024 text__60-md text__60-xxs color__white mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Hi, I’am Jose. Full Stack Developer based on Colombia 👋
          </h1>
          <p
            className="normal lh-2 font__size--16 text__16-1024 text__16-md color__white my-4 opacity__5"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {/* Varius amet, integer tellus non eget viverra. Ultrices tellus
            donec gravida <br className="d-none d-xl-block" />
            id sed senectus dolor cursus sed. Ullamcorper tellus ac cras
            nec, pretium <br className="d-none d-xl-block" />
            laoreet duis. */}
            I’m a Full Stack Developer with 4+ years of experience in Python and
            JavaScript. Proficient in frameworks like Django, Flask, React, and
            Next.js, I specialize in creating robust web applications. I also
            have expertise in AWS services and Linux server administration,
            delivering secure and efficient solutions.
            <br className="d-none d-xl-block" />
            <br className="d-none d-xl-block" />
            Let’s connect and explore how I can contribute to your next project!
          </p>
          <a
            href="contact.html"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <Button>Contact Me</Button>
          </a>
        </div>
        <div className="col-md-5 text-center text-md-left my-auto">
          <img
            src="/portfolio/profile.png"
            className="images__head"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  </section>
);
