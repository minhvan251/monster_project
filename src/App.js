import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      search:'',
      test:''
    };
    this.filter = this.filter.bind(this)
    // this.handleChage = this.handleChage.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(api => api.json())
    // .then(json => console.log(json[0].name))
    .then(json => this.setState({monsters:json}))
  }
  
  filter = () => {
    const {monsters, search} = this.state;
    return monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
      )
  }
  handleChange = (e) => {
    // console.log(this);
    this.setState({search: e.target.value});  
  }

  render() {
    const filterMonsters = this.filter();
  
    return (
      
      <div className="App">
        <h1>Monster division</h1>
        <SearchBar
          placeholder = 'search here'
          handleChange =  {e => {
            this.handleChange(e);
          }} />
        
    
        

        <CardList monsters ={filterMonsters} >  </CardList>;
        

      </div>
       
    );
  }
}

export default App;


