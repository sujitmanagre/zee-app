import React from 'react'
import ListRender from './ListRender'

function MyList() {

    const countries = ["INDIA", "CHINA", "NEPAL","UK","USA"]
    const myData = countries.map( a => <h3> {a}</h3>)

    const names = [
        { "id":101, "username":"Sujit", "city":"bangalore"},
        {"id":102, "username":"ravi", "city":"chennai"},
        {"id":103, "username":"ramesh", "city":"mumbai"}    
    
    ]

    // const myNames = names.map(data => <h2> My name is {data.username} and city is {data.city}</h2>)

    const myNames = names.map(data => <ListRender data = {names}/>)

  return (
    <div>
        <h1> List of Countries</h1>

        {myNames}




            {/* <ul>
                <li> {countries[0]} </li>   
                <li> {countries[1]} </li> 
                <li> {countries[2]} </li> 
                <li> {countries[3]} </li> 
                <li> {countries[4]} </li>           
                
            </ul> */}

            {/* {countries.map( a => <h3> {a}</h3>)} */}
            {/* {myData} */}

    </div>
  )
}

export default MyList