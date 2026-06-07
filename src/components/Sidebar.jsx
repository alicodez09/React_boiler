import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">React Lessons</div>
      <nav>
        <NavLink to="/jsx"         className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>01 · JSX</NavLink>
        <NavLink to="/props"       className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>02 · Props</NavLink>
        <NavLink to="/usestate"    className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>03 · useState</NavLink>
        <NavLink to="/useeffect"   className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>04 · useEffect</NavLink>
        <NavLink to="/events"      className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>05 · Event Handling</NavLink>
        <NavLink to="/conditional" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>06 · Conditional Rendering</NavLink>
        <NavLink to="/lists"       className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>07 · Lists & Keys</NavLink>
        <NavLink to="/forms"       className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}>08 · Forms</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
