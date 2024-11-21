import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import { getCamperById } from "../../redux/campers/operations.js";
// import css from "./DetailsPage.module.css";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <CamperCard />
    </div>
  );
}
