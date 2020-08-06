import React from 'react'
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import {useEffect} from 'react'
import {useHistory} from "react-router-dom"

const TripDetailsPage = ()=>{
    const history = useHistory();
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')
  
        if (token !== null) {
            history.push('/create-trip')
        } else{
            history.push('/')
        }
    })

    useEffect(()=>{
        getTripDetails();
    },[])

    const getTripDetails = ()=>{
        const token = window.localStorage.getItem('token')

        axios.get(`${BaseUrl}/trip/`,{
            headers: {
                auth:token
            }
        }).then((response=>{
            console.log(response.data);
        })).catch((error)=>{
            console.log(error.messege);
        })
    }
    return (
        <div>
            <h1>Trip Detail Page</h1>
        </div>
    )
}
export default TripDetailsPage;