import React from "react";
import { Fragment } from "react";
import useBookStore from "../bookStore";

function BookList() {
  const {
    books,
    noOfAvailable,
    noOfIssued,
    issueBook,
    returnBook,
  } = useBookStore((state) => ({
    books: state.books,
    noOfAvailable: state.noOfAvailable,
    noOfIssued: state.noOfIssued,
    issueBook: state.issueBook,
    returnBook: state.returnBook,
  }));

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Book List</h2>
                <div>
                  <span style={{ marginRight: 3 }}>Available: {noOfAvailable}</span>
                  <span style={{ marginLeft: 3 }}>Issued: {noOfIssued}</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              {books?.length ? (
                <ul className="list-group">
                  {books.map((book) => (
                    <Fragment key={book.id}>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <span>
                          <strong>ID:</strong> {book.id} |{" "}
                          <strong>Name:</strong> {book.name} |{" "}
                          <strong>Author:</strong> {book.author}
                        </span>
                        <div className="btn-group">
                          <button
                            onClick={() => issueBook(book.id)}
                            className={`btn btn-success ${
                              book.status === "issued" ? "disabled" : ""
                            }`}
                            disabled={book.status === "issued"}
                          >
                            {" "}
                            Issue{" "}
                          </button>
                          <button
                            onClick={() => returnBook(book.id)}
                            className={`btn btn-warning ${
                              book.status === "available" ? "disabled" : ""
                            }`}
                            disabled={book.status === "available"}
                          >
                            {" "}
                            Return{" "}
                          </button>
                        </div>
                      </li>
                    </Fragment>
                  ))}
                </ul>
              ) : (
                <div className="text-center">
                  <p>No books available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;
