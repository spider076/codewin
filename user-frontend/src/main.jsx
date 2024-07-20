import { Buffer } from 'buffer';
window.Buffer = Buffer;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth0Provider  
        domain="dev-c0ukgvz781kfyoip.us.auth0.com"
        clientId="lRWRIHQFTbNnvfrfzxfAHspUrgYn1Q9E"
        redirectUri={window.location.origin}
      >
        <App />
      </ Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>,
);
