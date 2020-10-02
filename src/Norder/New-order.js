import React from 'react';
import ReactDOM from 'react-dom';
import stool from '../static/stool.jpeg'
import './New-order.css'
import SourceData from "./SourceData.json";



class Norder extends React.Component{
    state={
      sourcedata:SourceData,
      currentMonth: new Date().getMonth(),
      currentDay: new Date().getDate(),
    

    }  
    renderTile(order){
      return(
      <tr class="bs-tile">
      <td scope="row" ><img class ="product-pic"src={stool}></img></td>
                    <td >{order.itemName}</td>
                    <td>{order.client}</td>
                    <td>{order.instagram}</td>
                    <td>{order.date}</td>
                    <td>{order.por}</td>
                    <td><button className="b-ton">Request Review</button></td>
      </tr>
      )}
    
    OrderTile(){
      if (SourceData){

              return (<>
                <div class="table-responsive-lg">
                <table class="table" id="abc">
                
                <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col"></th>
                <th scope="col">Client</th>
                <th scope="col">Instagram</th>
                <th scope="col">Date</th>
                <th scope="col">Price of Review</th>
                </tr>
              </thead>
                
                <tbody>
                  
                 {SourceData.map(this.renderTile)}
                  
                  </tbody>
                </table>
                
              
                
                </div>
                </>
                )
              
  
            
             
            }
          }


    ShowNOrders(){
      return(
      <>
      
      <div className="ali">
      <h1 className="heading">New Orders</h1>
      <div className="order-base">
      <div className="color">
      
    
    
      
      
      {this.OrderTile()}
      </div>
      </div>
     
      
      </div>
      
      </>
      )
    }
    ShowPOrders(){return(
     
      <>
      
      <div className="ali1">
      <h1 className="heading">Past Orders</h1>
      <div className="order-base">
      <div className="color">
      
    
    
      
      
      {this.OrderTile()}
      </div>
      </div>
     
      
      </div>
      
      </>
      )
    }
    render(){
      return(
        <React.Fragment>
        {this.ShowNOrders()}
        <br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;<br />;
        {this.ShowPOrders()}
        </React.Fragment>
      )
    }
  }
  ReactDOM.render(
    
    <Norder />,
    
    document.getElementById('root')
  )
  export default Norder;