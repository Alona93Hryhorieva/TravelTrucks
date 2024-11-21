import { useSelector } from "react-redux";
import BookCamperForm from "../BookCamperForm/BookCamperForm.jsx";
import Features from "../Features/Features.jsx";
import css from "./TruckFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";
import Loader from "../Loader/Loader.jsx";

export default function CamperFeatures() {
  const camper = useSelector(selectCamper);

  if (!camper) {
    return <Loader />; // Показуємо повідомлення, якщо дані ще не завантажені
  }

  return (
    <div className={css.feature}>
      <div className={css.featureWrapper}>
        <Features camper={camper} />
        <h3 className={css.equipmentTitle}>Vehicle details</h3>

        <div className={css.truckInfo}>
          <div className={css.truckCategory}>
            <p>Form </p>
            <p>{camper.form || "N/A"}</p>{" "}
            {/* Додаємо перевірку на наявність значення */}
          </div>
          <div className={css.truckCategory}>
            <p>Length</p>
            <p>{camper.length || "N/A"}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Width</p>
            <p>{camper.width || "N/A"}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Height</p>
            <p>{camper.height || "N/A"}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Tank</p>
            <p>{camper.tank || "N/A"}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Consumption</p>
            <p>{camper.consumption || "N/A"}</p>
          </div>
        </div>
      </div>

      <BookCamperForm />
    </div>
  );
}
