import React from "react";


export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    // 1. GET the data (fetch)
    // 2. Save the data to state

    console.log('Component rendered');

    /**
     * If we set state inside api call then it will re-render the component, and again it will call api call in an infinite loop */
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))



    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}