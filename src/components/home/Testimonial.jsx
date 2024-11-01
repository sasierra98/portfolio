import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testimonials = [
  {
    image: "/portfolio/xdfds.png",
    text: "Euismod nulla facilisis eu elit. Tellus nullam enim, maecenas malesuada dis consectetur et. Mauris, sem eu feugiat velit.",
    description: `Sapien pretium ut massa aliquet tellus pellentesque elementum. Pellentesque pellentesque in curabitur turpis
    sed dolor adipiscing mi. Gravida consequat ornare at dui gravida ut tortor. Nisi turpis in sed gravida nec vitae.
    Arcu, ut et integer bibendum duis lacus malesuada. In mi elementum mauris orci dictum sollicitudin odio duis.
    Vulputate egestas commodo nisl id mauris. Magnis elit ultricies aliquam adipiscing fames sed.`,
    name: "Roberto Carlos",
    role: "Manager at Cyclos",
  },
  {
    image: "/portfolio/xdfds.png",
    text: "Euismod nulla facilisis eu elit. Tellus nullam enim, maecenas malesuada dis consectetur et. Mauris, sem eu feugiat velit.",
    description: `Sapien pretium ut massa aliquet tellus pellentesque elementum. Pellentesque pellentesque in curabitur turpis
    sed dolor adipiscing mi. Gravida consequat ornare at dui gravida ut tortor. Nisi turpis in sed gravida nec vitae.
    Arcu, ut et integer bibendum duis lacus malesuada. In mi elementum mauris orci dictum sollicitudin odio duis.
    Vulputate egestas commodo nisl id mauris. Magnis elit ultricies aliquam adipiscing fames sed.`,
    name: "Roberto Carlos",
    role: "Manager at Cyclos",
  },
  // Puedes añadir más testimonios aquí
];

export const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="position-relative"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="path__3">
        <div className="position-relative w-100 h-100">
          <h5 className="bold font__size--24 text__24-1024 ls__4 path__4 opacity__5">
            TESTIMONIAL
          </h5>
        </div>
      </div>
      <div className="container position-relative z-2">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper__slider-testimonial">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                modules={[Navigation, Pagination]}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="wrapper__card-testimonial text-center text-lg-left d-lg-flex align-items-center">
                      <img
                        src={testimonial.image}
                        className="img mx-auto mb-5 mb-lg-0"
                        alt=""
                      />
                      <div className="desc ml-lg-5 text-left">
                        <h5 className="bold font-_size--18 mb-0">
                          {testimonial.text}
                        </h5>
                        <p className="font__size--14 text__14-1024 opacity__5 mt-3 mb-5 mt-lg-5">
                          {testimonial.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="profile">
                            <h5 className="bold font__size--16 text__16-1024 mb-0">
                              {testimonial.name}
                            </h5>
                            <p className="mb-0 normal opacity__5">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
