import { useState } from 'react';
import AddEditbook from './components/AddEditBook';
import BookList from './components/BookList';
// import NavBar from './components/NavBar';

function App(id) {//is id ki zarurat nhi hai..
debugger
  const [bookId, setBookId] = useState("");
  const [myItem, setItem] = useState({});
  const [flag, setFlag] = useState("");

  let setBookItemForEdit = (e) => {
    setItem(e.item);
    setBookId(e.id);
  }
  
  let resetBookItemAfterEdit = () => {
    setItem({});
    setBookId("");
  }
  return (
    <>
      {/* <NavBar /> */}
      {/* <AddEditbook data={{item : {code:'00001', title:'Kashmir', author:'Yasir', price:'550'}, id:'5486456456456'}} /> */}
      <AddEditbook id={bookId} data={myItem} resetBookItem={resetBookItemAfterEdit} setFlagFun={setFlag}/>
      <br />
      <br />
      <br />
      <BookList myflag={flag} setFlagFun={setFlag} setBookItemForEdit={setBookItemForEdit} />
    </>
  );
}

export default App;
