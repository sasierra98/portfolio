import React from 'react';
import { motion } from 'framer-motion';
import { TopNavbar } from '../components/TopNavbar';

const HomePage = () => {
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
                <motion.h1
                  className="color__white bold font__size--60 text__60-1024 text__60-md text__60-xxs color__white mb-0"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Hi, I’am Jose. Full Stack Developer based on Colombia 👋
                </motion.h1>
                <motion.p
                  className="normal lh-2 font__size--16 text__16-1024 text__16-md color__white my-4 opacity__5"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Varius amet, integer tellus non eget viverra. Ultrices tellus
                  donec gravida <br className="d-none d-xl-block" />
                  id sed senectus dolor cursus sed. Ullamcorper tellus ac cras
                  nec, pretium <br className="d-none d-xl-block" />
                  laoreet duis.
                </motion.p>
                <motion.a
                  href="contact.html"
                  className="bold font__size--14 text__14-1024 color__blue rounded-0 btn btn__white shadow mb__5 mb__sm-0"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Contact Us
                </motion.a>
              </div>
              <div className="col-md-5 text-center text-md-left my-auto">
                <motion.img
                  src="./profile.png"
                  className="images__head"
                  alt=""
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
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
            <motion.img
              src="./assets/images/Logo (3).png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              alt="Brand Logo"
            />
            <motion.img
              src="./assets/images/Logo (4).png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              alt="Brand Logo"
            />
            <motion.img
              src="./assets/images/Logo (5).png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              alt="Brand Logo"
            />
            <motion.img
              src="./assets/images/Logo (6).png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              alt="Brand Logo"
            />
            <motion.img
              src="./assets/images/Logo (7).png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              alt="Brand Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
