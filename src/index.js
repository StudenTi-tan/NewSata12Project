import React from "react";//本体の読み込み
import ReactDOM from "react-dom/client";//HTMLを描画する機能
import App from "./App";//自作したファイルの読み込み
import { BrowserRouter } from "react-router";
import {QueryClient , QueryClientProvider} from 'react-query';//天気取得APIで呼ぶ宣言


const root = ReactDOM.createRoot(document.getElementById("root"));
const cli = new QueryClient();




root.render(
  <QueryClientProvider client={cli}>
    <React.StrictMode>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);