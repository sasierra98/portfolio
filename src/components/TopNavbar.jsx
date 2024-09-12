import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { motion } from 'framer-motion';
// import {AcmeLogo} from "./AcmeLogo.js";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <motion.nav
      // className="navbar navbar-expand-lg wrapper__navbar position-relative z-3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
    <Navbar className="flex items-center " onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="mb-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit mb-0">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 mb-0" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Project
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="mb-0" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </motion.nav>
  );
}

// export const TopNavbar = () => {
//   return (
    // <motion.nav
    //   className="navbar navbar-expand-lg wrapper__navbar position-relative z-3"
    //   initial={{ opacity: 0, y: -50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1, delay: 0.3 }}
    // >
//     <div className="container position-relative">
//       <a className="navbar-brand" href="index.html">
//         <img src="./assets/images/LOGO (2).png" alt="Logo" />
//       </a>
//       <button
//         className="navbar-toggler nav__button position-relative"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//       <div className="collapse navbar-collapse wrapper__navbar-menu center" id="navbarSupportedContent">
//         <ul className="navbar-nav menu__center">
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Themes
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item bold font__size--12 text__12-md color__gray-1" href="./../theme 1/index.html">
//                 Home
//               </a>
//               <a className="dropdown-item bold font__size--12 text__12-md color__gray-1" href="index.html">
//                 Developer
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover active" href="index.html">
//               home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover" href="about.html">
//               about me
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover" href="project.html">
//               project
//             </a>
//           </li>
//           <li className="nav-item d-lg-none">
//             <a href="#!">
//               <img src="./assets/images/SEARCH1.png" alt="Search Icon" />
//             </a>
//           </li>
//         </ul>
//       </div>
//       <a href="#!" className="d-lg-block d-none">
//         <img src="./assets/images/SEARCH.png" alt="Search Icon" />
//       </a>
//     </div>
//     </motion.nav>
//   );
// }

// export const TopNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       className="navbar navbar-expand-lg wrapper__navbar position-relative z-3"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 0.3 }}
//     >
//       <div className="container position-relative">
//         <Navbar onMenuOpenChange={setIsMenuOpen}>
//           <NavbarContent>
//             <NavbarMenuToggle
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//               className="navbar-toggler nav__button position-relative"
//             />
//             <NavbarBrand>
//               <a className="navbar-brand" href="index.html">
//                 <img src="./assets/images/LOGO (2).png" alt="Logo" />
//               </a>
//             </NavbarBrand>
//           </NavbarContent>

//           <NavbarContent className="collapse navbar-collapse wrapper__navbar-menu center" id="navbarSupportedContent">
//             <ul className="navbar-nav menu__center">
//               <NavbarItem className="nav-item dropdown">
//                 <a
//                   className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Themes
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item bold font__size--12 text__12-md color__gray-1" href="./../theme 1/index.html">
//                     Designer
//                   </a>
//                   <a className="dropdown-item bold font__size--12 text__12-md color__gray-1" href="index.html">
//                     Developer
//                   </a>
//                 </div>
//               </NavbarItem>

//               <NavbarItem className="nav-item">
//                 <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover active" href="index.html">
//                   home
//                 </a>
//               </NavbarItem>

//               <NavbarItem className="nav-item">
//                 <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover" href="about.html">
//                   about me
//                 </a>
//               </NavbarItem>

//               <NavbarItem className="nav-item">
//                 <a className="nav-link bold font__size--12 text__12-md text-uppercase color__white opacity__5 hover" href="project.html">
//                   project
//                 </a>
//               </NavbarItem>

//               <NavbarItem className="nav-item d-lg-none">
//                 <a href="#!">
//                   <img src="./assets/images/SEARCH1.png" alt="Search Icon" />
//                 </a>
//               </NavbarItem>
//             </ul>
//           </NavbarContent>

//           <NavbarContent justify="end">
//             <NavbarItem className="d-lg-block d-none">
//               <a href="#!">
//                 <img src="./assets/images/SEARCH.png" alt="Search Icon" />
//               </a>
//             </NavbarItem>
//           </NavbarContent>
//         </Navbar>
//       </div>
//     </motion.nav>
//   );
// };