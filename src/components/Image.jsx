import PropTypes from "prop-types";

// TODO: Append the search terms (separated by commas) to the URL
const BASE_URL = "https://source.unsplash.com/random?";

export default function Image({ searchTerms }) {
  return (
    searchTerms && (
      <img src={`${BASE_URL}${searchTerms}`} alt={`Random ${searchTerms}`} />
    )
  );
}

Image.propTypes = { searchTerms: PropTypes.string.isRequired };
