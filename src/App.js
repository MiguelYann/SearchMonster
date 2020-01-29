import React, {Component} from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/Search.component";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            monsters: [],
            searchInput: ''
            
        };
    }
    
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(jsonUsers => this.setState({monsters: jsonUsers}))
    }
    
    handleChange = (e) => this.setState({searchInput: e.target.value})
    
    render () {
        const {monsters, searchInput} = this.state;
        const monsterSelected = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()));
        return (
            <div className="App">
                <Search
                    placeHolder={'enter monster name'}
                    changeHandler={this.handleChange}
                />
                <CardList monsters={monsterSelected}/>
            </div>
        );
    }
}

export default App;
