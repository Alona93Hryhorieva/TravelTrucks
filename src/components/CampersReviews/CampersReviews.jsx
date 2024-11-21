import { useSelector } from "react-redux";
import BookCamperForm from "../BookCamperForm/BookCamperForm.jsx";
// import css from "./TruckReviews.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";
import icons from "../../assets/images/icons.svg";
import { nanoid } from "nanoid";

export default function CampersReviews() {
  const camper = useSelector(selectCamper);
  const totalStars = 5;

  return (
    <div className={css.review}>
      <ul className={css.list}>
        {camper.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          camper.reviews.map((item) => (
            <li className={css.listItem} key={nanoid()}>
              <div className={css.reviewerWrapper}>
                <div className={css.reviewerName}>
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewerName}</h3>
                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${icons}#star`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.comment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
      <BookCamperForm />
    </div>
  );
}
