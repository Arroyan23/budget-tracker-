// halaman untuk mengatur homepage
import AddForm from "../components/addform";
import ShowLocal from "../components/showlocal";
import { useState, useEffect } from "react";

function HomePage() {
  // pada intinya jangan taruh use effect pada add form nya
  const [overall, setOverall] = useState([]);
  useEffect(() => {
    const savedSkandal = JSON.parse(localStorage.getItem("Skandal"));
    if (savedSkandal) {
      setOverall(savedSkandal);
    }
  }, []);

  const handleValue = (value) => {
    // ambil overall sebelumnya dan tambahkan ke dalam value yang di dapat
    // dari inputan
    const updateSkandal = [...overall, value];
    // masukkan datanya ke dalam local storage
    localStorage.setItem("Skandal", JSON.stringify(updateSkandal));
    // set overall agar overall mengetahui update tentang data di local storagenya
    setOverall(updateSkandal);
  };
  return (
    <>
      <h1>Hello World</h1>
      <AddForm sendData={handleValue} />
      <ShowLocal getData={overall} />
    </>
  );
}

export default HomePage;
