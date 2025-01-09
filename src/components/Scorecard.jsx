import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Scorecard(props){
const{player1score , player2score , data , curround }=props

const [state, setState] = useState({
  open: false,
  vertical: 'top',
  horizontal: 'center',
  winner :''
});
const { vertical, horizontal, open , winner } = state;




const handleClose = () => {
  setState({ ...state, open: false });
  location.reload()
};

      useEffect(()=>{
        if(data.round==curround){

        if((player1score > player2score))
        {
          console.log("winner is :" + data.player1)
          //setWinner(data.player1)
          setState({ winner : `Winner is : ${data.player1}`, open: true, vertical: 'top',
            horizontal: 'center' });
        }else if (player1score==player2score){
          console.log("It's a tie")
          ///setWinner("tie")
          setState({ winner : "It's a tie", open: true, vertical: 'top',
            horizontal: 'center' });
        }else{
          console.log("winner is :" + data.player2)
          //setWinner(data.player2)
          setState({ winner : `Winner is : ${data.player2}`, open: true, vertical: 'top',
  horizontal: 'center' });
        }
      }},[curround])
      
      
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Alert  icon={false} severity="info" >
      
      
        <h2>{data.player1} : {player1score}/{data.round}</h2>
          <h2>{data.player2} : {player2score}/{data.round}</h2>
           
          
      
    </Alert>
    
    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={winner}
        key={vertical + horizontal}
      />
       </div>
    )
}