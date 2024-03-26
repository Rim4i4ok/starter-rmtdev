export default function SearchForm({ searchText, setSearchText }) {
  return (
    <form
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
