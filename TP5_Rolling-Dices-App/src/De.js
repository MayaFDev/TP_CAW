import React , {Component } from 'react' ; 
import './De.css';


//importation des images.
import one from './/1.png'; 
import two from './/2.png'; 
import three from './/3.png'; 
import four from './/4.png'; 
import five from './/5.png'; 
import six from './/6.png'; 

//un tableau contient les face du Dé . 
const tab_faces = [one , two , three , four , five , six]; 

class De extends Component {
   
    render() {
        
        return (

            <div className="De"> 
                              
                <img className={this.props.lancement ? "animation": ""} src= {tab_faces[this.props.face]} />
               
            </div>

        )

    }
}

export default De ; 