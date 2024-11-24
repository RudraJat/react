// create a react element
// const heading= React.createElement("h1", {id:"heading"}, "Hello world from ReactJS");
// console.log(heading);//it'll give an object which represent a react element

// //create a react root
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Create nested tag using REACTJS
/*
*<div id="parent">
*   <div id="child">
*       <h1>I am h1 tag</h1>
*       <h2>I am h2 tag</h2>
*   </div>
*   <div id="child2">
*       <h1>I am h1 tag</h1>
*       <h2>I am h2 tag</h2>
*   </div>
*</div>
*/
const parent=React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ])
,React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ])
]
);
console.log(parent);
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);