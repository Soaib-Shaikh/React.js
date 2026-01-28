import React from 'react'

const ViewBook = ({ list, deleteBook, handelEdit }) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-11">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body">
              <h3 className="text-center mb-4 text-success fw-bold">
                📚 Books Collection
              </h3>

              <div className="table-responsive">
                <table className="table align-middle table-hover text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>Sr.No</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list?.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-muted">
                          No books found
                        </td>
                      </tr>
                    )}

                    {list?.map((val, index) => {
                      const { title, author, price, id } = val
                      return (
                        <tr key={id}>
                          <td>{index + 1}</td>
                          <td className="fw-semibold">{title}</td>
                          <td>{author}</td>
                          <td>₹ {price}</td>
                          <td>
                            <button
                              onClick={() => handelEdit(id)}
                              className="btn btn-sm btn-outline-warning me-2"
                            >
                              ✏ Edit
                            </button>
                            <button
                              onClick={() => deleteBook(id)}
                              className="btn btn-sm btn-outline-danger"
                            >
                              🗑 Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBook
