import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WorkingExperience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
        <div class="container">
          <div class="text-center mb-5">
            <h2
              className="bold font__size--40 text__40-1024 text__40-mm"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Working experience
            </h2>
            <p
              class="normal lh-2 font__size--16 text__16-1024 my-4 opacity__5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim
              urna quam. <br class="d-none d-md-block" />
              Imperdiet proin sapien posuere egestas. Tristique nam magna velit
              odio ullamcorper <br class="d-none d-md-block" />
              eget donec.
            </p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div
                class="row wrapper__accordion justify-content-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div class="col-md-5 head col-xl-4 my-auto">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="./ssa.png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5 class="bold font__size--24 text__24-1024 mb-1">
                          Cloudnonic
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          Semi-senior Backend Developer - 4 Years Experince
                        </p>
                      </div>
                    </div>
                    <img
                      src="./Vector (1).png"
                      class="d-block d-md-none arrow"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-7 description offset-xl-1 my-auto">
                  <p
                    class="medium font__size--12 text__12-md mt-4 mt-md-0 opacity__5"
                  >
                    Donec tristique nisi, habitant pellentesque erat dolor,
                    felis. Posuere felis, pellentesque ullamcorper nunc in
                    augue. Convallis integer enim placerat ac nisl enim enim in.
                    Enim, egestas blandit bibendum convallis pharetra curabitur
                    etiam. Laoreet enim, fusce vestibulum, faucibus. Et vel
                    massa nibh sed nisi eu non.
                  </p>
                </div>
              </div>
              <hr
                class="hr__line my-5"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="800"
              />
              <div
                class="row wrapper__accordion justify-content-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <div class="col-md-5 head col-xl-4 my-auto">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="./sdaaa.png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5 class="bold font__size--24 text__24-1024 mb-1">
                          Smart Quick S.A.S
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          Senior Developer - 4 Years Experince
                        </p>
                      </div>
                    </div>
                    <img
                      src="./Vector (1).png"
                      class="d-block d-md-none arrow"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-7 description offset-xl-1 my-auto">
                  <p
                    class="medium font__size--12 text__12-md mt-4 mt-md-0 opacity__5"
                  >
                    Donec tristique nisi, habitant pellentesque erat dolor,
                    felis. Posuere felis, pellentesque ullamcorper nunc in
                    augue. Convallis integer enim placerat ac nisl enim enim in.
                    Enim, egestas blandit bibendum convallis pharetra curabitur
                    etiam. Laoreet enim, fusce vestibulum, faucibus. Et vel
                    massa nibh sed nisi eu non.
                  </p>
                </div>
              </div>
              <hr
                class="hr__line my-5"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1200"
              />

              {/* <!-- Dentali Experience --> */}
              <div
                class="row wrapper__accordion justify-content-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1400"
              >
                <div class="col-md-5 head col-xl-4 my-auto">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="./erwer.png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5 class="bold font__size--24 text__24-1024 mb-1">
                          Dentali
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          Software Developer - 4 Years Experince
                        </p>
                      </div>
                    </div>
                    <img
                      src="./Vector (1).png"
                      class="d-block d-md-none arrow"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-7 description offset-xl-1 my-auto">
                  <p
                    class="medium font__size--12 text__12-md mt-4 mt-md-0 opacity__5"
                  >
                    Donec tristique nisi, habitant pellentesque erat dolor,
                    felis. Posuere felis, pellentesque ullamcorper nunc in
                    augue. Convallis integer enim placerat ac nisl enim enim in.
                    Enim, egestas blandit bibendum convallis pharetra curabitur
                    etiam. Laoreet enim, fusce vestibulum, faucibus. Et vel
                    massa nibh sed nisi eu non.
                  </p>
                </div>
              </div>
              <hr
                class="hr__line my-5"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1400"
              />

              {/* <!-- Caribesoft Experience --> */}
              <div
                class="row wrapper__accordion justify-content-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
              >
                <div class="col-md-5 head col-xl-4 my-auto">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        src="./erwer.png"
                        class="flex-shrink-0"
                        alt=""
                      />
                      <div class="desc ml-3">
                        <h5 class="bold font__size--24 text__24-1024 mb-1">
                          Caribesoft
                        </h5>
                        <p
                          class="mb-0 semi-bold font__size--12 text__12-md color__gray-1"
                        >
                          Full Stack Developer - 4 Years Experince
                        </p>
                      </div>
                    </div>
                    <img
                      src="./Vector (1).png"
                      class="d-block d-md-none arrow"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-7 description offset-xl-1 my-auto">
                  <p
                    class="medium font__size--12 text__12-md mt-4 mt-md-0 opacity__5"
                  >
                    Donec tristique nisi, habitant pellentesque erat dolor,
                    felis. Posuere felis, pellentesque ullamcorper nunc in
                    augue. Convallis integer enim placerat ac nisl enim enim in.
                    Enim, egestas blandit bibendum convallis pharetra curabitur
                    etiam. Laoreet enim, fusce vestibulum, faucibus. Et vel
                    massa nibh sed nisi eu non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}