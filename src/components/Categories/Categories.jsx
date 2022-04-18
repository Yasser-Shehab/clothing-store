import "./style/Categories.style.css";
import data from "./Categories-Data";
function Categories() {
  return (
    <div className="Categories-container">
      {data.map((category) => {
        return (
          <div className={category.id <= 2 ? "category-gender" : "category-item"}>
            <img className="category__image" src={category.image} alt={category.title} />
            <div className="category__title">
              <h1>{category.title}</h1>
              <p>{category.id <= 2 ? "BROWSE NOW" : "SHOP NOW"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
