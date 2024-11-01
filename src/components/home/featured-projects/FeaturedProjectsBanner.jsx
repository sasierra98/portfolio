const bannerData = [
  {
    src: "/portfolio/Logo_(3).png",
    delay: 800,
    dataAosDuration: 1000,
    dataAosDelay: 800,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/Logo_(4).png",
    delay: 600,
    dataAosDuration: 1000,
    dataAosDelay: 600,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/Logo_(5).png",
    delay: 400,
    dataAosDuration: 1000,
    dataAosDelay: 400,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/Logo_(6).png",
    delay: 200,
    dataAosDuration: 1000,
    dataAosDelay: 200,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/Logo_(7).png",
    delay: 200,
    dataAosDuration: 1000,
    dataAosDelay: 200,
    alt: "Brand Logo",
  },
];

export const FeaturedProjectsBanner = () => (
  <section className="pt-0 position-relative z-2">
    <div className="container">
      <div className="wrapper__brand bg__black d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-xl-between align-items-center">
        {bannerData.map((data, index) => (
          <img
            src={data.src}
            alt={data.alt}
            data-aos="fade-right"
            data-aos-duration={data.dataAosDuration}
            data-aos-delay={data.dataAosDelay}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
)