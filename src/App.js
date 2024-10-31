import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component.jsx'
import ListCard from './components/card-list/card-list.component.jsx'
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => setMonsters(data));
  },
    [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField)));
  }, [monsters,searchField]);

  const changeSearchBox = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  }



  return (
    <div className="App">
    
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={changeSearchBox}
        placeholder={"search monsters"}
        className={"box"}
      />
      <ListCard
        filteredMonsters={filteredMonsters}
      />
    </div >
  )
}

export default App;
