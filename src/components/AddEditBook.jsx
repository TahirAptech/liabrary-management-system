import { useEffect, useState } from 'react';
import bookService from '../services/bookService';
import Loader from './Loader.jsx';

function AddEditbook({ id, data, resetBookItem, setFlagFun }) {

    // console.log(data);
    // let [code, setCode] = useState(data ? data.item.code : '');
    // let [title, setTitle] = useState(data ? data.item.title : '');
    // let [author, setAuthor] = useState(data ? data.item.author : '');
    // let [price, setPrice] = useState(data ? data.item.price : '');
    let [code, setCode] = useState('');
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [price, setPrice] = useState('');
    let [myLoader, setLoader] = useState(false);


    //Tahir: Is if k bajaye useEffect laga dia hai aur working ab proper ho rahi hai.
    // if (data) {
    //     code = data.item.code;
    //     title = data.item.title;
    //     author = data.item.author;
    //     price = data.item.price;
    //    // setItemFun(undefined);
    // }

    useEffect(() => {
        try {
            if (id) {
                setCode(data.code);
                setTitle(data.title);
                setAuthor(data.author);
                setPrice(data.price);
            }
        }
        catch (error) {
            alert(error)
        }
    }, [id]);

    const SubmitBookAsync = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            if (code && title && author && price) {

                let msg = '';
                if (id) {
                    await bookService.updateBook(id, { code, title, author, price });
                    msg = "Record updated successfully."
                }
                else {
                    const aa = await bookService.addBook({ code, title, author, price });
                    msg = "Record added successfully."
                }

                resetBookItem();
                setCode("");
                setTitle("");
                setAuthor("");
                setPrice("");
                alert(msg);

                setFlagFun(`${code + title + author + price}`);
            }
            else {
                alert('Please fill the complete form!');
            }
            setLoader(false);
        }
        catch (error) {
            setLoader(false);
            alert(error);
        }
    };

    return (
        <div className='row my-5'>
            <form className='col-md-12' onSubmit={SubmitBookAsync}>
                <div className='form-group'>
                    <input type="text" value={code} onChange={e => setCode(e.target.value)} className="form-control" aria-describedby="codeHelp" placeholder="Enter code" />
                </div>
                <div className='form-group'>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter book title" />
                </div>
                <div className='form-group'>
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className="form-control" id="author" placeholder="Enter author" />
                </div>
                <div className='form-group'>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="price" placeholder="Enter price" />
                </div>
                {
                    myLoader ? (<Loader />) : (<button className="btn btn-primary">Submit</button>)
                }
            </form>
        </div>
    );
}
export default AddEditbook;

