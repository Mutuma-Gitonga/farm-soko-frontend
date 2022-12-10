import React, {useEffect, useState} from "react";

function SearchProduce({searchProduce}) {
  
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    const runSearchFunction = setTimeout(() => {
      searchProduce(searchChar);
    }, 1000)

    return () => clearTimeout(runSearchFunction);
  },[searchProduce, searchChar]);

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchChar}
        placeholder="Search Produce"
        onChange={(e) => setSearchChar(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default SearchProduce;