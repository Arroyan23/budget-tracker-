// untuk menampilkan local storage di dalam halaman]

import { useEffect, useState } from "react";

function ShowLocal({ getData }) {
  //   const [skandal, savedSkandal] = useState([]);
  //   useEffect(() => {
  //     const savedData = JSON.parse(localStorage.getItem("Skandal"));
  //     savedSkandal(savedData);
  //   }, []);
  return (
    <>
      <h2>Local Storage Reveal</h2>
      {getData.map((element, index) => {
        return (
          <>
            <p>{element.nama}</p>
          </>
        );
      })}
    </>
  );
}

export default ShowLocal;
