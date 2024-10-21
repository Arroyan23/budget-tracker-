// untuk menampilkan pengeluaran datanya

function ExpenseTrack(props) {
  return (
    <>
      {/* {props.receiveData.map((element, index) => {
        return (
          <>
            <p>Judul : {element.title}</p>
          </>
        );
      })} */}
      <div className="expense-list mt-5">
        {props.receiveData.map((element, index) => {
          return (
            <>
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
                  <h2 className="expense-title">{element.title}</h2>
                  <span className="expense-date">{element.date}</span>
                </div>
                <div className="col-3 col-sm-2 col-md-2 d-flex align-items-center justify-content-center">
                  <span className="expense-amount">${element.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ExpenseTrack;
