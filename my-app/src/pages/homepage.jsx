// halaman untuk mengatur homepage
import "../../public/style/app.css";
import FormAdd from "../component/formaddexpense";
import { useState, useEffect } from "react";
import ExpenseTrack from "../component/showexpense";

function HomePage() {
  // untuk isi state data yang dikirim dari komponen add form

  const [data, setData] = useState([]);
  // untuk menangani muncul form tambah

  const [showForm, setShowForm] = useState(false);

  const handleClickAdd = () => {
    setShowForm(!showForm);
  };

  const handleData = (value) => {
    setData((prevData) => {
      const newData = [...prevData, value];
      localStorage.setItem("Pengeluaran", JSON.stringify(newData)); // Update localStorage
      return newData;
    });
  };

  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("Pengeluaran")) || [];

    setData(storedExpenses);
  }, []);

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  // clear local storage

  // handle lifting dari komponen yang sekarang di tuju

  return (
    <>
      <div className="container wrapper mt-5 py-4 rounded">
        <h1>Hello World</h1>
        <div className="container mb-5">
          <div className="row new-expense">
            <button
              type="button"
              class="expense-controls__btn btn btn-block mb-5"
              onClick={handleClickAdd}
            >
              Add Expense
            </button>
            {showForm && <FormAdd sendDataExpenses={handleData} />}
          </div>
        </div>
        <ExpenseTrack receiveData={data} />
      </div>
    </>
  );
}

export default HomePage;
