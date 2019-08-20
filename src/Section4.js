import React, { Component } from 'react';
import './section4.css'


class Countries extends React.Component {
    render() {
        return <div >
            <div className="texte">
    <h1>
    Improve the lives of millions. Change yours forever  
    </h1>
    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
    </div>
         <div className="countries">
             {this.props.pays.map((el)=> {
return (
                
                     <div className="nation" >
                     <a href={el.to}>
                         <img src={el.apercu}/>
                         <div className="where">
                         <span className="name" >{el.nom}</span>
                    
                    <span className="bouton">{el.button}</span>
                         </div>
                   
                     </a>
                     </div>
               
                 )
             }
                )}
         </div>



        </div>
    }
      
}
export default Countries  ; 
