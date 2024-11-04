import "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import { css } from "@emotion/react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(
  () => import("../../pages/СatalogPage/СatalogPage.jsx")
);
const DetailsPage = lazy(
  () => import("../../pages/DetailsPage/DetailsPage.jsx")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.title}>Refreshing user, please wait...</p>
  ) : (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
