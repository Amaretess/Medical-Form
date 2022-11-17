import { routesConfig } from "./config/routesConfig";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
        {routesConfig.map(route => <Route key={route.id} path={route.path} element={route.element} />)}
    </Routes>
  );
}

export default App;