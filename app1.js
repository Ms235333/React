import React from "react";
import ReactDOM from "react-dom/client";
// const Title=()=>
// (
//     <h1 className="Head">Namaste React</h1>
// )
// const HeadingComponent=()=>
// (
//     <div id="container">
//         <h2>{1000+100}</h2>
//         <Title/>
//         <Title/>
//         <Title/>
//         <h1 className="heading">Namaste Vijay from Nitika</h1>
//     </div>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)

const Destructex=props=>{
    const{name,hobby}=props
    return(
        <div>
           <h1>Hello {name} ur hobby is {hobby}</h1>
        </div>
    )
}


const App=()=>{
    return(
        <div>
            <Destructex name="Nitiika" hobby="Singing"/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
