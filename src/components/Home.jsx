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
    const [disableall , setDisableall]= useState(false);
    
    
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
    setDisableall(true)
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <TextField required
          id="player1"
          label="Player1 Name"
          value={player1}
          onChange={handlePlayer1}
          disabled={disableall}
        />
         <TextField
          required
          id="player2"
          label="Player2 Name"
          value ={player2}
          onChange={handlePlayer2}
          disabled={disableall}
        />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <h2>No of rounds </h2>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-autowidth"
          value={round}
          onChange={handleChange}
          autoWidth
          label="Round" 
          disabled={disableall}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <FormControl>
      <FormLabel style={{ display: "flex", justifyContent: "center", alignItems: "center", color : "red"}} 
      id="demo-row-radio-buttons-group-label">Fight On</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-label"
        name="row-radio-buttons-group"
        value ={fight}
        onChange={handleFight}
        
      >
        <FormControlLabel value="Hp" control={<Radio />} label="Hp" disabled={disableall} />
        <FormControlLabel value="Attack" control={<Radio />} label="Attack" disabled={disableall} />
        <FormControlLabel value="Defense" control={<Radio />} label="Defense"  disabled={disableall}/>
        <FormControlLabel value="Specialattack" control={<Radio />} label="Special Attack"  disabled={disableall}/>
        <FormControlLabel value="SpecialDefense" control={<Radio />} label="Special Defense"  disabled={disableall}/>
        <FormControlLabel value="Speed" control={<Radio />} label="Speed" disabled={disableall} />
        
      </RadioGroup>
    </FormControl>
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    <Stack direction="row" spacing={2} >
      <Button onClick={handleSubmit} variant="contained">
        Enter 
      </Button>
      </Stack>
    </div>
        </Box>
    )
}