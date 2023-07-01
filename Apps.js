import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Apps() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            response => setData(response.data)
               
            
        )
    },[])
    return (
        <div>
            <p>Fetch Data By Link</p>
            {
                data.map(item => <li key={item.id}>{item.title}</li>)
            }
        </div>
    )
}

export default Apps
