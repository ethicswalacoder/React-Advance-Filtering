import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
//Database
import products from "./db/data";


function App() {
 

  const [selectedCategory, setSelectedCategory] = useState(null);

  //-----------input Filter---------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filterItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase() !== -1));

  //------------------radio filter ----------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
    <>
    <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
       
    </>
  )
}

export default App
