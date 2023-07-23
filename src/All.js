import React from 'react';
import Navbar from "./header/navbar";
import Navbar1 from "./header1/header1";
import Title from "./title/title";
import Cateogries from "./cateogries/cateogrie";
import Collections from './collections/collection';
import Products from './trendingProducts/products';
import OurCollections from "./ourCollections/ourCollection";
import Arrival from "./newArrivals/arival";
import NewArrivals from "./newArrival2/newArrival";
import Brands from "./byBrand/brands";
import Blogs from "./blogs/blog";
import Footers from './footer/footer';



function All() {
  return (

    <div className="App">
      <Navbar />
      <Navbar1 />
      <Title />
      <Cateogries />
      <Collections />
      <Products />
      <OurCollections />
      <Arrival />
      <NewArrivals />
      <Brands />
      <Blogs />
      <Footers />
    </div>
  );
}

export default All;