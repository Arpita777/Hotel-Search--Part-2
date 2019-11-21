import React, { Component } from 'react';
import './App.css';
import Restuarent from './component/Restuarent'
import Header from './component/Header'
import Details from './component/Details'
import RestaurantList from './component/RestaurantList'
import SearchByRestaurantName from './component/SearchByRestaurantName'
import SearchByCuisineName from './component/SearchByCuisineName'

class App extends Component {
  state={
     list:RestaurantList.filter(item => item.RestaurantName!=''),
     restaurantList:[],
     cuisinelist:[]
   }

  setRestaurantList(newList){
    this.setState({
      restaurantList:newList
    })
  }

  setCuisineList(newList){
    this.setState({
      cuisinelist:newList
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
          
           <SearchByRestaurantName list={this.state.list}
                                setRestaurantList={(e)=>this.setRestaurantList(e)}
                                restaurantList={this.state.restaurantList}/>
         <SearchByCuisineName list={this.state.list}
                                setCuisineList={(e)=>this.setCuisineList(e)}
                                cuisinelist={this.state.cuisinelist}
                               />
      </div>
    );
  }
}

export default App;
