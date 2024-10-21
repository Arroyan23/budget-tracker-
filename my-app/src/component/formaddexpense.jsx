import "../../public/style/app.css";
import { useEffect, useState } from "react";

function FormAdd(props) {
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [expenses, setExpenses] = useState([]);

  const handleTitleChange = (e) => setTitleInput(e.target.value);
  const handlePriceChange = (e) => setPriceInput(e.target.value);
  const handleDateChange = (e) => setDateInput(e.target.value);

  const addToLocalStorage = (value) => {
    const existingStorage =
      JSON.parse(localStorage.getItem("Pengeluaran")) || [];
    existingStorage.push(value);
    localStorage.setItem("Pengeluaran", JSON.stringify(existingStorage));
  };

  const addExpenses = (event) => {
    event.preventDefault();
    if (titleInput && dateInput && priceInput.trim()) {
      const newExpenses = {
        title: titleInput,
        price: priceInput,
        date: dateInput,
      };
      addToLocalStorage(newExpenses);

      // Update state dengan expenses terbaru
      const existingStorage =
        JSON.parse(localStorage.getItem("Pengeluaran")) || [];
      existingStorage.push(newExpenses);
      setExpenses(existingStorage); // Perbarui state dengan data terbaru
      props.sendDataExpenses(existingStorage); // Kirim data terbaru ke parent

      // Reset input fields
      setTitleInput("");
      setPriceInput("");
      setDateInput("");
    } else {
      alert("Pastikan semua input terisi dengan benar");
    }
  };

  // useEffect(() => {
  //   const storedExpenses =
  //     JSON.parse(localStorage.getItem("Pengeluaran")) || [];
  //   setExpenses(storedExpenses);
  // }, []);
  // ini harus di taruh di homepage sehingga tidak ada data yang hanya muncul pdasaat di klik

  return (
    <>
      <div className="col-11 new-expense__controls mt-5 mb-3 px-4 py-4 mx-auto">
        <form>
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={handleTitleChange}
                value={titleInput} // Tambahkan value agar input terikat
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <label htmlFor="amount">Amount</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  className="form-control"
                  id="amount"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  onChange={handlePriceChange}
                  value={priceInput} // Tambahkan value agar input terikat
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date" // Ganti dari "amount" ke "date"
                onChange={handleDateChange}
                value={dateInput} // Tambahkan value agar input terikat
              />
            </div>
          </div>
        </form>
        <div className="col-11 new-expense__actions px-4 py-3 mx-auto d-flex justify-content-end">
          <div>
            <button type="button" className="expense-controls__btn btn">
              Cancel
            </button>
            <button
              type="submit"
              className="expense-controls__btn btn"
              onClick={addExpenses}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAdd;
