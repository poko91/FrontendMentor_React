import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setDark] = useTheme();

  return (
    <header className={`header-container ${isDark && "dark"}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
