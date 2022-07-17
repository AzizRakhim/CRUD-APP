import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from './components/Books/Books';
import Control from './components/Control/Control';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Private from './private/Private';
import axios from "axios";
import books from './api/API';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([]);

  // Using Fetch to get data

  /*
  useEffect(() => {
    const getData = async() => {
      fetch('http://localhost:5000/bookList')
        .then(data => data.json())
        .then(result => setData(result))
        .catch(error => {
          return console.log(error);
        })
    }

    getData();
  }, []);
  */

  // Using Axios to get data
  
  /*
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get("http://localhost:5000/bookList");
      setData(response.data);
    }

    getData();
  }, [])
  */

  // Using db.json file to get data

  useEffect(() => {
    books.getBooks().then(res => setData(res.data));
  }, []);

  const objPost = {
    id: uuidv4(),
    name: "Hercules: The Animated Series",
    author: "Walt Disney Television Animation",
    price: 2222 
  }

  const sendData = () => {
    books.sendBooks(objPost);
  }

  const objDelete = 1;

  const deleteData = () => {
    books.deleteBooks(objDelete);
  }


  const objPut = {
    id: 2,
    obj: {
      id: uuidv4(),
      name: "Chip 'n Dale's Rescue Rangers",
      author: "Walt Disney Television Animation",
      price: 3333 
    }
  };

  const updateData = () => {
    books.updateBooks(objPut.id, objPut.obj);
  }


  console.log(data);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Private />}>
              <Route path='/' element={<Home />} />
              <Route path='/books' element={<Books />} />
              <Route path='/control' element={<Control />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
          <div className='d-flex justify-content-around unstyled m-3 w-50 mx-auto'>
          <button className="btn btn-success w-100" onClick={() => sendData()}>
            send
          </button>
          <button className="btn btn-danger ms-3 me-3 w-100" onClick={() => deleteData()}>
            delete
          </button>
          <button className="btn btn-primary w-100" onClick={() => updateData()}>
            update
          </button>
        </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
