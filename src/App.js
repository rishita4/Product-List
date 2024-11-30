
import {useRef, useState} from 'react';
import './App.css';
import FilterBox from './comps/FilterBox/FilterBox';
import Navbar from './comps/Navbar/Navbar';
import ProductBox from './comps/ProductBox/ProductBox';
import data from "./js/data.json"

function App() {
  const [list, setlist] = useState(data)
  const sortRef = useRef(null);

  function filterList(filterVal){
    const selectElement = document.getElementById("filter");
    const option = Array.from(selectElement.options).find(opt => opt.value === filterVal);
    if(option.textContent === "All"){
      setlist(data)
      sortList(data)
      return;
    }

    const filteredList = data.filter((element)=>{
      if(element.category === option.textContent)
        return element
    })
    setlist(filteredList)
    sortList(filteredList)
  }


  //Takes input of sorting option and sort the list according to the requirement
  function sortList(data){
    const sortVal = sortRef.current.value
    if(sortVal === '1'){
      setlist([...data].sort((a,b)=> parseInt(b.price)-parseInt(a.price)))
    } else if(sortVal === '2'){
      setlist([...data].sort((a,b)=>parseInt(a.price)-parseInt(b.price)))
    } else if(sortVal === '-1'){
      setlist([...data].sort((a,b)=>a.name.localeCompare(b.name)))
    }
    console.log(data);
  }

  return (
    <div className="app">
      <Navbar></Navbar>
      <FilterBox filterList = {filterList} sortList = {sortList} sortRef = {sortRef} list = {list}></FilterBox>
      <ProductBox list = {list}></ProductBox>
    </div>
  );
}

export default App;
