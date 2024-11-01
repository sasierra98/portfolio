export const FeatureProjectsCards = () => {
  const projects = [
    {
      title: "Real Estate Agency Website",
      image: "/portfolio/MOCKUP.png",
      description: "UIUX Design",
    },
    {
      title: "Property Agent",
      image: "/portfolio/Artboard.png",
      description: "UIUX Design & Development",
    },
    {
      title: "Cycling Tracker App",
      image: "/portfolio/MOCKUP (1) 1.png",
      description: "UIUX Design & Development",
    },
  ];

  return (
    <div class="row justify-content-center bd-highlight mb-5">
      {projects.map((project) => (
        <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 flex-fill bd-highlight">
          <div
            className="wrapper__card-porto h-100 position-relative bg-button"
          >
            <h3 class="color__white bold font__size--28 text__28-1024 mb-3">
              {project.title}
            </h3>
            <p
              class="medium font__size--16 text__16-1024 color__white opacity__5 mb-5"
            >
              {project.description}
            </p>
            <div class="flex justify-center">
              <img src={project.image} alt="" />
            </div>
            <div class="hover__detail bg__white text-center">
              <div class="text-left d-inline-block">
                <h5 class="bold font__size--24 text__24-1024 mb-4">
                  See Detail <br />
                  Project
                </h5>
                <a href="#!" class="d-inline-block">
                  <img src="./Arrow 7.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}