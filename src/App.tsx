import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts";
import Result from "./pages/Result";
import Live from "./pages/Live";
import StatisticsLayout from "./layouts/statistics";
import { RouteCollection } from "./enums/route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<StatisticsLayout />}>
          {/* path = "page name" */}
          <Route path={RouteCollection.Result} element={<Result />} />
          <Route path={RouteCollection.Live} element={<Live />} />
        </Route>
        <Route index element={<Navigate to={RouteCollection.Result} />} />
        <Route path="*" element={<Navigate to={RouteCollection.Result} />} />
      </Route>
    </Routes>
  );
}

export default App;
