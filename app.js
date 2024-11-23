<script>
        //create a react element

        const heading= React.createElement("h1", {}, "Hello world from ReactJS");
        
        //create a react root

        const root= ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(heading);
    </script>