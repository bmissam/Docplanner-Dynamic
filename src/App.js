import React from 'react';
import ReactDOM from "react-dom";
import Section from "./Section1";
import Card from './card.js';
import Linker from './Section2.js';
import Healthcare from './section3.js'
import Countries from './Section4'
import Footer from "./footer";
import Header from './header';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({

      links: [
        {
          name: "ZnanyLekarz",
          lien: "https://www.znanylekarz.pl/?_ga=2.216122846.954415677.1565772081-1778842321.1565772081"
        },
        {
          name: "Doctoralia",
          lien: "https://www.doctoralia.es/"
        },
        {
          name: "MioDottore",
          lien: "https://www.miodottore.it/?_ga=2.246345164.954415677.1565772081-1778842321.1565772081"
        },
        {
          name: "DoktorTakvimi",
          lien: "https://www.doktortakvimi.com/?_ga=2.246345164.954415677.1565772081-1778842321.1565772081"
        },
        {
          name: "ZnamyLekar",
          lien: "https://www.znamylekar.cz/"
        },
      ],
      sante: [{
        logo: "https://www.docplanner.com/img/flag.png",
        titre: "Leader in 10 countries",
        contenu: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
      },
      {
        logo: "https://www.docplanner.com/img/visits.png",
        titre: "1.5 million appointments",
        contenu: "booked last month"
      },
      {
        logo: "https://www.docplanner.com/img/patients.png",
        titre: "30 million unique patients",
        contenu: "visit us every month"
      },
      {
        logo: "https://www.docplanner.com/img/doctors.png",
        titre: "2 million active doctors",
        contenu: "trust in our solutions"
      },
      ],
      nav: [{
        apercu: "https://www.docplanner.com/images/warsaw.png",
        nom: "warsaw",
        button: "See openings"
      },
      {
        apercu: "https://www.docplanner.com/images/barcelona.png",
        nom: "Barcelona",
        to: "https://www.docplanner.com/career?&loc=spain#jobs-offers",
        button: "See openings"
      },
      {
        apercu: "https://www.docplanner.com/images/istanbul.png",
        nom: "Istanbul",
        button: "See openings",
        to: "https://www.docplanner.com/career?&loc=rome#jobs-offers"
      },
      {
        apercu: "https://www.docplanner.com/images/rome.png",
        nom: "Rome",
        button: "See openings",
        to: "https://www.docplanner.com/career?&loc=italy#jobs-offers"
      },
      {
        apercu: "https://www.docplanner.com/images/mexico-city.png",
        nom: "Mexico city",
        button: "See openings",
        to: "https://www.docplanner.com/career?&loc=mexico#jobs-offers"
      },
      {
        apercu: "https://www.docplanner.com/images/curitiba.png",
        nom: "Curitiba",
        button: "See openings",
        to: "https://www.docplanner.com/career?&loc=brazil#jobs-offers"
      },
      ],
      main: [{
        about: {name : "About", url : "https://www.docplanner.com/about-us"},
        career:{name : "Career", url :"https://www.docplanner.com/career"} ,
        departemnts: { parent: "Departements", child: [{ title: "Marketing& PR", url: "https://www.docplanner.com/department?dep=marketing" },{title:"Customer Success& Sales" ,url :"https://www.docplanner.com/department?dep=customer"},
       { title: "IT Products", url: "https://www.docplanner.com/department?dep=it" },{title: "Finance", url: "https://www.docplanner.com/department?dep=finance" } , 
       { title: "HR", url: "https://www.docplanner.com/department?dep=hr" } ]}

      }]

    })

  }
  render() {

    return (
      <div className="App">
        <Header menu={this.state.main} />

        <div className="start">
          <img src='https://www.docplanner.com/img/sygnet.png' className="logo"></img>
          <h1>Making the healthcare experience more human</h1>
        </div>
        <Section />
        <Card />
        <Linker link={this.state.links} />
        <Healthcare care={this.state.sante} />
        <Countries pays={this.state.nav} />
        <Footer />

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;
