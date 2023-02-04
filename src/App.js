import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import Categories from './pages/Categories';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './pages/layout/MainLayout';
import Contact from './pages/Contact';

function App() {
    return (
        <>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/categories" element={<Categories />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
        </>
    );
}

export default App;
