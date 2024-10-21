// halaman untuk mengatur homepage
import "../../public/style/app.css";
import FormAdd from "../component/formaddexpense";
import { useState } from "react";
import ExpenseTrack from "../component/showexpense";

function HomePage() {
  // untuk menangani muncul form tambah

  const [showForm, setShowForm] = useState(false);

  const handleClickAdd = () => {
    setShowForm(!showForm);
  };
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
            {showForm && <FormAdd />}
          </div>
        </div>
        <ExpenseTrack />
      </div>
    </>
  );
}

export default HomePage;
