import '../Css/SharedComponents.css';

function SearchInput({placeHolder }) {
  return (
      <div className="search-container">
          <input type="text" placeholder={placeHolder }></input>
          <i className="fa-solid fa-magnifying-glass"></i>
      </div>
  );
}

export default SearchInput;