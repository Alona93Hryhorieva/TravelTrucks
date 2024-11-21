import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./FiltersBox.module.css";
import icons from "../../assets/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice.js";
import { selectFilters } from "../../redux/filters/selectors.js";

export default function FiltersBox() {
  const filters = useSelector(selectFilters);

  const initialValues = {
    location: filters.location || "",
    form: filters.form || "",
    features: filters.features || [],
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location is required."),
    form: Yup.string().required("Please select a vehicle type."),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      setFilter({
        ...filters,
        [e.target.name]: e.target.value,
      })
    ); // Передача об'єкта, який містить всі фільтри
    console.log("Searching for campers with filters:", values);

    // Очищаємо форму
    resetForm();
  };

  return (
    <div className={css.filterWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false} // Валідація лише при відправці форми
        validateOnBlur={true} // Перевірка на помилки при втраті фокусу
      >
        {({ errors }) => (
          <Form>
            {/* Location Field */}
            <div className={css.inputWrapper}>
              <label className={css.filterTitle} htmlFor="location">
                Location
              </label>
              <Field
                className={css.inputLocation}
                name="location"
                type="text"
                placeholder="City"
              />
              <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#map`} />
              </svg>

              {errors.location && (
                <div className={css.errorMessage}>{errors.location}</div>
              )}
            </div>

            {/* Filters Section */}
            <p className={css.filterTitle}>Filters</p>
            <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
            <div
              role="group"
              aria-labelledby="features-group"
              className={css.groupWrapper}
            >
              {/* AC Checkbox */}
              <label>
                <Field type="checkbox" name="features" value="AC" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#wind`} />
                  </svg>
                  AC
                </p>
              </label>

              {/* Automatic Checkbox */}
              <label>
                <Field type="checkbox" name="features" value="automatic" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#diagram`} />
                  </svg>
                  Automatic
                </p>
              </label>

              {/* Kitchen Checkbox */}
              <label>
                <Field type="checkbox" name="features" value="kitchen" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#cup-hot`} />
                  </svg>
                  Kitchen
                </p>
              </label>

              {/* TV Checkbox */}
              <label>
                <Field type="checkbox" name="features" value="TV" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#tv`} />
                  </svg>
                  TV
                </p>
              </label>

              {/* Bathroom Checkbox */}
              <label>
                <Field type="checkbox" name="features" value="bathroom" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#ph_shower`} />
                  </svg>
                  Bathroom
                </p>
              </label>
            </div>

            <h3 className={css.equipmentTitle}>Vehicle type</h3>
            <div
              role="group"
              aria-labelledby="form-group"
              className={css.groupWrapper}
            >
              {/* Panel Truck Radio Button */}
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#grid-1x2`} />
                  </svg>
                  Van
                </p>
              </label>

              {/* Fully Integrated Radio Button */}
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#grid`} />
                  </svg>
                  Fully Integrated
                </p>
              </label>

              {/* Alcove Radio Button */}
              <label>
                <Field type="radio" name="form" value="alcove" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#grid-3x3`} />
                  </svg>
                  Alcove
                </p>
              </label>
            </div>
            {errors.form && <div className={css.error}>{errors.form}</div>}

            <button className={css.searchButton} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
