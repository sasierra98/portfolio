const servicesProvidedData = [
  {
    img: "/portfolio/Frame (5).png",
    title: "Frontend Development",
    // project: "4 Project",
    dataAosDelay: 200,
  },
  
  {
    img: "/portfolio/Frame (7).png",
    title: "Backend Development",
    // project: "7 Projects",
    dataAosDelay: 400,
  },
  {
    img: "/portfolio/web-app-icon.png",
    title: "Web Integrations",
    // project: "123 Projects",
    dataAosDelay: 600,
  },
];

export const ServicesProvided = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-md-6 my-auto">
                <h2
                  className="bold font__size--40 text__40-1024 text__40-mm"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  What service <br className="d-none d-md-block" />
                  do I provide
                </h2>
                <p
                  className="normal lh-2 font__size--16 text__16-1024 my-4 opacity__5"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  I offer a range of web development services to meet your needs:
                  <br className="d-none d-xl-block" />
                  <strong>Frontend Development:</strong> Creating visually appealing and user-friendly interfaces using the latest technologies and design principles
                  <br className="d-none d-xl-block" />
                  <strong>Backend Development:</strong> Building robust and scalable server-side applications to ensure your website runs smoothly and efficiently.
                  <br className="d-none d-xl-block" />
                  <strong>Web Integrations:</strong> Integrating various web services and APIs to enhance the functionality and connectivity of your website.
                </p>
              </div>
              <div className="col-md-6 my-auto">
                  {servicesProvidedData.map((data, index) => (
                    <div
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={data.dataAosDelay}
                      key={index}
                    >
                    <div className="wrapper__list-experience mb-4 d-flex align-items-center">
                      <img src={data.img} className="flex-shrink-0 w-12" alt="" />
                      <div className="desc ml-3">
                        <h5 className="bold font__size--24 text__24-1024 text__24-md mb-1">
                            {data.title}
                          </h5>
                        <p className="mb-0 semi-bold font__size--12 text__12-md color__gray-1">
                            {data.project}
                          </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

