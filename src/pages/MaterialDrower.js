import React, { useState } from "react";
// UIコンポーネントは @mui/material から
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
// アイコンは @mui/icons-material から
import MenuIcon from "@mui/icons-material/Menu";


export default function MaterialDrower(){
    //ドロワーの開閉状態を管理するフック
    const [open,setOpen] = useState(false);

    //開く、閉じるの処理を渡す
    const toggleDrawer = (isOpen) => () =>{
        setOpen(isOpen);
    };

    return(
        <>
        {/*Appbar */}
        <AppBar position="static">
            <Toolbar>
                {/*ハンバーガーメニュー*/}
                <IconButton 
                    color="default"
                    edge="start"
                    onClick={toggleDrawer(true)}
                    sx={{mr:1}}
                >
                    <MenuIcon/>
                    </IconButton>
            </Toolbar>
        </AppBar>
        {/*ドロワー */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <Box
            sx={{width:250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="ホーム"></ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="お問い合わせ" />
                    </ListItemButton>

                    </ListItem><ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="会社概要" />
                    </ListItemButton>
                    </ListItem>
                    
                    <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="サイドマップ" />
                    </ListItemButton>
                    </ListItem>
                </List>
            </Box>

        </Drawer>

        </>
    );
}

