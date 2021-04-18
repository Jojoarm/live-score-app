import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './LeagueInfo.css'

const LeagueInfo = ({ match }) => {
    // console.log(match)

    const [table, setTable] = useState([])

    const fetchTable = async () => {
        const data = await fetch(`https://api-football-beta.p.rapidapi.com/standings?season=2020&league=${match.params.id}`, {
            "method": "GET",
            "headers": {
                // "x-rapidapi-key": "0ed3f2d1ecmsh607343409c22672p1c115ajsnabbb7ef110a5",
                // "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
                "x-rapidapi-key": "ac643243b5msh5c3c5a4cc21fd6ap18eaf1jsn56d3107234fe",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
        const table = await data.json()
        setTable(table.response)
        
    }
    // console.log(table)

    useEffect(() => {
        fetchTable()
    }, [])

    if (table.length === 0) return(
        <div className="spinner">
            <CircularProgress />
        </div>
    ) 

    return (
        <div className="leageinfo__container">
            <div className="standing__container">
                <div className="league__info">
                    <img className="country__logo" src={table[0]?.league?.flag} />
                    <h4>{table[0]?.league?.country}-</h4>
                    {" "}
                    <h4>{table[0]?.league?.name}:</h4>
                    {" "}
                    <p>{table[0]?.league?.season}</p>
                </div>
                <div className="table__container">
                    <div className="table">
                        <p className="position">Ps</p>
                        <h5 className="team">Team</h5>
                        <p className='games__played'>GP</p>
                        <h5 className='points'>Pts</h5>
                        <p className='wins'>W</p>
                        <p className='draws'>D</p>
                        <p className='losses'>L</p>
                        <p className='goals_for'>GF</p>
                        <p className='goals_against'>GA</p>
                        <p className='goal_difference'>+/-</p>
                        <p className='form'>Form</p>
                    </div>
                    {table[0]?.league?.standings[0].map((team) => (
                        <div className="table_standing">
                            <p className="position">{team.rank}</p>
                            <h5 className="team">{team.team.name}</h5>
                            <p className='games__played'>{team.all.played}</p>
                            <h5 className='points'>{team.points}</h5>
                            <p className='wins'>{team.all.win}</p>
                            <p className='draws'>{team.all.draw}</p>
                            <p className='losses'>{team.all.lose}</p>
                            <p className='goals_for'>{team.all.goals.for}</p>
                            <p className='goals_against'>{team.all.goals.against}</p>
                            <p className='goal_difference'>{team.goalsDiff}</p>
                            <p className='form'>{team.form}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeagueInfo
