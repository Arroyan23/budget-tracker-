// untuk menampilkan pengeluaran datanya

function ExpenseTrack() {
  return (
    <>
      <div className="expense-list mt-5">
        <div className="row mx-2 expense-item mb-4 py-1">
          <div className="col-sm-3 col-md-2 p-3 d-none d-sm-block">
            <button
              type="button"
              className="expense-category btn px-lg-3 py-3 ml-lg-3"
            >
              Category
            </button>
          </div>
          <div className="col-9 col-sm-7 col-md-8 d-flex justify-content-center flex-column py-2">
            <h2 className="expense-title">RTX 3070</h2>
            <span className="expense-date">16 March 2021</span>
          </div>
          <div className="col-3 col-sm-2 col-md-2 d-flex align-items-center justify-content-center">
            <span className="expense-amount">$900.45</span>
          </div>
        </div>
        <div className="row mx-2 expense-item mb-4 py-1">
          <div className="col-sm-3 col-md-2 p-3 d-none d-sm-block">
            <button
              type="button"
              className="expense-category btn px-lg-3 py-3 ml-lg-3"
            >
              Category
            </button>
          </div>
          <div className="col-9 col-sm-7 col-md-8 d-flex justify-content-center flex-column py-2">
            <h2 className="expense-title">RTX 3070</h2>
            <span className="expense-date">16 March 2021</span>
          </div>
          <div className="col-3 col-sm-2 col-md-2 d-flex align-items-center justify-content-center">
            <span className="expense-amount">$900.45</span>
          </div>
        </div>
        <div className="row mx-2 expense-item mb-4 py-1">
          <div className="col-sm-3 col-md-2 p-3 d-none d-sm-block">
            <button
              type="button"
              className="expense-category btn px-lg-3 py-3 ml-lg-3"
            >
              Category
            </button>
          </div>
          <div className="col-9 col-sm-7 col-md-8 d-flex justify-content-center flex-column py-2">
            <h2 className="expense-title">RTX 3070</h2>
            <span className="expense-date">16 March 2021</span>
          </div>
          <div className="col-3 col-sm-2 col-md-2 d-flex align-items-center justify-content-center">
            <span className="expense-amount">$900.45</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseTrack;
