import './App.css';
import Home from './components/home/Index';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CategoryList from './components/category-list/CategoryList';
import Header from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import StaticPages from './components/static-page/StaticPage';


function App() {
  return (
    <div className='bg bg-secondary'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path=":categoryId" element={<CategoryList/>}/>
          <Route path="page/" element={<Outlet />} >
            <Route path=":pageId" element={<StaticPages />} />
          </Route>
        </Routes>
        <Footer />
      
    </div>


  );
}

export default App;
