import { useState } from "react";
import {
  PanelRightOpen,
  PanelLeft,
  CircleUserRound,
  ArrowLeftToLine,
  Menu,
} from "lucide-react";
import "./style.css";

const UserProfile = () => {
  /* 
🔧 Problem Statement:
You’re building a settings page with 3 components:

<UserProfile /> → displays username & theme

<ThemeToggle /> → toggles theme (light / dark)

<SettingsSidebar /> → displays the current theme in the sidebar

🔸 You need to:

Create a UserContext with { username, theme } and a way to update the theme.

Place a single UserProvider high enough so all 3 components share the same user state.

In <ThemeToggle />, clicking a button toggles the theme.

When the theme changes, **both <UserProfile /> and <SettingsSidebar /> should instantly reflect the new theme — no prop drilling allowed.

💥 Bonus Points If:
You use useContext() safely

Avoid prop-drilling

Keep everything modular
______________________________________

Info needed:
    username
    theme 

Components:
    SettingSidebar

Design:
    - states controlled here
    - left collapse sidebar
        - visible and gets x margin when menu opened
    - some image and text
*/
  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("John Choi");
  const [light, setLight] = useState<boolean>(true);

  return (
    <>
      <main className="main">
        <Menu
          className={`sidebar-button ${sidebarStatus ? "hide" : ""}`}
          onClick={() => {
            setSidebarStatus(true);
          }}
        />
        <nav className={`sidebar ${sidebarStatus ? "open" : ""}`}>
          <ArrowLeftToLine
            className="close-sidebar"
            onClick={() => {
              setSidebarStatus(false);
            }}
          />
          <div className="user-profile">
            <CircleUserRound size={50} />
            <h1>{username}</h1>
          </div>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
          <div>
            <label className={`toggler ${light ? "" : "checked"}`}>
              <input
                type="checkbox"
                checked={light}
                onChange={() => {
                  setLight(!light);
                }}
              />
              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </main>
    </>
  );
};
export default UserProfile;
