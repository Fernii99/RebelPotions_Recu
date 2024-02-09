import { useContext, useEffect } from "react";
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

    const player1Result = ((player1.dice * 0.1) * player1.potion.power) / player1.potion.mana
    const player2Result = ((player2.dice * 0.1) * player2.potion.power) / player2.potion.mana

    function resetGame() {
        isGameLaunched(false);
    }

    return(
        <div className="App-header">
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{backgroundColor: 'white', height: '600px', width:'500px', }}> 
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                     { player1Result > player2Result ?  
                        <p style={{color: "black"}}>Winner Potion</p> 
                        :
                        <p style={{color: "black"}}>Loser Potion</p> 
                    }
                    { player1.potion.curative ?  
                            <img src={potion} width={150}></img> 
                        :
                            <img src={poison} width={150}></img>
                    }
                </div>

                <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop: '50px'}}>
                    <span style={{ color: "black" }}> DICE RESULT </span>
                    <img src={diceImages[player1.dice]} width={90}></img>
                </div>

                <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', }}>
                     <span style={{ color: "red" }}> {player1.dice} X 0.1 = {(player1.dice * 0.1).toFixed(2)} </span>
                </div>

                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '50px'}}>
                    <span style={{ color: "black" }}> TOTAL SCORE: </span> 
                    <span style={{ color: "black" }}> {(player1.dice * 0.1).toFixed(2)} X {player1.potion.power} / {player1.potion.mana} = {player1Result.toFixed(2)} </span>
                </div>
                  
            </div>


            <div style={{backgroundColor: 'white', height: '600px', width:'500px', }}> 
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', paddingTop: '15px',paddingBottom: '15px'  }}>
                     {/* Dice image */}
                     {  player1Result < player2Result ?  
                        <p style={{color: "black"}}>Winner Potion</p> 
                        :
                        <p style={{color: "black"}}>Loser Potion</p> 
                    }

                    { player2.potion.curative ?  

                            <img src={potion} width={150}></img> 
                        :
                            <img src={poison} width={150}></img>
                    }
                </div>

                <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop: '50px'}}>
                    <span style={{ color: "black" }}> DICE RESULT </span>
                    <img src={diceImages[player2.dice]} width={90}></img>
                </div>

                <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', }}>
                     <span style={{ color: "red" }}> {player2.dice} X 0.1 = {(player2.dice * 0.1).toFixed(2)} </span>
                </div>

                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '50px'}}>
                    <span style={{ color: "black" }}> TOTAL SCORE: </span> 
                    <span style={{ color: "black" }}> {(player2.dice * 0.1).toFixed(2)} X {player2.potion.power} / {player2.potion.mana} = {player2Result.toFixed(2)} </span>
                </div>
                  
            </div>
        </div>
        <div>
            <button style={{marginTop: '20px',height:'100px', width: '300px', fontSize: '30px'}} onClick={resetGame} > END GAME </button>
        </div>
    </div>
    )
}