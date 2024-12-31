import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Battlepage(props){
    const {getdata}=props
    
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
            return Math.floor(Math.random() * 1025);
          }

          return(
           
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={15}>
                    
                  <Grid size={6} >
                    <h1>{getdata.player1}</h1>
                    <Item><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getRandomInt()}.png`} />
                    </Item>
                  </Grid>
                  <Grid size={6}>
                    <h1>{getdata.player2}</h1>
                    <Item><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getRandomInt()}.png`} />
                    </Item>
                  </Grid>
                  
                </Grid>
                <Stack direction="row" spacing={2}>
               <Button variant="contained">
                 Fight
               </Button>
               </Stack>
              </Box>
               
            );
          }

