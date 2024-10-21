// halaman component add form
import "../../public/style/app.css";
import { useEffect, useState } from "react";

function FormAdd() {
  // buat function untuk khusus local storage
  //   Handle input onChange
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // untuk handle display storenya
  const [expenses, setExpenses] = useState([]);

  // Handle Button Display
  const handleTitleChange = (e) => setTitleInput(e.target.value);
  const handlePriceChange = (e) => setPriceInput(e.target.value);
  const handleDateChange = (e) => setDateInput(e.target.value);

  const addToLocalStorage = (value) => {
    // untuk mengecek status dari local storage
    const existingStorage =
      JSON.parse(localStorage.getItem("Pengeluaran")) || [];
    // tambahkan data baru ke array lama
    existingStorage.push(value);

    localStorage.setItem("Pengeluaran", JSON.stringify(existingStorage));
  };

  const addExpenses = (event) => {
    event.preventDefault();
    if (titleInput && dateInput && priceInput.trim()) {
      // untuk menangani input ke dalam storage
      // buat object untuk dimasukkan ke dalam local storage browser
      const newExpenses = {
        title: titleInput,
        price: priceInput,
        date: dateInput,
      };
      // simpan ke local storage
      addToLocalStorage(newExpenses);
    } else {
      alert("Pastikan semua input terisi dengan benar");
    }
  };

  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("Pengeluaran")) || [];

    setExpenses(storedExpenses);
  }, []);

  return (
    <>
      <div className="col-11 new-expense__controls mt-5 mb-3 px-4 py-4 mx-auto">
        <form action="">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={handleTitleChange}
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <label for="amount">Amount</label>
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
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <label for="date">Date</label>
              <input
                type="date"
                min="0.01"
                step="0.01"
                className="form-control"
                id="amount"
                onChange={handleDateChange}
              />
            </div>
          </div>
        </form>
        <div class="col-11 new-expense__actions px-4 py-3 mx-auto d-flex justify-content-end">
          <div>
            <button type="button" class="expense-controls__btn btn">
              Cancel
            </button>
            <button
              type="submit"
              class="expense-controls__btn btn"
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
