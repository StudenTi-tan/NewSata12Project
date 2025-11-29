import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline, Button } from "@mui/material";
import { amber, grey } from "@mui/material/colors";



export default function MaterialMode() {
    //管理するState
    const [mode, setMode] = useState("light");
    //Stateの値mode をlight->dark
    const toggleMode = () =>setMode(prev =>
        prev === 'light'?'dark':'light'
    );
    
    //テーマを定義
    const theme = createTheme({
        palette:{
            mode,
            //mode値に応じてテーマを切り替える
            ...(mode === 'light')
            ?{
                primary:{main:amber[500]}
            }
            :{
                primary:{
                    main:grey[500],
                    contrastText:'#fff'
                },
                background:{
                 default:grey[900],
                 paper:grey[900],   
                },
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" onClick={toggleMode}>
                Mode {mode}
            </Button>

        </ThemeProvider>
    );

}