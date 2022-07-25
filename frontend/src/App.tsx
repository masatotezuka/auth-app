import { Routes, Route } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { HomePage } from "./components/pages/HomePage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { LoginPage } from "./components/pages/LoginPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { GuestRoute, PrivateRoute } from "./AuthRouter";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<GuestRoute children={<TopPage />}></GuestRoute>}
        />
        <Route
          path="/sign-up"
          element={<GuestRoute children={<SignUpPage />}></GuestRoute>}
        />
        <Route
          path="/login"
          element={<GuestRoute children={<LoginPage />}></GuestRoute>}
        />
        <Route
          path="/home"
          element={<PrivateRoute children={<HomePage />}></PrivateRoute>}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
