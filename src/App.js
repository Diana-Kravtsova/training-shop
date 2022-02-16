/*components*/
import Header from './components/header/Header';
import Footer from "./components/Footer";
import Main from "./pages/main/Main";
import Women from './components/Item/women/Women';
import Men from './components/Item/men/Men';
import Accessories from './pages/Accessories';
import About from './pages/AboutUs';
import Beauty from './pages/Beauty';
import Contact from './pages/Contact';
import Categories from "./components/categories/Categories";


/* router */
import data from './data.json';
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/main/Blog/Blog";


function App() {
    return (
        <div className='app' data-test-id='app'>
            <Header />

            <Routes>
                <Route exact path="/" element={<Main data={data}/>}/>
                <Route exact path="/about%20us" element={<About/>}/>
                <Route exact path="/women" element={<Categories product_type={"women"}/>} />
                <Route exact path="/men" element={<Categories product_type={"men"}/>} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/women/*" element={<Women />} />
                <Route path="/beauty" element={<Beauty/>}/>
                <Route path="/accessories" element={<Accessories/>}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
