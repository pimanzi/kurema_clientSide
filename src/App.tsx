import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout></AppLayout>}>
          {" "}
          <Route
            index
            element={<Navigate replace to="home"></Navigate>}
          ></Route>
          <Route element={<Home></Home>} path="home"></Route>
          <Route element={<Catalog></Catalog>} path="catalog"></Route>
          <Route element={<Cart></Cart>} path="cart"></Route>
        </Route>

        <Route element={<Auth></Auth>} path="auth"></Route>
      </Routes>
    </BrowserRouter>
  );
}
