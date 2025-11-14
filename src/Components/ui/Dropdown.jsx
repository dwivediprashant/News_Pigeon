export default function Dropdown({ title, options, func }) {
  return (
    <div class="dropdown">
      <button
        class="btn btn-sm me-3 btn-light dropdown-toggle my-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul class="dropdown-menu">
        {options.map((ele, idx) => {
          return (
            <li className="dropdown-item" key={idx} onClick={() => func(ele)}>
              <span>{ele}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
