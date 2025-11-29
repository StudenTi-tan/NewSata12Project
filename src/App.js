import {Routes,Route,NavLink } from "react-router-dom";
import Counter from "./pages/Counter.js";
import Todo from "./pages/Todo.js";
import MaterialDrower from "./pages/MaterialDrower.js";
import MaterialMode from "./pages/MaterialMode.js";
import QueryBasic from "./pages/QueryPre.js";



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
                <NavLink to="/Todo" style={linkStyle} end>Todo</NavLink>
                <NavLink to="/MaterialDrower" style={linkStyle} end>MaterialDrower</NavLink>     
                <NavLink to="/MaterialMode" style={linkStyle} end>MaterialMode</NavLink>     
                <NavLink to="/QueryBasic" style={linkStyle} end>QueryBasic</NavLink>     
            
            
            </nav>
            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="/Todo" element={<Todo/>}/>
                <Route path="/MaterialDrower" element={<MaterialDrower/>}/>    
                <Route path="/MaterialMode" element={<MaterialMode/>}/>
                <Route path="/QueryBasic" element={<QueryBasic/>}/>    

                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>

        
        </div>    


);
}