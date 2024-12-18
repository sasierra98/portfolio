import AOS from 'aos';
import { useEffect } from 'react';
import { CollaborationContainer } from '../components/CollaborationContainer';
import { Footer } from '../components/Footer';
import { desc } from 'framer-motion/client';
import { ContactForm } from '../components/ui/ConctactForm';


const contactData = [
  {
    icon: "/portfolio/sdsadsdw.png",
    title: "Email",
    description: "joseandresmayo@gmail.com",
    dataAosDelay: "200"
  },
  {
    icon: "/portfolio/sdasd.png",
    title: "Phone",
    description: "+57 301 760 5479",
    dataAosDelay: "400"
  },
  {
    icon: "/portfolio/ghfhf.png",
    title: "Dribbble Link",
    description: "Samantha W",
    dataAosDelay: "800"
  }  
]


export const Contact = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <img src="/portfolio/Group 20807.png" className="path__1" alt="" />
      <div className="bg__blue position-relative">
        <nav
          className="navbar navbar-expand-lg wrapper__navbar position-relative z-3"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="container position-relative">
            <a className="navbar-brand" href="index.html">
              <img src="/portfolio/LOGO_(2).png" alt="" />
            </a>
            <button
              className="navbar-toggler nav__button position-relative"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className="collapse navbar-collapse wrapper__navbar-menu center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu__center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Themes
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a
                      className="dropdown-item bold font__size--12 text__12-md color__gray-1"
                      href="./../theme 1/index.html"
                    >
                      Designer
                    </a>
                    <a
                      className="dropdown-item bold font__size--12 text__12-md color__gray-1"
                      href="index.html"
                    >
                      Developer
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover"
                    href="index.html"
                  >
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover"
                    href="about.html"
                  >
                    about me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover"
                    href="project.html"
                  >
                    project
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <a href="#!">
                    <img src="/portfolio/SEARCH1.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <a href="#!" className="d-lg-block d-none">
              <img src="/portfolio/SEARCH1.png" alt="" />
            </a>
          </div>
        </nav>

        <section className="position-relative z-2 pb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10 col-xl-8 my-auto">
                <h1
                  className="color__white bold font__size--60 text__60-1024 text__60-md text__60-xxs color__white mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Let's contact me and talk about your idea
                </h1>
                <div className="row text-center my-5">
                  {contactData.map((data, index) => (
                    <div
                      className="col-md-4 mb-4 mb-md-0 link__right flex flex-col justify-center text-center items-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={data.dataAosDelay}
                      key={index}
                    >
                      <img
                        src={data.icon}
                        className="mb-3 w-8 h-8"
                        alt=""
                      />
                      <h5 className="bold font__size--24 text__24-1024 color__white">
                        {data.description}
                      </h5>
                      <p className="semi-bold font__size--14 text__14-1024 color__white mb-0">
                        {data.title}
                      </p>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative pt-0">
          <div className="container position-relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="wrapper__form-card bg__white"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CollaborationContainer />
      <Footer />
    </div>
  );
}