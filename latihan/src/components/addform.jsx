// halaman untuk form add nya
import { useEffect, useState } from "react";

function AddForm({ sendData }) {
  const [nama, setNama] = useState("");
  const [skandal, setSkandal] = useState("");
  const [bulan, setBulan] = useState("");

  //   untuk set skandal
  const [overall, setOverall] = useState([]);

  //   gunakan json Parse agar bisa membaca hasil dari json
  //   useEffect(() => {
  //     const savedSkandal = JSON.parse(localStorage.getItem("Skandal"));
  //     if (savedSkandal) {
  //       setOverall(savedSkandal);
  //     }
  //   }, []);

  const handleAddToLocalStorage = (event) => {
    event.preventDefault();

    const newData = {
      nama,
      skandal,
      bulan,
    };

    // const updateSkandal = [...overall, newData];

    // // masukkan datanya ke dalam local storage

    // localStorage.setItem("Skandal", JSON.stringify(updateSkandal));
    // // set overall agar overall mengetahui update tentang data di local storagenya
    // setOverall(updateSkandal);
    sendData(newData);
  };

  return (
    <>
      <div className="input">
        <label htmlFor="">Masukkan Nama Favian : </label>
        <input type="text" onChange={(e) => setNama(e.target.value)} />
        <br />
        <label htmlFor="">Masukkan Skandal Favian : </label>
        <input type="text" onChange={(e) => setSkandal(e.target.value)} />
        <br />
        <label htmlFor="">Masukkan Bulan Skandal Favian : </label>
        <input type="text" onChange={(e) => setBulan(e.target.value)} />
        <br />
        <button type="submit" onClick={handleAddToLocalStorage}>
          Submit Favian
        </button>
      </div>
    </>
  );
}

export default AddForm;
