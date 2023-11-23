import React from 'react';

import "./products.css";
import Card from '../components/Card';
// import {data} from '../db/data';

const Products = ({result}) => {
  return (
   <>
   <section className="card-container">
    {result
    }

   </section>
   </>
  )
}

export default Products
