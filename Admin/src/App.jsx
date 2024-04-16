import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin';
import AddProduct from './Components/AddProduct/AddProduct';
import ListProduct from './Components/ListProduct/ListProduct';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
      <AddProduct/>
      <ListProduct/>
    </div>
  );
};

export default App;
