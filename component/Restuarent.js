import React from 'react'
import Details from './Details'


class Restuarent extends React.Component{
  
  render(){
    return(
        <table>
      <tbody>
        <tr>
          <td>
            <h1>{this.props.item.RestaurantName}</h1>
          </td>
          <td>
            {this.props.item.Cuisines}
          </td>
          
        </tr>
      </tbody>
    </table>
    )
  }
}

 
export default Restuarent
