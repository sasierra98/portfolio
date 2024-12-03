export const ExperienceItem = ({
  company,
  role,
  period,
  location,
  description,
  logo,
  delay,
}) => (
  <>
    <div
      className="row wrapper__accordion justify-content-center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <div className="col-md-5 head col-xl-4 my-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              className="flex-shrink-0 w-[64px] h-auto rounded-md"
              alt={company}
            />
            <div className="desc ml-3">
              <h5 className="bold font__size--24 text__24-1024 mb-1">
                {company}
              </h5>
              <p className="mb-0 bold font__size--12 text__12-md color__gray-1">
                {role}
              </p>
              <p className="mb-0 semi-bold font__size--12 text__12-md color__gray-1">
                {period}
              </p>
              <p className="mb-0 font__size--12 text__12-md color__gray-1">
                {location}
              </p>
            </div>
          </div>
          <img
            src="/portfolio/Vector-(1).png"
            className="d-block d-md-none arrow"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-7 description offset-xl-1 my-auto">
        <p className="medium font__size--12 text__12-md mt-4 mt-md-0 opacity__5">
          {description}
        </p>
      </div>
    </div>
    <hr
      className="hr__line my-5"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={delay + 200}
    />
  </>
);
