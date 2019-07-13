import React from "react"
import { Table } from 'reactstrap';

export default function PlaceList({ places })  {
    // console.log(places)
    let renderList = []
    for (let i = 0; i < places.length; i++) {
        renderList.push(<ListItem key={i} {...places[i]}/>)
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Summary</th>
                    <th>Temperature</th>
                    <th>Windspeed</th>
                </tr>
            </thead>
            <tbody>
                {renderList}
            </tbody>
        </Table>
    )
}

function ListItem({ country, lat, lon, summary, temperature, windSpeed }) {
    // You can use CSS to apply styles to the <td>s here
    const tdClassName = ""
    return (
        <tr>
            <td className={tdClassName} children={country}/>
            <td className={tdClassName} children={lat}/>
            <td className={tdClassName} children={lon}/>
            <td className={tdClassName} children={summary}/>
            <td className={tdClassName} children={temperature}/>
            <td className={tdClassName} children={windSpeed}/>
        </tr> 
    )
}