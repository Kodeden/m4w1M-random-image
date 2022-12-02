import { useState } from "react";

// TODO: Append the search terms (separated by commas) to the URL
const BASE_URL = "https://source.unsplash.com/random?";

function App() {
  const [searchTerms, setSearchTerms] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTerms(event.target.search.value);
  };

  return (
    <>
      <h1 className="my-8 text-center text-3xl font-black">
        Display a Random Image
      </h1>

      <main className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col items-center gap-y-4"
        >
          <label htmlFor="search">
            Search (separate terms with commas - no spaces)
          </label>
          <input
            type="search"
            id="search"
            className="rounded-sm border px-1"
            placeholder="🔍"
          />
          <button
            type="submit"
            className="rounded-full bg-green-500 p-4 text-white"
          >
            Go!
          </button>
        </form>

        {/* Only show this if there is a current search term  */}
        {searchTerms && (
          <img
            src={`${BASE_URL}${searchTerms}`}
            alt={`Random ${searchTerms}`}
          />
        )}
      </main>
    </>
  );
}

export default App;
