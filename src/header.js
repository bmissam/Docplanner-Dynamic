import React from 'react'
import "./header.css"
class Header extends React.Component {
    render() {
        return <div className="principal" >
            <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' className="logos" />
            {this.props.menu.map((el) => {
                return (
                    <div className="mainn">
                        <a href={el.about.url}>
                        <span id="about">{el.about.name}</span>
                        </a>
                        <a href={el.career.url}>
                        <span id="career">{el.career.name}</span>
                        </a>
                       
                        <li className="menu-item " >{el.departemnts.parent}
                        <ul className="drop-menu">
                         
                        { el.departemnts.child.map(x=>{return(<a className="men" href={x.url}><li>{x.title}</li></a>)})}
                        
                        
                         </ul></li>

                    </div>
                      
                 )
                }
                   )}
        </div>

    }
}
export default Header 