// import { useState } from 'react'
import './App.css'
import { context } from "./context/context";
import ProductsOfPage from './JSX/mainStructure';
import FooterOfApp from './JSX/footer';

function App() {

  return (
    <>
      <context.Provider value={[]}>
        {/* <LayoutOfPage/> */}
        <ProductsOfPage />
        <FooterOfApp />
      </context.Provider>
    </>
  )
}

export default App
