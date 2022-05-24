/*components*/
import Header from './components/header/Header';
import Footer from "./components/Footer";
import Main from "./pages/main/Main";
import Women from './components/Item/women/Women';
import Men from './components/Item/men/Men';
import Categories from "./components/categories/Categories";
/* router */
import data from './data.json';
import {Product} from './product';
import {Routes, Route} from "react-router-dom";
import Blog from "./pages/main/Blog/Blog";
import {useState} from "react";


function App() {
    const [filterWomen, setFilterWomen] = useState(false);
    const [filterMen, setFilterMen] = useState(false);
    const showFilters = (id) => {
        if (id === 'women-btn') {
            setFilterWomen(!filterWomen);
        }
        if (id === 'men-btn') {
            setFilterMen(!filterMen);
        }
    }
    const [clickWomen, setClickWomen] = useState(true);
    const [clickMen, setClickMen] = useState(true);
    const handelClick = (id) => {
        if (id === "women-btn") {
            setClickWomen(!clickWomen);
        }
        if (id === "men-btn") {
            setClickMen(!clickMen);
        }
        showFilters(id);
    }

    return (
        <div className='app'>
            <Header/>

            <Routes>
                <Route exact path="/"
                       element={<Main
                           data={data}
                           Product={Product}
                       />}/>
                <Route exact path="/women"
                       element={<Categories
                           product_type={"women"}
                           filters={data.filters}
                           func={handelClick}
                           click={clickWomen}
                       />}/>
                <Route exact path="/men"
                       element={<Categories
                           product_type={"men"}
                           func={handelClick}
                           click={clickMen}
                       />}/>
                <Route path="/men/*" element={<Men/>}/>
                <Route path="/women/*" element={<Women/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
