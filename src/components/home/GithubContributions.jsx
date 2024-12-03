import GitHubCalendar from "react-github-calendar";

export const GitHubContributions = () => {
  const minimalTheme = {
    light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
    dark: ["#EAEDF0", "#9BE9A8", "#40C462", "#2FA14E", "#206E38"],
  };

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
            GitHub Contributions
          </h2>
        </div>
        <div
          className="flex justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <GitHubCalendar
            style={{ alignItems: "center" }}
            username="sasierra98"
            theme={minimalTheme}
          />
        </div>
      </div>
    </section>
  );
};
