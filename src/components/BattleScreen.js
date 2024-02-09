
import { Context } from '../helpers/context';
import { useContext, useEffect } from 'react';

import dice1 from '../assets/dado1.png';
import dice2 from '../assets/dado2.png';
import dice3 from '../assets/dado3.png';
import dice4 from '../assets/dado4.png';
import dice5 from '../assets/dado5.png';
import dice6 from '../assets/dado6.png';

import potion from '../assets/potion.png';
import poison from '../assets/poison.png';


export default function BattleScreen(){

    const { potions, player1, player2, setPlayer1, setPlayer2, isGameLaunched } = useContext(Context);
    
    const diceImages = ["", dice1, dice2, dice3, dice4, dice5, dice6];

    function randomDiceNumber(){
        return (Math.random() * (5 - 0 + 0) + 1).toFixed(0)
    }

    function randomPotionNumber(){
        return (Math.random() * (99 - 0 + 0) + 1).toFixed(0)
    }

    function preparePlayer(){
        const player = {
            'dice': randomDiceNumber(),
            'potion': potions[randomPotionNumber()],
        }
        return(player);
    }
        
    useEffect(() => {

        setPlayer1(preparePlayer());
        setPlayer2(preparePlayer());

        if(player1.potion.curative === player2.potion.curative){
            setPlayer1(preparePlayer());
            setPlayer2(preparePlayer());
        }
                                         
    }, [])

    function launchBattle() {
        isGameLaunched(true);
    }

    if(player1.potion.curative != player2.potion.curative ){
        return(
            <div className="App-header">
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <div style={{backgroundColor: 'white', height: '600px', width:'500px', }}> 
                        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                            {/* Potion image */}
                            { player1.potion.curative ?  
                                    <img src={potion} width={150}></img> 
                                :
                                    <img src={poison} width={150}></img>
                            }
                            {/* Dice image */}
                                <img src={diceImages[player1.dice]} width={90}></img>
                        </div>

                        <div style={{ flexDirection:'row', flex:'flex', marginLeft:'10px',paddingLeft:'10px', width:'90%', border:'2px solid rgba(0, 0, 0, 1)' }}>
                            <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}> Name: {player1.potion.name} </p>
                            <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}> Alias: {player1.potion.alias} </p>
                            <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Curative: {player1.potion.curative ? "true" : "false"}</p>
                            <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Power: {player1.potion.power}</p> 
                            <p style={{fontSize: '20px', lineHeight: '19px', color:'black'}}>Mana: {player1.potion.mana}</p> 
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
                    <button style={{marginTop: '20px',height:'100px', width: '300px'}} onClick={launchBattle}> LAUNCH BATTLE </button>
                </div>
            </div>
    
           
        )
    }
    else{
        setPlayer1(preparePlayer());
        setPlayer2(preparePlayer());
    }
      
    
}