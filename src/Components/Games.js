import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Games() {

    useEffect(() => {
        fetchMatches()
    }, [])

    const [matches, setMatches] = useState([])

    //Generate the date for the day 
    const d = new Date()
    //change the date gotten to YYYY-MM-DD format
    const date = d.toISOString().slice(0, 10)

    const fetchMatches = async () => {
        const data = await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?date=${date}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d6fe9dd75bmsh438583ac3b6ff62p1635e6jsn839cb134aa85",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
        const matches = await data.json()
        // console.log(matches)
        setMatches(matches.response)
        
    }
    // console.log(matches)

    //Set display time for each match
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    
    //if game is finished time should display FT

    function getTime(game){
        let time
        var d = new Date(`${game.fixture.date}`);
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        
        time = h + ":" + m
        if (game.fixture.status.short == 'FT'){
            time = 'FT'
        }
        //if game is at halftime, the time should display HT
        else if (game.fixture.status.short == 'HT'){
            time = 'HT'
        }
        //if game is postponed PST, the time should display Postp.
        //if game has not started NS, the time should display the time for the game
        //if game is cancelled CANC, the time should display Canc
        //if game has entered extra time, the time should display ET
        //if game is in penalty stage, the time should display pen
        //if the game is in progress, the time should display time elapsed
        else if (game.fixture.status.short == 'PST'){
            time = 'Postp.'
        } else if (game.fixture.status.short == 'NS'){
            time = time
        } 
        else if (game.fixture.status.short == 'CANC'){
            time = 'Canc'
        } 
        else if (game.fixture.status.short == 'ET'){
            time = 'ET'
        } 
        else if (game.fixture.status.short == 'P'){
            time = 'Pen'
        } 
        else{
            time = game.fixture.status.elapsed +"'"
        }
        return time
    }

    return (
        <div>
            {matches?.filter(game => 
                game.fixture.status.long != 'Match Finished' &&
                game.fixture.status.short != 'PST' &&
                game.fixture.status.short != 'CANC')
            ?.map(game => (
                <div className="match" key={game.fixture.id}>
                    <Link className="match-arr" to={`/game/${game.fixture.id}`}> 
                        <div className="league">
                            <div className="flag"><img src={game.league.logo} alt="country flag"/></div>
                            <div className="name">{game.league.country}</div>
                        </div>
                        <div className='time'>{getTime(game)}</div>
                        <div className="game">
                            <div className="home_team"><p>{game.teams.home.name}</p><img src={game.teams.home.logo} alt="home logo" /></div>
                            <div className="score"><span className="home_score">{game.goals.home==null ? '' : game.goals.home}</span>-<span className='away_score'>{game.goals.away==null ? '' : game.goals.away}</span></div>
                            <div className="away_team"><img src={game.teams.away.logo} alt="away logo" /><p>{game.teams.away.name}</p></div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Games
