import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Scorecard from './Scorecard'



export default function Battlepage(props){
    const {getdata}=props
    const [player1pokemon , setPlayer1pokemon]= useState(0);
    const [player2pokemon , setPlayer2pokemon]= useState(0);
    const [player1Data , setPlayer1Data]=useState({});
    const[player2Data , setPlayer2Data]= useState({});
    const [round , setRound ] = useState(0);
    const [player1reloaddisable , setPlayer1reloaddisable]= useState(false);
    const [player2reloaddisable , setPlayer2reloaddisable]= useState(false);
    const [fightdisable , setFightdisbale] = useState(true);
    const [player1score , setPlayer1score] = useState(0);
    const [player2score , setPlayer2score] = useState(0);


    
     

    console.log(getdata)
    useEffect(()=>{
      async function getData(){
        const pokedata= await fetch('https://pokeapi.co/api/v2/pokemon/'+ player1pokemon)
        const data = await pokedata.json()
        setPlayer1Data(data)
      }
      getData()
    },[player1pokemon])
    
    useEffect(()=>{
      async function getData(){
        const pokedata= await fetch('https://pokeapi.co/api/v2/pokemon/'+ player2pokemon)
        const data = await pokedata.json()
        setPlayer2Data(data)
      }
      getData()
    },[player2pokemon])

    
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            height : '250px',
            color: theme.palette.text.secondary,
            ...theme.applyStyles('dark', {
              backgroundColor: '#1A2027',
            }),
          }));

          function getRandomInt() {
            return  Math.floor(Math.random() * 1025);
            
          }

          function handlePlayer1reload(){
            const n= getRandomInt()
            setPlayer1pokemon(n)
          }
          
          function handlePlayer2reload(){
            const n= getRandomInt()
            setPlayer2pokemon(n)
          }
          function handleFight(){
            setRound(round+1)
           setPlayer1reloaddisable(false)
           setPlayer2reloaddisable(false)
           setFightdisbale(true)
            const stats_mapping = {"Hp": 0, "Attack": 1, "Defense": 2, "SpecialDefense": 4, "Specialattack": 3, "Speed": 5}
            if((player1Data['stats']?.[stats_mapping[getdata.fight]]?.["base_stat"])>(player2Data['stats']?.[stats_mapping[getdata.fight]]?.["base_stat"]))
            {
              setPlayer1score(player1score+1)
            }else{
              setPlayer2score(player2score+1)
            }
          }
          function player1Reloaddone(){
            setFightdisbale(false)
            setPlayer1reloaddisable(true)
            

          }

          function player2Reloaddone(){
            setFightdisbale(false)
            setPlayer2reloaddisable(true)

          }
          useEffect(() => {
            if(getdata.round == round){
              setFightdisbale(true)
            }
          }, [player1reloaddisable, player2reloaddisable, round])
          return(
            <div style={{visibility: getdata.disableEnter || getdata.disableEnter == undefined ? 'hidden': ''}}>
              <Box sx={{ flexGrow: 1 }} visibility={!getdata.disableEnter}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <h1>{getdata.player1} V/S {getdata.player2} </h1>
                
                </div>
                
                <Scorecard player1score={player1score} player2score={player2score} data={getdata} curround={round}/>
                <Grid container spacing={15}>
                  
                    
                  <Grid size={6} >
                    <h1>{getdata.player1}</h1>
                    <Item><img width="250" height="250" src={`https://img.pokemondb.net/artwork/${player1Data["name"]}.jpg`} />
                  
                    <h2>{player1Data["name"]}</h2>
                    <div style={{visibility :'hidden'}}>
                    <h3>{player1Data['stats']?.[0]?.['base_stat']} : HP</h3>
                    <h3>{player1Data['stats']?.[1]?.['base_stat']} : Attack</h3>
                    <h3>{player1Data['stats']?.[2]?.['base_stat']} : Defense</h3>
                    <h3>{player1Data['stats']?.[3]?.['base_stat']} : Special Attack</h3>
                    <h3>{player1Data['stats']?.[4]?.['base_stat']} : Special Defense</h3>
                    <h3>{player1Data['stats']?.[5]?.['base_stat']} : Speed </h3>
                    </div>
                    
                    </Item>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <Button onClick={handlePlayer1reload} variant="contained" disabled ={player1reloaddisable} >
                 Reload
               </Button>
                    <Button  onClick={player1Reloaddone} variant="contained" >
                 Done
               </Button>
               </div>
                  </Grid>
                  <Grid size={6}>
                    <h1>{getdata.player2}</h1>
                    <Item><img width="250" height="250"  src={`https://img.pokemondb.net/artwork/${player2Data['name']}.jpg`} />
                    <h2>{player2Data['name']}</h2>
                    <div style={{visibility :'hidden'}} >
                    <h3>{player2Data['stats']?.[0]?.['base_stat']} : HP</h3>
                    <h3>{player2Data['stats']?.[1]?.['base_stat']} : Attack</h3>
                    <h3>{player2Data['stats']?.[2]?.['base_stat']} : Defense</h3>
                    <h3>{player2Data['stats']?.[3]?.['base_stat']} : Special Attack</h3>
                    <h3>{player2Data['stats']?.[4]?.['base_stat']} : Special Defense</h3>
                    <h3>{player2Data['stats']?.[5]?.['base_stat']} : Speed </h3>
                    </div>
                    </Item>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <Button onClick={handlePlayer2reload} variant="contained" disabled={player2reloaddisable}>
                 Reload
               </Button>
              
               
                  <Button  onClick={player2Reloaddone} variant="contained" >
                 Done
               </Button>
               </div>
                  </Grid>
                  
                </Grid>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Stack direction="row" spacing={2} alignItems={'center'}>
                <Button onClick={handleFight} variant="contained" disabled={fightdisable}>
                 Fight
               </Button>
               

               </Stack>
               </div>
              </Box>
               </div>
            );
          }

