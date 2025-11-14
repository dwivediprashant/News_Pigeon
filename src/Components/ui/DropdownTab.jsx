import "./dropdownTab.css";
import Dropdown from "./Dropdown";
export default function DropdownTab({
  category,
  country,
  language,
  setCategory,
  setCountry,
  setLanguage,
}) {
  return (
    <div className="dropdownTab">
      {/* //country dropdown */}
      <Dropdown title={`${country}`} options={["us", "in"]} func={setCountry} />
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
        func={setCategory}
      />
      {/* //languuage dropdown */}
      <Dropdown
        title={`${language}`}
        options={["ar", "de", "en", "es", "fr"]}
        func={setLanguage}
      />
    </div>
  );
}
