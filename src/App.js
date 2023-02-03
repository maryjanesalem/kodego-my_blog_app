import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import Categories from './pages/Categories';
import About from './pages/About';

function App() {
    return (
        <>

            <Header />
                <Routes>
                
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                    <Route path="/about" element={<About />}></Route>

                </Routes>
            <Footer />

        </>
    );
}

export default App;
