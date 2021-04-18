import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const LeagueList = ({country, leagues}) => {
    const [showLeague, setShowLeague] = useState(false)

    function showLeagues() {
        setShowLeague(!showLeague)
    }
    
    return (
        <div className="country_name" onClick={showLeagues}>
            <p>{country.name}</p>
            {leagues?.filter(league => league.country.code === country.code)
                ?.map(league => (
                <div className={`league_name ${showLeague ? "league_show" : ""}`} key={league.league.id}>
                    <Link to={`/league/${league.league.id}`} style={{ textDecoration: 'none', color: 'black'}}>
                        {league.league.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default LeagueList
