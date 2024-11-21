import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations.js";
import { selectFilterCampers } from "../../redux/filters/selectors.js";
import FiltersBox from "../../components/FiltersBox/FiltersBox.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { selectLoading } from "../../redux/campers/selectors.js";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilterCampers);
  const loading = useSelector(selectLoading);
  const [campsCount, setCampsCount] = useState(4);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setCampsCount(4);
  }, [campers]);

  const onClickButton = () => {
    setCampsCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <FiltersBox />
      {loading && <Loader />}
      <CampersList campers={campers.slice(0, campsCount)} />

      {!loading && campers.length > campsCount && (
        <button type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </div>
  );
}
// import { useSelector } from "react-redux";

// const CatalogPage = () => {
//   const { campers, filters, isLoading, error } = useSelector((state) => state);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const filteredCampers = (campers || []).filter((camper) => camper.isActive); // Безпечне фільтрування

//   return (
//     <div>
//       {filteredCampers.map((camper) => (
//         <div key={camper.id}>{camper.name}</div>
//       ))}
//     </div>
//   );
// };
