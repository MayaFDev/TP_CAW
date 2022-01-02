import React , {Component } from 'react' ; 
import './LanceDe.css';
import De from './De';
import { isDisabled } from '@testing-library/user-event/dist/utils';


class LanceDe extends Component {
    static defaultProps =  {

        // tableau des faces 
        faces : ["0", "1" , "2" , "3" , "4" , "5"]

    }; 
    constructor (props ){

        super(props) ; 
        //état initial 
        this.state = {de_1 : '0' , de_2 : "5" ,lancement : false};
        this.state = {bien : 0 , mauvais : 0 ,resultat : 0 ,  click : 0 , arret : false } ; 
        this.lancer = this.lancer.bind(this) ; 
        this.reset = this.reset.bind(this) ; 



    }
   

    score (){
        if (this.state.de_1 === this.state.de_2 ){
            this.state.bien = this.state.bien + 1 ; 
            this.state.resultat =this.state.resultat + 1 
        }
         if (this.state.de_1 !== this.state.de_2 ){
            this.state.mauvais = this.state.mauvais +1 ; 
            this.state.resultat =this.state.resultat -1
        }
    }  

    reset () {
        this.state.click = 0 ; 
        this.state.bien = 0 ; 
        this.state.mauvais = 0 ;
        this.state.resultat = 0 ; 
        alert (" Pour une autre partie cliquez sur le bouton😇"+"Lancé les Dés "+ "🥳 Good luck 🥳")
    
    }

    lancer (){
        
        if ( this.state.click < 10 ) {
            this.score () ; 
             // Génération des nombres aléatoires 
            const le_De_1 = this.props.faces [Math.floor(Math.random () * this.props.faces.length )];
            const le_De_2 = this.props.faces [Math.floor(Math.random () * this.props.faces.length )];
            // mise à jour des state
            this.setState ({de_1 : le_De_1 , de_2 : le_De_2 , lancement : true});
            setTimeout (()=> {this.setState({lancement: false});},1000 );
            this.state.click = this.state.click +1  ;
        }
        if (this.state.click > 10 ) {
            this.state.arret = true ;
            this.state.bien = 0 ;
            this.state.mauvais = 0 ; 
        }
    

    }   
 
    render() {
        return (
            <div className='LanceDe'> 

                
                <table className='table'>
                     <tr >
                        <th> tentatives :</th>
                        <td> bien </td>
                        <td> mauvaise </td> 
                        <td> resultat</td> 
                        <td> n°click</td>
                    </tr>
                    <tr> 
                        <th> score  </th>
                        <td> {this.state.bien}  </td>
                        <td> {this.state.mauvais} </td> 
                        <td> {this.state.resultat} /10  </td>
                        <td>{this.state.click}</td>

                    </tr>
                </table>
                <p>  <br/></p> <p>  <br/></p>
                <h1> Let's have fun !   </h1>

                <p> <em> {this.state.de_1 === this.state.de_2 ? " 👌👌👏 BRAVO , YOU WIN 👏👌👌 " : 
                " 😥😥😥 TRY AGAIN ! 😥😥😥 "} </em> </p>
               
                <container> 
                     <De face = {this.state.de_1} lancement = {this.state.lancement} />  
                     <De face = {this.state.de_2}  lancement = {this.state.lancement}/>  
                     
                </container>
                
                <p>  <br/></p>
               
                <button onClick={ this.lancer }  disabled = {this.state.arret}>
                    {this.state.lancement ? "Lancement...":"Lancer Les Dés"} 
                 </button>
                <button onClick={ this.reset} > Reset  </button>

             
                
                 
                <p> <br/> </p>
                
          
            </div>
        )
    }
}

export default LanceDe; 