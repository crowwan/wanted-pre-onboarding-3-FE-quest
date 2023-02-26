import { Route, Routes } from "react-router-dom";
import MainPageTemplate from "./pages/MainPageTemplate";
import Page from "./pages/Page";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/page" element={<MainPageTemplate />}>
        <Route path="A" element={<PageA />} />
        <Route path="B" element={<PageB />} />
        <Route path="C" element={<PageC />} />
        <Route path=":page" element={<Page />} />
      </Route>
    </Routes>
  );
}

export default App;
