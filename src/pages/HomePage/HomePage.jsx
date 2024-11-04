import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function Home() {
  return (
    <div className={css.pageBackground}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button className={css.btn}>View Now</button>
        </Link>
      </div>
    </div>
  );
}
