import { useEffect, useState } from 'react';
import './App.css';
import Articles from './components/Articles';
import Author from './components/Author';
import AuthorsBook from './components/AuthorsBook';
import Copy from './components/Copy/Copy';
import Customers from './components/Customers';
import Header from './components/Header';
import Info from './components/Info';
import Learn from './components/Learn';
import { getArticles, getBooks, getPartners, getSkills } from './requests';

function App() {
  const [book, setBook] = useState([]);
  const [partner, setPartner] = useState([]);
  const [skills, setSkills] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getBooks(setBook);
  }, []);

  useEffect(() => {
    getPartners(setPartner);
  }, []);

  useEffect(() => {
    getSkills(setSkills);
  }, []);

  useEffect(() => {
    getArticles(setArticles);
  }, []);

  return (
    <div className="root">
      <Header />
      <AuthorsBook books={book} />
      <Author />
      <Customers customers={partner} />
      <Copy />
      <Learn skills={skills} />
      <Articles articles={articles} />
      <Info />
    </div>
  );
}

export default App;

