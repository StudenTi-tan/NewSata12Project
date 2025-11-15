import React,{ useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

function App(){
    //countで共通した状態にしてたのでカウントがかぶっていた、しかし分けたいのでuseState(0)を複数つくった
    const [count1, setCount1] = useState(0);//カウントステータス1
    const [count2, setCount2] = useState(0);//カウントステータス2
/*
    const css = {
        color: "red",
        fontSize:"20px",
    };
*/  
    const cont = {
    textTransform: "none",
    };

    <Button variant="text" sx={cont}>Text</Button>

    return(
        <div>
            <h1>カウント1</h1>
            <h1>{count1}</h1>
            <Button variant="contained" onClick={()=> setCount1(count1 + 1)}> + 1</Button>
            <Button variant="contained" onClick={()=> setCount1(count1 - 1)}> - 1</Button>

            <h1>カウント2</h1> {/*Stackを利用してカウントを並列に並べた */}
            <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="contained" onClick={()=>setCount2(count2 - 1)}>
                    -1    
                </Button> 
                <h1 style={{ margin: 20}}>{count2}</h1>
                <Button variant="contained" onClick={()=>setCount2(count2 + 1)}>
                    +1
                </Button>

            </Stack>
            <h1>MUIボタン</h1>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" color="success">Success</Button>



        </div>




    );

}

export default App;