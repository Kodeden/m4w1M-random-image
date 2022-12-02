const BASE_URL = "https://source.unsplash.com/1600x900/?";

function App() {
  <>
    <h1 className="my-8 text-center text-3xl font-black">
      Display a Random Image
    </h1>

    <main className="flex flex-col items-center justify-center">
      <form className="mb-8 flex flex-col items-center gap-y-4">
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
      )
    </main>
  </>;
}

export default App;
