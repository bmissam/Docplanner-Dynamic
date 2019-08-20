import React, { Component } from 'react';
import './card.css'
class Card extends Component {
 
    render() {
        return (
            <div className="carte" >
                <div className="patient bord">
                    <p>For patients</p>
                    <h3> Find a doctor, book a visit and solve any health-related doubt </h3>
                    

                        <div className="menu">
                            <label for="country-select"></label>
                            <select id="country-select">
                                <option value="">--CHOOSE COUNTRY--</option>
                                <option value="Arg">ARGENTINA </option>
                                <option value="AUS">AUSTRALIA </option>
                                <option value="BRAZIL">BRAZIL</option>
                                <option value="CHILIE">CHILIE</option>
                                <option value="COLOMBIA">COLOMBIA</option>
                                <option value="CZECH">CZECH</option>
                                <option value="FRANCE">FRANCE</option>
                                <option value="ITALY">ITALY</option>
                                <option value="MEXICO">MEXICO</option>
                                <option value="PERU">PERU</option>
                                <option value="POLAND">POLAND</option>
                                <option value="PORTUGAL">PORTUGAL</option>
                                <option value="SPAIN">SPAIN</option>
                                <option value="TURKEY">TURKEY</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>

                        <img className="image" src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="Green"/>
               


                    </div>

                    <div className="doctor bord">
                <p>For doctors</p>
                <h3>Save time managing visits and cut no-shows by half</h3>
              
                    <img className="image-doc" src="https://www.docplanner.com/img/screen-saas@2x.png" alt="blue"/>
               

            </div>



                </div>

              
         ) }
        }
        
export default Card;