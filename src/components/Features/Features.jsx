import PropTypes from "prop-types";
import icons from "../../assets/images/icons.svg";
import css from "./Features.module.css"; // якщо ви використовуєте стилі

export default function Features({ camper }) {
  const features = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "diagram",
      value: "automatic",
    },
    { key: "transmission", label: "Transmission", svg: "diagram" },
    { key: "AC", label: "AC", svg: "wind" },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot" },
    { key: "refrigerator", label: "Fridge", svg: "solar_fridge-outline" },
    { key: "bathroom", label: "Bathroom", svg: "ph_shower" },
    { key: "TV", label: "TV", svg: "tv" },
    { key: "radio", label: "Radio", svg: "radios" },
    { key: "gas", label: "Gas", svg: "gas-stove" },
    { key: "microwave", label: "Microwave", svg: "lucide_microwave" },
    { key: "water", label: "Water", svg: "water-outline" },
    { key: "engine", label: "Hybrid", svg: "engine", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "engine", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "engine", value: "petrol" },
  ];

  return (
    <div>
      <ul>
        {features.map((feature, index) => {
          const featureValue = camper[feature.key];

          // Загальна перевірка для всіх властивостей
          if (feature.value && featureValue !== feature.value) {
            return null; // Якщо є поле `value` і значення не співпадає, пропускаємо
          }

          // Якщо значення існує, відображаємо
          return (
            featureValue !== undefined &&
            featureValue !== null && (
              <li key={index}>
                <svg className={css.icon} width="20" height="20">
                  <use href={`${icons}#${feature.svg}`} />
                </svg>
                {feature.label}: {featureValue ? "Yes" : "No"}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

Features.propTypes = {
  camper: PropTypes.shape({
    transmission: PropTypes.string,
    engine: PropTypes.string,
    AC: PropTypes.bool,
    bathroom: PropTypes.bool,
    kitchen: PropTypes.bool,
    TV: PropTypes.bool,
    radio: PropTypes.bool,
    refrigerator: PropTypes.bool,
    microwave: PropTypes.bool,
    gas: PropTypes.bool,
    water: PropTypes.bool,
  }).isRequired,
};
// <div className={css.features}>
//   {features.map((feature) => {
//     const isFeatureAvailable =
//       truck[feature.key] === true || truck[feature.key] === feature.value;
//     return isFeatureAvailable ? (
//       <div className={css.feature} key={feature.key}>
//         <svg className={css.icon} width="20" height="20">
//           <use href={`${icons}#${feature.svg}`} />
//         </svg>
//         <span>{feature.label}</span>
//       </div>
//     ) : null;
//   })}
// </div>;
