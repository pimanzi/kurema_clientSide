import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./UI/protectedRoute";
import Account from "./pages/Account";
import PersonalInfo from "./UI/PersonalInfo";
import ManageArts from "./features/Arts/ManageArts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
            <Route
              element={
                <ProtectedRoute>
                  <Account></Account>
                </ProtectedRoute>
              }
              path="account"
            >
              <Route
                index
                element={<Navigate replace to="personalInfo"></Navigate>}
              ></Route>

              <Route
                element={<PersonalInfo></PersonalInfo>}
                path="personalInfo"
              ></Route>

              <Route
                element={<ManageArts></ManageArts>}
                path="manageArts"
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "700px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      />
    </QueryClientProvider>
  );
}
