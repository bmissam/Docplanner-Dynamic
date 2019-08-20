import React, { Component } from 'react';
import './section2.css'


class Linker extends React.Component {
    render() {
        return <div className="linkers">
    <h3>
    We are a global company 
with local culture       
    </h3>
         <div id="liens">
             {this.props.link.map((el)=> {
return (
                 <div >
                     <a href={el.lien}>
                     <span className={el.name}>{el.name}</span>
                     </a>
                 </div>
                 )
             }
                )}
         </div>



        </div>
    }
      
}
export default Linker  ; 
