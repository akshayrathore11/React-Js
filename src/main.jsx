import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import App from "./App.jsx";
import Akshay from "./01Akshay.jsx";

function MyApp() {
  return (
    <>
      <h1>This is a Custom React component inside main.jsx.</h1>
    </>
  );
}

const Elem = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me",
};


// const anotherElem = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// );


// const reactElem = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click Me Hello'
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Switch between the components as needed */}
    {/* <MyApp /> */}
    {/* <App /> */}
    <Akshay />

    
  </StrictMode>
);
