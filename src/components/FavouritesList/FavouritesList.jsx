import React from "react";
import { useSelector } from "react-redux"; // Для отримання доступу до Redux
import { selectFavourites } from "../redux/favourites/slice"; // Імпортуємо селектор для обраних кемперів
import { Link } from "react-router-dom"; // Якщо ви хочете, щоб користувач міг перейти до детального перегляду

const FavouritesList = () => {
  // Отримуємо список обраних кемперів з Redux
  const favourites = useSelector(selectFavourites);

  // Якщо обраних кемперів немає, відображаємо повідомлення
  if (favourites.length === 0) {
    return <p>Немає обраних кемперів.</p>;
  }

  return (
    <div>
      <h2>Обрані кемпери</h2>
      <ul>
        {favourites.map((camperId) => (
          <li key={camperId}>
            <Link to={`/campers/${camperId}`}>
              {/* Тут ми можемо використовувати інформацію про кемпер, наприклад, з API або збережену в Redux */}
              {/* Для цього вам потрібно мати додатковий редуктор або селектор для отримання інформації про кемпер за його ID */}
              <span>{camperId}</span>{" "}
              {/* Замінити на реальну інформацію про кемпер */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;

// import { createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { selectCampers } from "../redux/campers/selectors"; // Селектор для всіх кемперів
// import { selectFavourites } from "../redux/favourites/slice"; // Селектор для обраних кемперів

// // Оновлений селектор для отримання обраних кемперів
// const selectFavouritedCampers = createSelector(
//   [selectCampers, selectFavourites],
//   (campers, favourites) => {
//     return campers.filter((camper) => favourites.includes(camper.id));
//   }
// );

// const FavouritesList = () => {
//   const favouriteCampers = useSelector(selectFavouritedCampers); // Отримуємо обрані кемпери з Redux

//   if (favouriteCampers.length === 0) {
//     return <p>Немає обраних кемперів.</p>;
//   }

//   return (
//     <div>
//       <h2>Обрані кемпери</h2>
//       <ul>
//         {favouriteCampers.map((camper) => (
//           <li key={camper.id}>
//             <Link to={`/campers/${camper.id}`}>
//               <h3>{camper.name}</h3>
//               <p>{camper.location}</p>
//               <p>Ціна: {camper.price} грн/день</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavouritesList;
