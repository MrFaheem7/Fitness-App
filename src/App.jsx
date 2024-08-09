import { ConfigProvider } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import configuration from "./styles/antd-configuration/configuration";
import SIDEBAR_ROUTES from "./routes/Sidebar.routes";
import { RouteProvider } from "./routes/route-context";
import Main from "./pages/Main";

function App() {
  return (
    <ConfigProvider theme={configuration.configuration}>
      <div className="app-container">
        <RouteProvider>
          <Routes>
            <Route
              path="/*"
              element={<Main navigation={SIDEBAR_ROUTES} />}
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </RouteProvider>
      </div>
    </ConfigProvider>
  );
}

export default App;