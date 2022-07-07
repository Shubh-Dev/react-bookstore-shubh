import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
