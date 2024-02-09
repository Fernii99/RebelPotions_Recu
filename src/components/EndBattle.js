import { useContext } from "react";
import { Context } from "../helpers/context";

import dice1 from '../assets/dado1.png';
import dice2 from '../assets/dado2.png';
import dice3 from '../assets/dado3.png';
import dice4 from '../assets/dado4.png';
import dice5 from '../assets/dado5.png';
import dice6 from '../assets/dado6.png';

import potion from '../assets/potion.png';
import poison from '../assets/poison.png';


export default function EndBattle(){

    const { player1, player2, isGameLaunched } = useContext(Context);

    const diceImages = ["", dice1, dice2, dice3, dice4, dice5, dice6];

    // function calculateWinner() {

    // }

    return(
        <div className="App-header">
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{backgroundColor: 'white', height: '600px', width:'500px', }}> 
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                     {/* Dice image */}
                     { player1.potion.curative ?  
                        <img src={potion} width={150}></img> 
                        :
                        <img src={poison} width={150}></img>
                    }
                    {/* Potion image */}
                    { player1.potion.curative ?  

                            <img src={potion} width={150}></img> 
                        :
                            <img src={poison} width={150}></img>
                    }
                </div>

                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                     {/* Dice image */}
                     { player1.potion.curative ?  
                        <img src={potion} width={150}></img> 
                        :
                        <img src={poison} width={150}></img>
                    }
                    {/* Potion image */}
                    { player1.potion.curative ?  

                            <img src={potion} width={150}></img> 
                        :
                            <img src={poison} width={150}></img>
                    }
                </div>

                <div style={{  display:'flex', alignItems: 'center', justifyContent:'center', marginTop: '50px'}}>
                        <span style={{ color: "black", }}> TOTAL SCORE: <br/>
                0.2 X 68 / 23 = 0.59 </span>
                </div>
                  
            </div>


            <div style={{backgroundColor: 'white', height: '600px', width:'500px', marginRight:'50px', }}> 
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                    
                    {/* Dice image */}
                        <img src={diceImages[player2.dice]} width={90}></img>

                    {/* Potion image */}
                    { player2.potion.curative ?  
                            <img src={potion} width={150}></img> 
                        :
                            <img src={poison} width={150}></img>
                    }
                    
                </div>
            
                <div style={{ flexDirection:'row', flex:'flex', marginLeft:'10px',paddingLeft:'10px', width:'90%', border:'2px solid rgba(0, 0, 0, 1)' }}>
                    <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}> Name: {player2.potion.name} </p>
                    <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}> Alias: {player2.potion.alias} </p>
                    <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Curative: {player2.potion.curative ? "true" : "false"}</p>
                    <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Power: {player2.potion.power}</p> 
                    <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Mana: {player2.potion.mana}</p> 
                </div>
            </div>
        </div>
        <div>
            <button style={{marginTop: '20px',height:'100px', width: '300px'}} > LAUNCH BATTLE </button>
        </div>
    </div>
    )
}