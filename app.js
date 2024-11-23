//create a react element

const heading= React.createElement("h1", {id:"heading"}, "Hello world from ReactJS");
        
//create a react root

const root= ReactDOM.createRoot(document.getElementById("root"));
        
root.render(heading);