// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./gallery";
import Button from "./button";
// import InputId from "./inputId";

function App() {
  let [artId, setArtId] = useState(12000);
  let [data, setData] = useState({});

  useEffect(() => {
    document.title = `${artId}`;
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  return (
    <div className="App">
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <Button handleIterate={handleIterate} />
    </div>
  );
}

export default App;
