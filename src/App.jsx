import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
//Database
import products from "./db/data";
import Card from "./components/Card";

import "./index.css";


function App() {
 

  const [selectedCategory, setSelectedCategory] = useState(null);

  //-----------input Filter---------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filterItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase() )!== -1);

  //------------------radio filter ----------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  //--------------- buttons filter ------------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    //Filtering input items
    if (query) {
      filteredProducts = filterItems;
    }
    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected ||
      company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice})=> (
      <Card key={Math.random()}
      img ={img}
      title = {title}
      star= {star}
      reviews ={reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ));
  }

 const result =  filteredData(products,selectedCategory, query);

  return (
    <>
    <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
       
    </>
  )
}

export default App
