import React from 'react'
import Restuarent from './Restuarent'
class SearchByRestaurantName extends React.Component{
  handleChange(e){
    var currentList = [];
	  var newList = [];
    currentList = this.props.list;
    newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.RestaurantName.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return (lc==filter);
      });
    this.props.setRestaurantList(newList);
    
  }
 
   
  render(){
     
    return(
       <div className="searchbar">
    		 
          <input type="text" className="input" onChange={(e)=>this.handleChange(e)} placeholder="Search by restaurent Name..." />
          
          {this.props.restaurantList.map(item => 
             <Restuarent key={item.RestuarentID} item={item} />)}

        
       </div>
    )
  }
  
}
export default SearchByRestaurantName
