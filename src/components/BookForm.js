import React, { useState } from "react";
import useBookStore from "../bookStore";

function BookForm() {
  const addBook = useBookStore((state) => state.addBook);
  const [bookDetails, setBookDetails] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleAddBook = () => {
    if (!Object.keys(bookDetails).length)
      return alert("Please enter book details!");
    addBook(bookDetails);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">Add a Book</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="id">Book ID</label>
                  <input
                    type="number"
                    id="id"
                    name="id"
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="name">Book Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddBook}
                  className="btn btn-primary btn-block"
                >
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
