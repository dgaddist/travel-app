export default function Header() {
  return (
    <div>
      <div className="Search-slogan">Where to ?</div>
      <div className="Search-bar">
        <form id="form">
          <label>
            <input type="text" size="50" />
          </label>
          <button className="submit-button" type="submit">
            Search
          </button>
        </form>
        <p id="log"></p>
      </div>
    </div>
  );
}
