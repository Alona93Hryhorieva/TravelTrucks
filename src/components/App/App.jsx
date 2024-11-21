import "./App.module.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
// import Navigation from "../../components/Navigation/Navigation.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));

const CatalogPage = lazy(
  () => import("../../pages/CatalogPage/CatalogPage.jsx")
);

const DetailsPage = lazy(
  () => import("../../pages/DetailsPage/DetailsPage.jsx")
);

const CampersFeatures = lazy(
  () => import("../../components/CamperFeatures/CamperFeatures.jsx")
);

const CampersReviews = lazy(
  () => import("../../components/CampersReviews/CampersReviews.jsx")
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<CampersFeatures />} />
            <Route path="reviews" element={<CampersReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
