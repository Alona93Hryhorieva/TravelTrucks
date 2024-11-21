import { useSelector } from "react-redux"; // Додайте імпорт useSelector
import { selectFilterCampers } from "../../redux/filters/selectors.js"; // імпортуємо селектор для фільтрованих кемперів
import { selectLoading } from "../../redux/campers/selectors.js"; // імпортуємо селектор для статусу завантаження
import CamperCard from "../CamperCard/CamperCard.jsx";
import Loader from "../Loader/Loader.jsx";

export default function CampersList() {
  // Отримуємо фільтровані кемпери з Redux
  const filteredCampers = useSelector(selectFilterCampers);

  // Отримуємо статус завантаження
  const isLoading = useSelector(selectLoading);

  if (isLoading) return <Loader />;

  console.log("Filtered Campers:", filteredCampers); // Перевірка, чи є відфільтровані кемпери

  if (filteredCampers.length === 0) {
    return <p>Sorry, there are no campers!</p>;
  }
  useEffect(() => {
    dispatch(fetchCampers(filters)); // Оновлення даних з урахуванням фільтрів
  }, [filters, dispatch]);

  return (
    <ul>
      {filteredCampers.map((item) => (
        <li key={item.id}>
          <CamperCard camper={item} />
        </li>
      ))}
    </ul>
  );
}
