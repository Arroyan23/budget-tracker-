// halaman component add form
import "../../public/style/app.css";
import { useState } from "react";

function FormAdd() {
  // buat function untuk khusus local storage
  //   Handle input onChange
  const [titleInput, setTitleInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  // Handle Button Display

  const addToLocalStorage = (value) => {
    localStorage.setItem("Pengeluaran", JSON.stringify(value));
  };

  const addExpenses = () => {};
  return (
    <>
      <div className="col-11 new-expense__controls mt-5 mb-3 px-4 py-4 mx-auto">
        <form action="">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <label for="title">Title</label>
              <input type="text" className="form-control" id="title" />
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
              />
            </div>
          </div>
        </form>
        <div class="col-11 new-expense__actions px-4 py-3 mx-auto d-flex justify-content-end">
          <div>
            <button type="button" class="expense-controls__btn btn">
              Cancel
            </button>
            <button type="submit" class="expense-controls__btn btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAdd;
