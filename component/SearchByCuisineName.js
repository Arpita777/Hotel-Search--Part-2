import React from 'react'
import Details from './Details'
import Restuarent from './Restuarent'

class SearchByCuisineName extends React.Component{

  handleChangeRestaurant(e){
    var currentList = [];
	  var newList = [];
    currentList = this.props.list;
    newList = currentList.filter(item => item.Cuisines.toLowerCase().includes(e.target.value.toLowerCase()));

    this.props.setCuisineList(newList);
  }
  render(){
    return(
      <div className="searchbar">
    		 
          <input type="text" className="input" onChange={(e)=>this.handleChangeRestaurant(e)} placeholder="Search by cuisine Name..." />
          
          {this.props.cuisinelist.map(item => 
             <Restuarent key={item.RestuarentID} item={item}/>)}

        
       </div>
    )
  }
}
export default SearchByCuisineName
