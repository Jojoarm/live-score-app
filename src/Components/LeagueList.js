import React, { useEffect, useState } from 'react'


const LeagueList = ({country, leagues}) => {
 

    const [showLeague, setShowLeague] = useState(false)

    function showLeagues() {
        setShowLeague(!showLeague)
    }


    
    return (
        <div className="country_name" onClick={showLeagues}>
            {country.name}
            {leagues?.filter(league => league.country.code === country.code)
                ?.map(league => (
                <div className={`league_name ${showLeague ? "league_show" : ""}`} key={league.league.id}>
                    {league.league.name}
                </div>
                    ))}
                </div>
    )
}

export default LeagueList
