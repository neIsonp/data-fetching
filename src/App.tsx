import { Route, Routes } from "react-router-dom";
import Repos from "./pages/repos";
import { Repo } from "./pages/repo";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  );
}
