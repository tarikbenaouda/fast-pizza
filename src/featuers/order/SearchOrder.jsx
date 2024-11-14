import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handeSubmit(e) {
    e.preventDefault();
    if (!query) return;
    // Navigate to the order page
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handeSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
