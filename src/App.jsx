import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <h2 className="text-2xl">navbar</h2>
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
