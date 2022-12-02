import { useState } from "react";
import Form from "./components/Form";
import Image from "./components/Image";

function App() {
  const [searchTerms, setSearchTerms] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerms(event.target.elements.search.value);
  };

  return (
    <>
      <h1 className="my-8 text-center text-3xl font-black">
        Display a Random Image
      </h1>

      <main className="flex flex-col items-center justify-center">
        <Form handleSubmit={handleSubmit} />
        <Image searchTerms={searchTerms} />
      </main>
    </>
  );
}

export default App;
