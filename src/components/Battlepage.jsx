import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';



export default function Battlepage(props){
    const {getdata}=props
    const [player1pokemon , setPlayer1pokemon]= useState(0);
    const [player2pokemon , setPlayer2pokemon]= useState(0);
    const [player1Data , setPlayer1Data]=useState({});
    const[player2Data , setPlayer2Data]= useState({});

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
            
            alert("fight started");
          }

          return(
           
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={15}>
                    
                  <Grid size={6} >
                    <h1>{getdata.player1}</h1>
                    <Item><img width="250" height="250" src={`https://img.pokemondb.net/artwork/${player1Data["name"]}.jpg`} />
                    <h2>{player1Data["name"]}</h2>
                    <h3>{player1Data['stats']?.[0]?.['base_stat']} : HP</h3>
                    <h3>{player1Data['stats']?.[1]?.['base_stat']} : Attack</h3>
                    <h3>{player1Data['stats']?.[2]?.['base_stat']} : Defense</h3>
                    <h3>{player1Data['stats']?.[3]?.['base_stat']} : Special Attack</h3>
                    <h3>{player1Data['stats']?.[4]?.['base_stat']} : Special Defense</h3>
                    <h3>{player1Data['stats']?.[5]?.['base_stat']} : Speed </h3>
                    
                    </Item>
                    <Button onClick={handlePlayer1reload} variant="contained">
                 Reload
               </Button>
                  </Grid>
                  <Grid size={6}>
                    <h1>{getdata.player2}</h1>
                    <Item><img width="250" height="250"  src={`https://img.pokemondb.net/artwork/${player2Data['name']}.jpg`} />
                    <h2>{player2Data['name']}</h2>
                    <h3>{player2Data['stats']?.[0]?.['base_stat']} : HP</h3>
                    <h3>{player2Data['stats']?.[1]?.['base_stat']} : Attack</h3>
                    <h3>{player2Data['stats']?.[2]?.['base_stat']} : Defense</h3>
                    <h3>{player2Data['stats']?.[3]?.['base_stat']} : Special Attack</h3>
                    <h3>{player2Data['stats']?.[4]?.['base_stat']} : Special Defense</h3>
                    <h3>{player2Data['stats']?.[5]?.['base_stat']} : Speed </h3>
                    </Item>
                    <Button onClick={handlePlayer2reload} variant="contained">
                 Reload
               </Button>
                  </Grid>
                  
                </Grid>
                <Stack direction="row" spacing={2} alignItems={'center'}>
               <Button onClick={handleFight} variant="contained">
                 Fight
               </Button>
               </Stack>
              </Box>
               
            );
          }

