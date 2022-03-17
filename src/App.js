import { useState } from 'react';
import AddEditbook from './components/AddEditBook';
import BookList from './components/BookList';

function App() {//is id ki zarurat nhi hai..
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
    <div className='container'>
      <AddEditbook id={bookId} data={myItem} resetBookItem={resetBookItemAfterEdit} setFlagFun={setFlag}/>
      <BookList myflag={flag} setFlagFun={setFlag} setBookItemForEdit={setBookItemForEdit} />
    </div>
  );
}

export default App;
