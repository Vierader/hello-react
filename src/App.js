import {useState} from "react"
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library (){
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table>
    {
      myBooks.map(b => (
        <tr className='booktb'>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}


const magazines = [
  { id: 1, title: 'Otaku', theme: 'Anime',
  isAvailable: true },
  { id: 2, title: 'Vogue', theme: 'Fashion', 
  isAvailable: false },
  { id: 3, title: 'Wired', theme: 'Tech', 
  isAvailable: true },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title} ({zine.theme})
    </li>
  );
  return(
    <ul>{listZines}</ul>
  )
}


const book = {
  title: 'One Piece',
  author: 'Eiichiro Oda',
  published: '1997',
  image:'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg',
  width:'264',
  height:'378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
      className="bookCover"
      src={book.image}
      alt={book.title + ' cover'}
      style={{
        width:book.width,
        height: book.height
      }}
      />
    </div>
  )
}

function Magicbuttion() {
  const [count,setCount] = useState(0);
  function doMagic(){
    setCount(count + 1);
  }
  return (
    <div>
       <h3> This is a magic button</h3>
       <button onClick={doMagic}>Magic{count}</button>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ZineRack />
        <Bookshelf />
        <Magicbuttion />
      </header>
    </div>
  );
}

export default App;
