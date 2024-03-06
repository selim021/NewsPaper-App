import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './components/Signup.jsx'
import News from './components/News.jsx'
import AddNews from './components/AddNews.jsx';
import UpdateNews from './components/UpdateNews.jsx'
import axios from 'axios'
import Login from './components/Login.jsx'

function App() {
  const [user, setUser] = useState(null)
  const [view, setView] = useState('login')
  const [data, setData] = useState([])

  const login = async (userId) => {
    if (userId !== undefined) {
setUser(userId)
      console.log(userId)
      setView('news')
      getAllNews()
    }
  }

  const signup = async () => {
    setView('login')
  }

  const getAllNews = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/news');
      setData(result.data.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  const createNews = async (title, image, description) => {
    try {
      const res = await axios.post('http://localhost:3000/api/news', {
        title,
        image,
        description,
        user_iduser: user,
      });
      setView("news")
      getAllNews()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNews = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/news/${id}`);
      getAllNews()
    } catch (error) {
      console.log(error)
    }
  }

  const createAccount = () => {
    setView('signup')
  }


  
  return (
    <div>
      {view === 'login' && <Login onLogin={login} createAccount={createAccount} />}
      
      {view === 'signup' && <Signup signup={signup} />}
      {view === 'news' && (
        <div>
          <News data={data} deleteNews={deleteNews} getAllNews={getAllNews}  setView={setView} view={view}/>
          <button onClick={() => setView("addnews")}>Add News</button>
        </div>
      )}
      {view === 'addnews' && <AddNews createNews={createNews} />}
      {view === 'updateNews' && <UpdateNews news={selectedNews} onUpdate={handleUpdateNews} />}
    </div>
  );
};

export default App;
