import { useEffect, useState } from 'react';
import bookService from '../services/bookService';

function BookList({ myflag, setFlagFun, setBookItemForEdit }) {

    let [books, setBooks] = useState([]);//Tahir: for book list.

    useEffect(async () => {
        
        try {
            const bookList = await bookService.getAllBooks();
            let booksObj = [];
            bookList.forEach((doc) => {
                booksObj.push({ id: doc.id, item: doc.data() });
            });
            setBooks(booksObj);
        } catch (error) {
            alert(error);
        }
    }, [myflag]);


    //Delete Book.
    const deleteBook = async (book, index) => {
        if (window.confirm("Are you sure?")) {
            await bookService.deleteBook(book.id);
            setFlagFun(`${book.id + index}`);
        }
    }

    return (
        <div className='row'>
            <table className="col-md-12 my-5 table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            // console.log(book.item);
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.item.code}</td>
                                    <td>{book.item.title}</td>
                                    <td>{book.item.author}</td>
                                    <td>{book.item.price}</td>
                                    <td>
                                        <button className="btn btn-info mr-1" onClick={() => setBookItemForEdit({ item: book.item, id: book.id })}>Edit</button>
                                        <button onClick={() => deleteBook(book, index)} className="btn btn-danger my-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default BookList;

