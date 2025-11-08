import React from "react";//本体の読み込み
import ReactDOM from "react-dom/client";//HTMLを描画する機能
import App from "./App";//自作したファイルの読み込み


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />   {/* ← App.jsの中身を描画 */}
  </React.StrictMode>
);