import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home(props){

   
  
    const [round, setRound] = useState(1);
    const [fight, setFight ] =useState('');
    const [player1, setPlayer1] =useState('');
    const [player2 ,setPlayer2]=useState('');
    
const handlePlayer2=(event3)=>{setPlayer2(event3.target.value);};
  const handleChange = (event) => {
    setRound(event.target.value);
  };
  const handleFight =(event1)=>{setFight(event1.target.value);

  };
  const handlePlayer1=(event2)=>{
    setPlayer1(event2.target.value);
  };


  function handleSubmit(){
    props.sendToParent({player1,player2,round,fight})
    console.log("button is clicked",player1,player2,round,fight)
  }
  

  
    return(
       
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField required
          id="player1"
          label="Player1 Name"
          value={player1}
          onChange={handlePlayer1}
        />
         <TextField
          required
          id="player2"
          label="Player2 Name"
          value ={player2}
          onChange={handlePlayer2}
        />
        
        <h2>No of rounds </h2>
        <InputLabel id="demo-simple-select-label">Round</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-autowidth"
          value={round}
          onChange={handleChange}
          autoWidth
          label="Round"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Fight On</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-label"
        name="row-radio-buttons-group"
        value ={fight}
        onChange={handleFight}
      >
        <FormControlLabel value="Hp" control={<Radio />} label="Hp" />
        <FormControlLabel value="Attack" control={<Radio />} label="Attack" />
        <FormControlLabel value="Defense" control={<Radio />} label="Defense" />
        <FormControlLabel value="Specialattack" control={<Radio />} label="Special Attack" />
        <FormControlLabel value="SpecialDefense" control={<Radio />} label="Special Defense" />
        <FormControlLabel value="Speed" control={<Radio />} label="Speed" />
        
      </RadioGroup>
    </FormControl>
    <Stack direction="row" spacing={2}>
      <Button onClick={handleSubmit} variant="contained">
        Enter 
      </Button>
      </Stack>
    </div>
        </Box>
    )
}