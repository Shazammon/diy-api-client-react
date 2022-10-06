import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './components/routes/Blogs';
import Details from './components/routes/Details';
import EditBlog from './components/routes/EditBlog';
import NewBlog from './components/routes/NewBlog';
import NavBar from './components/partials/NavBar';
import Home from './components/routes/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/blogs'
            element={<Blogs />}
          />

          <Route 
            path='/blogs/new'
            element={<NewBlog />}
          />
          
          <Route 
            path='/blogs/:id'
            element={<Details />}
          />

          <Route 
            path='/blogs/:id/edit'
            element={<EditBlog />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
