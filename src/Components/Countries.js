import React, {useState, useEffect} from 'react'
import LeagueList from './LeagueList'

function Countries() {
    const [countries, setCountries] = useState([])
    const [leagues, setLeagues] = useState([])
    
    const fetchLeagues = async () => {
        const data = await fetch("https://api-football-beta.p.rapidapi.com/leagues", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ac643243b5msh5c3c5a4cc21fd6ap18eaf1jsn56d3107234fe",
		        "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
                // "x-rapidapi-key": "b864f4fba2msh6d4c12e01a9745cp126872jsne4a37b06f73d",
		        // "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
        const leagues = await data.json()
        setLeagues(leagues.response)
    }
    // console.log(leagues)
    
    const fetchCountries = async () => {
        const data = await fetch("https://api-football-beta.p.rapidapi.com/countries", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ac643243b5msh5c3c5a4cc21fd6ap18eaf1jsn56d3107234fe",
		        "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
                // "x-rapidapi-key": "b02247c256mshf46f822c662c7c6p14da13jsn6c90e280d0e9",
		        // "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
        const countries = await data.json()
        setCountries(countries.response)
    }
    // console.log(countries)

    useEffect(() => {
        fetchCountries()
        fetchLeagues()
    }, [])

    return (
        <div>
            {countries?.map((country, i)  => (
                <LeagueList country = {country} leagues={leagues} key={i} />
            ))}
        </div>
    )
}

export default Countries
