import React from 'react'

const AddBook = ({ book, handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 text-primary fw-bold">
                📘 Add New Book
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Book Title</label>
                  <input
                    type="text"
                    name="title"
                    value={book.title || ''}
                    onChange={handleChange}
                    className="form-control rounded-3"
                    placeholder="Enter book title"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Author Name</label>
                  <input
                    type="text"
                    name="author"
                    value={book.author || ''}
                    onChange={handleChange}
                    className="form-control rounded-3"
                    placeholder="Enter author name"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={book.price || ''}
                    onChange={handleChange}
                    className="form-control rounded-3"
                    placeholder="Enter price"
                  />
                </div>

                <button className="btn btn-primary w-100 rounded-pill fw-semibold">
                  {book.id ? 'Update Book' : 'Add Book'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
