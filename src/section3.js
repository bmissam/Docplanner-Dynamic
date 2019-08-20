import React from 'react'
import './section3.css'
import  star from './star.png' 
class Healthcare extends React.Component {
    render() {
        return (<div className='main'>
            <div class="main-intro">
                <h1>The world's biggest healthcare platform </h1>

                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
        </p>
                <img  src={star} className="star" />
                    </div>
            <div className="division">
                <div className="Country">
                    <img src="https://www.docplanner.com/img/flag.png" alt="Flag" />
                    <h2>Leader in 10 countries</h2>
                    <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>

                </div>
                <div className="Agenda">
                    <img src="https://www.docplanner.com/img/visits.png" alt="Agenda" />
                    <h2>1.5 million appointments</h2>
                    <p>booked last month</p>
                </div>
                <div className="visit">
                    <img src="https://www.docplanner.com/img/patients.png" alt="personne" />
                    <h2> 30 million unique patients </h2>
                    <p>visit us every month</p>
                </div>
                <div className="com">
                    <img src="https://www.docplanner.com/img/doctors.png" alt="00" />
                    <h2>2 million active doctors</h2>
                    <p>trust in our solutions</p>
                </div>
            </div>


        </div>)
    }

}

export default Healthcare; 
