import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExperienceItem } from "./ExperienceItem";

const experiences = [
  {
    company: "Cloudnonic",
    location: "Kitchener, Canada",
    role: "Semi-senior Backend Developer",
    period: "May 2023 - Present",
    description: (
      <ul style={{listStyleType: "disc"}}>
        <li>Developing and maintaining server-side web applications using Django, Flask, Serverless, and
        NextJS.</li> 
        <li>Designing and implementing RESTful APIs for efficient communication between the frontend
        and backend.</li>
        <li>Writing clean, scalable, and efficient code while adhering to coding standards and best
        practices.</li>
        <li>Creating and optimizing database schemas and queries in PostgreSQL, DynamoDB, and
        MongoDB for optimal performance.</li>
      </ul>
    ),
    logo: "/portfolio/experience/cloudnonic-logo.webp",
    delay: 600,
  },
  {
    company: "Smart Quick S.A.S",
    role: "Senior Developer",
    location: "Bogotá, Colombia",
    period: "Nov 2022 - May 2023",
    description: (
      <ul style={{listStyleType: "disc"}}>
        <li>Logical development and operation Back End or Front End.</li> 
        <li>Lead new developments and implement new versions of the platform in charge.</li>
        <li>Control modifications and/or improvements of the developed software.</li>
        <li>Carry out pre-implementation tests of executed developments.</li>
      </ul>
    ),
    logo: "/portfolio/experience/quick-logo.webp",
    delay: 1000,
  },
  {
    company: "Dentali",
    role: "Software Developer",
    location: "Medellín, Colombia",
    period: "Oct 2021 - Oct 2022",
    description: (
      <ul style={{listStyleType: "disc"}}>
        <li>Frontend and Backend development in the Django framework.</li> 
        <li>Management and modification of parameters of CentOS servers.</li>
        <li>Version control management.</li>
        <li>Query and manipulate data in Postgres.</li>
        <li>Upload changes to production.</li>
      </ul>
    ),
    logo: "/portfolio/experience/identall_logo.webp",
    delay: 1400,
  },
  {
    company: "Caribesoft",
    role: "Full Stack Developer",
    location: "Santa Marta, Colombia",
    period: "Jan 2020 - Jan 2023",
    description: (
      <ul style={{listStyleType: "disc"}}>
        <li>Develop Backend applications in Flask and Django.</li> 
        <li>Design user interfaces and other Frontend components in React.</li>
        <li>Create and consult databases in PostgreSQL and MongoDB.</li>
        <li>Assist and execute the assigned tasks in the Sprints.</li>
      </ul>
    ),
    logo: "/portfolio/experience/caribesoft-logo.webp",
    delay: 1600,
  }
];

export const WorkingExperience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="bold font__size--40 text__40-1024 text__40-mm"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Working experience
          </h2>
          <p
            className="normal lh-2 font__size--16 text__16-1024 my-4 opacity__5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim
            urna quam. <br className="d-none d-md-block" />
            Imperdiet proin sapien posuere egestas. Tristique nam magna velit
            odio ullamcorper <br className="d-none d-md-block" />
            eget donec.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};