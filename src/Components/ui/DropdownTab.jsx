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
    <div className="dropdownTab">
      {/* //country dropdown */}
      <Dropdown
        title={`${country}`}
        options={["us", "in"]}
        func={handleCountryChange}
      />
      {/* //category dropdown */}
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
      <Dropdown
        title={`${language}`}
        options={["ar", "de", "en", "es", "fr"]}
        func={handleLanguageChange}
      />
    </div>
  );
}
