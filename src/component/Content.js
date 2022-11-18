import moon from "../img/moon.png";
import sun from "../img/sun.png";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Welcome to my resume</h1>
        <p>{theme === "light" ? "Light" : "Dark"}Mode Workshop</p>
      </div>
      <img src={theme === "dark" ? moon : sun} alt="Logo" />
    </main>
  );
};

export default Content;
