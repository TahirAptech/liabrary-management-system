import { useState } from 'react';
import AddEditbook from './components/AddEditBook';
import BookList from './components/BookList';
import NavBar from './components/NavBar';

function App() {//is id ki zarurat nhi hai..

  const [bookId, setBookId] = useState("");
  const [myItem, setItem] = useState({});
  const [flag, setFlag] = useState("");

  let BookListEditHandler = (e) => {
    setItem(e.item);
    setBookId(e.id);
  }
  let setItemFun = (e) => {
    setItem({});
    setBookId("");
  }
  return (
    <>
      <NavBar />
      {/* <AddEditbook data={{item : {code:'00001', title:'Kashmir', author:'Yasir', price:'550'}, id:'5486456456456'}} /> */}
      <AddEditbook id={bookId} data={myItem} setItemFunc={setItemFun} setFlagFun={setFlag}/>
      <br />
      <br />
      <br />
      <BookList myflag={flag} setFlagFun={setFlag} bookHandler={BookListEditHandler} />
    </>
  );
}

export default App;
