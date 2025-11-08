import React,{ useState } from "react";
import Counter from "./pages/Counter.js";
import Tools from ".pages/Todo";

export default function App(){
    const linkStyle = ({ isActive }) => ({
        marginRight:12,
        textDecoration: isActive ? "underline" : "none"
    });



    return (
        <div style={{ padding: 16 }}>
            {/*ナビゲーションメニュー */}
            <nav style={{ marginBottom:16}}>
                <NavLink to="/" style={linkStyle} end>Counter</NavLink>
                <NavLink to="/tools" style={linkStyle}>Todo</NavLink>     
            </nav>
            <Routes>
                <Route path="/"element={<Counter/>}/>
                <Route path="/Todo"element={<Tools/>}/>
                <Route path="*" element={<div>404 Not Found</div>} />    
            </Routes>
        
        </div>    


);
}