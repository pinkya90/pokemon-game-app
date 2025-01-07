import Alert from '@mui/material/Alert';

export default function Scorecard(props){
const{player1score , player2score , data}=props

    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Alert  icon={false} severity="info" >
        <h1>{data.player1} : {player1score}/{data.round}</h1>
          <h1>{data.player2} : {player2score}/{data.round}</h1>
      
    </Alert>
       </div>
    )
}