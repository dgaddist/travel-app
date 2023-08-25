export default function Header() {
  return (
    <div>
      <div className="Search-slogan">Where to ?</div>
      <div className="Search-input">
        <div className="Search-bar">
          <form id="form">
            <label>
              <input type="text" />
            </label>
            <button className="submit-button" type="submit">
              Search
            </button>
          </form>
          <p id="log"></p>
        </div>
      </div>
    </div>
  );
}
