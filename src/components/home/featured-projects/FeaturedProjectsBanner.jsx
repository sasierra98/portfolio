const svgStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "100px", // Adjust this value as needed
};

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    data-name="Layer 2"
    width={85}
    height={65}
    style={svgStyle}
    {...props}
  >
    <defs>
      <clipPath id="clippath">
        <path
          d="M22.68 0h38.69v29.76H22.68z"
          style={{
            fill: "#9C9C9C",
          }}
        />
      </clipPath>
      <style>{".cls-3{fill:#9C9C9C}"}</style>
    </defs>
    <g id="Layer_1-2" data-name="Layer 1">
      <g
        style={{
          clipPath: "url(#clippath)",
        }}
      >
        <path
          d="M28.95 11.96c1.19-3.36 4.38-5.8 8.07-5.83 4.66-.04 8.79-2.31 11.42-5.83H37.1c-4.68 0-8.87 2.29-11.51 5.83-1.27 1.7-2.17 3.68-2.61 5.83-1.79 8.86 4.84 17.39 13.96 17.49h11.49c-2.6-3.5-6.72-5.78-11.34-5.83-3.72-.03-6.93-2.41-8.14-5.84h7.99c11.04 0 20.79-7.11 24.44-17.49h-6.22C51.87 7.25 44.88 11.95 37 11.95h-8.04Zm22.69 4.65a28.376 28.376 0 0 1-6.58 2.92c4.41 1.98 8.01 5.52 10.08 9.93h6.23a26.446 26.446 0 0 0-9.73-12.85Z"
          style={{
            fillRule: "evenodd",
            fill: "#9C9C9C",
          }}
        />
      </g>
      <path
        d="M14.15 62.85v1.83H0v-20h13.71v1.83H2.13v7.1h10.33v1.81H2.13v7.42h12.02ZM25.71 55.28l-4.08 4.15v5.25H19.5v-20h2.13v12.08l11.73-12.08h2.44l-8.67 9.06 9.27 10.94h-2.52l-8.17-9.4ZM48.95 64.85c-1.99 0-3.79-.44-5.4-1.31-1.6-.89-2.85-2.1-3.77-3.65-.91-1.54-1.35-3.28-1.35-5.21s.45-3.65 1.35-5.19a9.94 9.94 0 0 1 3.77-3.65c1.61-.89 3.41-1.33 5.4-1.33s3.75.44 5.33 1.31c1.59.88 2.85 2.09 3.77 3.65.92 1.56 1.38 3.29 1.38 5.21s-.46 3.68-1.38 5.23a9.887 9.887 0 0 1-3.77 3.63c-1.58.88-3.36 1.31-5.33 1.31Zm0-1.88c1.58 0 3.01-.35 4.27-1.06a7.741 7.741 0 0 0 3-2.98c.73-1.26 1.1-2.68 1.1-4.25s-.37-2.96-1.1-4.23a7.609 7.609 0 0 0-3-2.98c-1.27-.71-2.69-1.06-4.27-1.06s-3.02.35-4.31 1.06c-1.28.71-2.29 1.7-3.02 2.98-.74 1.27-1.1 2.68-1.1 4.23s.36 2.99 1.1 4.25a7.86 7.86 0 0 0 3.02 2.98c1.29.71 2.73 1.06 4.31 1.06ZM85.32 44.68v20H83.3v-16l-7.85 13.46h-1L66.6 48.76v15.92h-2.04v-20h1.75L75 59.51l8.58-14.83h1.75Z"
        className="cls-3"
      />
    </g>
  </svg>
);
// const SvgComponent = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     id="Layer_2"
//     data-name="Layer 2"
//     // viewBox="0 0 85.32 64.85"
//     {...props}
//   >
//     <defs>
//       <clipPath id="clippath">
//         <path
//           d="M22.68 0h38.69v29.76H22.68z"
//           style={{
//             fill: "#9C9C9C",
//           }}
//         />
//       </clipPath>
//       <style>{".cls-3{fill:#9C9C9C}"}</style>
//     </defs>
//     <g id="Layer_1-2" data-name="Layer 1">
//       <g
//         style={{
//           clipPath: "url(#clippath)",
//         }}
//       >
//         <path
//           d="M28.95 11.96c1.19-3.36 4.38-5.8 8.07-5.83 4.66-.04 8.79-2.31 11.42-5.83H37.1c-4.68 0-8.87 2.29-11.51 5.83-1.27 1.7-2.17 3.68-2.61 5.83-1.79 8.86 4.84 17.39 13.96 17.49h11.49c-2.6-3.5-6.72-5.78-11.34-5.83-3.72-.03-6.93-2.41-8.14-5.84h7.99c11.04 0 20.79-7.11 24.44-17.49h-6.22C51.87 7.25 44.88 11.95 37 11.95h-8.04Zm22.69 4.65a28.376 28.376 0 0 1-6.58 2.92c4.41 1.98 8.01 5.52 10.08 9.93h6.23a26.446 26.446 0 0 0-9.73-12.85Z"
//           style={{
//             fillRule: "evenodd",
//             fill: "#9C9C9C",
//           }}
//         />
//       </g>
//       <path
//         d="M14.15 62.85v1.83H0v-20h13.71v1.83H2.13v7.1h10.33v1.81H2.13v7.42h12.02ZM25.71 55.28l-4.08 4.15v5.25H19.5v-20h2.13v12.08l11.73-12.08h2.44l-8.67 9.06 9.27 10.94h-2.52l-8.17-9.4ZM48.95 64.85c-1.99 0-3.79-.44-5.4-1.31-1.6-.89-2.85-2.1-3.77-3.65-.91-1.54-1.35-3.28-1.35-5.21s.45-3.65 1.35-5.19a9.94 9.94 0 0 1 3.77-3.65c1.61-.89 3.41-1.33 5.4-1.33s3.75.44 5.33 1.31c1.59.88 2.85 2.09 3.77 3.65.92 1.56 1.38 3.29 1.38 5.21s-.46 3.68-1.38 5.23a9.887 9.887 0 0 1-3.77 3.63c-1.58.88-3.36 1.31-5.33 1.31Zm0-1.88c1.58 0 3.01-.35 4.27-1.06a7.741 7.741 0 0 0 3-2.98c.73-1.26 1.1-2.68 1.1-4.25s-.37-2.96-1.1-4.23a7.609 7.609 0 0 0-3-2.98c-1.27-.71-2.69-1.06-4.27-1.06s-3.02.35-4.31 1.06c-1.28.71-2.29 1.7-3.02 2.98-.74 1.27-1.1 2.68-1.1 4.23s.36 2.99 1.1 4.25a7.86 7.86 0 0 0 3.02 2.98c1.29.71 2.73 1.06 4.31 1.06ZM85.32 44.68v20H83.3v-16l-7.85 13.46h-1L66.6 48.76v15.92h-2.04v-20h1.75L75 59.51l8.58-14.83h1.75Z"
//         className="cls-3"
//       />
//     </g>
//   </svg>
// )

const bannerData = [
  {
    src: "/portfolio/projects/ekom_logo.svg",
    delay: 800,
    dataAosDuration: 1000,
    dataAosDelay: 800,
    alt: "Brand Logo",
    // component: SvgComponent,
  },
  {
    src: "/portfolio/projects/writerly_logo.svg",
    delay: 600,
    dataAosDuration: 1000,
    dataAosDelay: 600,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/projects/tuj_logo.svg",
    delay: 400,
    dataAosDuration: 1000,
    dataAosDelay: 400,
    alt: "Brand Logo",
  },
  {
    src: "/portfolio/projects/quick_logo.svg",
    delay: 200,
    dataAosDuration: 1000,
    dataAosDelay: 200,
    alt: "Brand Logo",
  },
];

export const FeaturedProjectsBanner = () => (
  <section className="pt-0 position-relative z-2">
    <div className="container">
      <div className="wrapper__brand bg__black grid grid-flow-row auto-rows-fr justify-center md:grid md:grid-flow-col md:grid-cols-4 md:justify-items-center align-items-center">
        {bannerData.map((data, index) =>
          data?.component ? (
            <data.component key={index} />
          ) : (
            <img
              src={data.src}
              alt={data.alt}
              data-aos="fade-right"
              data-aos-duration={data.dataAosDuration}
              data-aos-delay={data.dataAosDelay}
              key={index}
            />
          ),
        )}
      </div>
    </div>
  </section>
);
