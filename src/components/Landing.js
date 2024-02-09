
import axios from 'axios';
import { Context } from '../helpers/context';
import { useContext } from 'react';


export default function Landing(){

    const { isDataLoaded, setPotions } = useContext(Context);

    async function getPotions(){
        
        const data = await(axios.get('https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js'))
    
        if(data != {}){
            setPotions(data.data);
            isDataLoaded(true);
            console.log("LISTADO DE POCIONES");
            console.log(data.data);
        }
    }

    return(
        <div className="App">
            <header className="App-header">
                <h1> LAS POCIMAS REBELDES  </h1>
                <button style={{height:'100px', width: '300px'}}onClick={getPotions}>
                    ENTER
                </button>
            </header>
      </div>
    )
}