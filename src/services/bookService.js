import { db } from '../FirebaseConfig.js';
import {
    collection,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
    addDoc
} from 'firebase/firestore';

const bookCollectionRef = collection(db, "books");

class BookService {
    addBook = (book) => {
        return addDoc(bookCollectionRef, book);
    };
    updateBook = (id, book) => {
        return updateDoc(doc(db, "books", id), book);
    };
    deleteBook = (id) => {
        return deleteDoc(doc(db, "books", id));
    };
    getAllBooks = () => {
        return getDocs(bookCollectionRef);
    };
    getBookById = (id) => {
        // const bookDoc = doc(db, "books", id);
        return getDoc(doc(db, "books", id));
    };
}

export default new BookService();