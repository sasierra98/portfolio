import React, { useEffect } from 'react';
import { TopNavbar } from '../components/TopNavbar';
import { Button } from '../components/ui/Button';
import { WorkingExperience } from '../components/home/WorkingExperience';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <img src="./Group_20807.png" className="path__1" alt="" />
      
      <div className="bg__blue position-relative">
        <div className="wrapper__wrap-bg bg__blue-2">
          <div className="position-relative d-none d-md-block w-100 h-100">
            <img src="./PATTERN_1.png" className="img" alt="" />
          </div>
        </div>

        <TopNavbar />

        {/* Main Section */}
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
                  Varius amet, integer tellus non eget viverra. Ultrices tellus
                  donec gravida <br className="d-none d-xl-block" />
                  id sed senectus dolor cursus sed. Ullamcorper tellus ac cras
                  nec, pretium <br className="d-none d-xl-block" />
                  laoreet duis.
                </p>
                <a
                  href="contact.html"
                  // className="bold font__size--14 text__14-1024 color__blue rounded-0 btn btn__white shadow mb__5 mb__sm-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <Button
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
              <div className="col-md-5 text-center text-md-left my-auto">
                <img
                  src="./profile.png"
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
      </div>

      {/* Featured Projects Section */}
      <section className="pt-0 position-relative z-2">
        <div className="container">
          <div className="wrapper__brand bg__black d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-xl-between align-items-center">
            <img
              src="./Logo_(3).png"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="800"
              alt="Brand Logo"
            />
            <img
              src="./Logo_(4).png"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
              alt="Brand Logo"
            />
            <img
              src="./Logo_(5).png"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              alt="Brand Logo"
            />
            <img
              src="./Logo_(6).png"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              alt="Brand Logo"
            />
            <img
              src="./Logo_(7).png"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              alt="Brand Logo"
            />
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-md-6 my-auto">
                  <h2
                    class="bold font__size--40 text__40-1024 text__40-mm"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    What service <br class="d-none d-md-block" />
                    do I provide
                  </h2>
                  <p
                    class="normal lh-2 font__size--16 text__16-1024 my-4 opacity__5"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    Varius amet, integer tellus non eget viverra.
                    <br class="d-none d-xl-block" />
                    Ultrices tellus donec gravida id sed senectus dolor
                    <br class="d-none d-xl-block" />
                    cursus sed. Ullamcorper tellus ac cras nec, pretium
                    <br class="d-none d-xl-block" />
                    laoreet duis.
                  </p>
                </div>
                <div class="col-md-6 my-auto">
                  <div
                    class="w-100"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div
                      class="wrapper__list-experience mb-4 d-flex align-items-center"
                    >
                      <img
                        src="./Frame (5).png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5
                          class="bold font__size--24 text__24-1024 text__24-md mb-1"
                        >
                          Website Development
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          234 Project
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="w-100"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <div
                      class="wrapper__list-experience mb-4 d-flex align-items-center"
                    >
                      <img
                        src="./Frame (6).png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5
                          class="bold font__size--24 text__24-1024 text__24-md mb-1"
                        >
                          Mobile Development
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          123 Projects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="w-100"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    <div
                      class="wrapper__list-experience mb-4 d-flex align-items-center"
                    >
                      <img
                        src="./Frame (7).png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5
                          class="bold font__size--24 text__24-1024 text__24-md mb-1"
                        >
                          Web Intergration
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          65 Projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <WorkingExperience />

      <section
        class="position-relative"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="path__3">
          <div class="position-relative w-100 h-100">
            <h5
              class="bold font__size--24 text__24-1024 ls__4 path__4 opacity__5"
            >
              TESTIMONIAL
            </h5>
          </div>
        </div>
        <div class="container position-relative z-2">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="wrapper__slider-testimonial">
                <div class="items">
                  <div
                    class="wrapper__card-testimonial text-center text-lg-left d-lg-flex align-items-center"
                  >
                    <img
                      src="./xdfds.png"
                      class="img mx-auto mb-5 mb-lg-0"
                      alt=""
                    />
                    <div class="desc ml-lg-5 text-left">
                      <h5 class="bold font-_size--18 mb-0">
                        Euismod nulla facilisis eu elit. Tellus nullam enim,
                        maecenas malesuada dis consectetur et. Mauris, sem eu
                        feugiat velit.
                      </h5>
                      <p
                        class="font__size--14 text__14-1024 opacity__5 mt-3 mb-5 mt-lg-5"
                      >
                        Sapien pretium ut massa aliquet tellus pellentesque
                        elementum. Pellentesque pellentesque in curabitur turpis
                        sed dolor adipiscing mi. Gravida consequat ornare at dui
                        gravida ut tortor. Nisi turpis in sed gravida nec vitae.
                        Arcu, ut et integer bibendum duis lacus malesuada. In mi
                        elementum mauris orci dictum sollicitudin odio duis.
                        Vulputate egestas commodo nisl id mauris. Magnis elit
                        ultricies aliquam adipiscing fames sed.
                      </p>

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="profile">
                          <h5 class="bold font__size--16 text__16-1024 mb-0">
                            Roberto Carlos
                          </h5>
                          <p class="mb-0 normal opacity__5">
                            Manager at cyclos
                          </p>
                        </div>

                        <div class="d-flex align-items-center wrapper__arrows">
                          <img
                            src="./PREV.png"
                            class="pointer left"
                            alt=""
                          />
                          <img
                            src="./NEXT.png"
                            class="pointer right ml-2"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="items">
                  <div
                    class="wrapper__card-testimonial d-lg-flex align-items-center"
                  >
                    <img
                      src="./xdfds.png"
                      class="img mx-auto mb-5 mb-lg-0"
                      alt=""
                    />
                    <div class="desc ml-lg-5 text-left">
                      <h5 class="bold font-_size--18 mb-0">
                        Euismod nulla facilisis eu elit. Tellus nullam enim,
                        maecenas malesuada dis consectetur et. Mauris, sem eu
                        feugiat velit.
                      </h5>
                      <p
                        class="font__size--14 text__14-1024 opacity__5 mt-3 mb-5 mt-lg-5"
                      >
                        Sapien pretium ut massa aliquet tellus pellentesque
                        elementum. Pellentesque pellentesque in curabitur turpis
                        sed dolor adipiscing mi. Gravida consequat ornare at dui
                        gravida ut tortor. Nisi turpis in sed gravida nec vitae.
                        Arcu, ut et integer bibendum duis lacus malesuada. In mi
                        elementum mauris orci dictum sollicitudin odio duis.
                        Vulputate egestas commodo nisl id mauris. Magnis elit
                        ultricies aliquam adipiscing fames sed.
                      </p>

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="profile">
                          <h5 class="bold font__size--16 text__16-1024 mb-0">
                            Roberto Carlos
                          </h5>
                          <p class="mb-0 normal opacity__5">
                            Manager at cyclos
                          </p>
                        </div>

                        <div class="d-flex align-items-center wrapper__arrows">
                          <img
                            src="./PREV.png"
                            class="pointer left"
                            alt=""
                          />
                          <img
                            src="./NEXT.png"
                            class="pointer right ml-2"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="items">
                  <div
                    class="wrapper__card-testimonial d-lg-flex align-items-center"
                  >
                    <img
                      src="./xdfds.png"
                      class="img mx-auto mb-5 mb-lg-0"
                      alt=""
                    />
                    <div class="desc ml-lg-5 text-left">
                      <h5 class="bold font-_size--18 mb-0">
                        Euismod nulla facilisis eu elit. Tellus nullam enim,
                        maecenas malesuada dis consectetur et. Mauris, sem eu
                        feugiat velit.
                      </h5>
                      <p
                        class="font__size--14 text__14-1024 opacity__5 mt-3 mb-5 mt-lg-5"
                      >
                        Sapien pretium ut massa aliquet tellus pellentesque
                        elementum. Pellentesque pellentesque in curabitur turpis
                        sed dolor adipiscing mi. Gravida consequat ornare at dui
                        gravida ut tortor. Nisi turpis in sed gravida nec vitae.
                        Arcu, ut et integer bibendum duis lacus malesuada. In mi
                        elementum mauris orci dictum sollicitudin odio duis.
                        Vulputate egestas commodo nisl id mauris. Magnis elit
                        ultricies aliquam adipiscing fames sed.
                      </p>

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="profile">
                          <h5 class="bold font__size--16 text__16-1024 mb-0">
                            Roberto Carlos
                          </h5>
                          <p class="mb-0 normal opacity__5">
                            Manager at cyclos
                          </p>
                        </div>

                        <div class="d-flex align-items-center wrapper__arrows">
                          <img
                            src="./PREV.png"
                            class="pointer left"
                            alt=""
                          />
                          <img
                            src="./NEXT.png"
                            class="pointer right ml-2"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-0">
        <div class="container">
          <div
            class="wrapper__contact position-relative bg__black"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src="./Mask group (1).png"
              class="path__5"
              alt=""
            />
            <div class="text-center position-relative z-2">
              <h2
                class="bold font__size--45 text__45-1024 text__45-md color__white mb-4"
              >
                Have a project idea to <br class="d-none d-sm-block" />
                collaborate with?
              </h2>
              <a
                href="contact.html"
                class="bold d-inline-block font__size--14 text__14-1024 color__blue rounded-0 btn btn__white shadow"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
      </section>

      <section class="py-4">
        <div class="d-flex justify-content-center align-items-center">
          <a href="#!" class="opacity__5 hover">
            <img src="./efwrw.png" alt="" />
          </a>
          <a href="#!" class="opacity__5 hover mx-4">
            <img src="./asdsa.png" alt="" />
          </a>
          <a href="#!" class="opacity__5 hover">
            <img src="./sdad.png" alt="" />
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
