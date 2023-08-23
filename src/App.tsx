import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import List from "./pages/useTransition-hook/bad-way/List";
import NewList from "./pages/useTransition-hook/correct-way/NewList";
import Search from "./pages/useDeferredValue-hook/Search";
import Subscriber from "./pages/useSyncExternalStore-hook/Subscriber";
import WidthCalc from "./pages/useSyncExternalStore-hook/WidthCalc";
import StyleComponent from "./pages/useInsertionEffect-hook/StyleComponent";
import { generateProducts } from "./pages/useDeferredValue-hook/generateProducts";

import { BadForm, GoodForm } from "./pages/useId-hook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="badForm" element={<BadForm />} />
          <Route path="goodFormWithUseId" element={<GoodForm />} />
          <Route path="badTransition" element={<List />} />
          <Route path="goodTransition" element={<NewList />} />
          <Route
            path="useDeferredValue"
            element={<Search list={generateProducts()} />}
          />
          <Route path="useSyncExternalStore1" element={<Subscriber />} />
          <Route path="useSyncExternalStore2" element={<WidthCalc />} />
          <Route path="useInsertionEffect" element={<StyleComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
