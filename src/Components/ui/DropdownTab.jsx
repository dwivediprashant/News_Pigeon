import "./dropdownTab.css";
import Dropdown from "./Dropdown";
export default function DropdownTab({
  category,
  country,
  language,
  handleCategoryChange,
  handleCountryChange,
  handleLanguageChange,
}) {
  return (
    <div className="dropdownTab ">
      {/* //country dropdown */}
      <span className="me-1">Country</span>
      <Dropdown
        title={`${country}`}
        options={["us", "in"]}
        func={handleCountryChange}
      />
      {/* //category dropdown */}
      <span className="me-1">Category</span>
      <Dropdown
        title={`${category}`}
        options={[
          "business",
          "entertainment",
          "general",
          "health",
          "science",
          "sports",
          "technology",
        ]}
        func={handleCategoryChange}
      />
      {/* //languuage dropdown */}
      <span className="me-1">Language</span>
      <Dropdown
        title={`${language}`}
        options={["ar", "de", "en", "es", "fr"]}
        func={handleLanguageChange}
      />
    </div>
  );
}
