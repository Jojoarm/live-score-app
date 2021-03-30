import React, {useState, useEffect} from 'react';

function GameInfo( {match} ) {

    
    useEffect(() => {
        fetchItem();
        
     }, [])
 
    //  console.log('match:', match)

     const [matches, setMatches] = useState([])

     
     //Generate the date for the day 
    const d = new Date()
    //change the date gotten to YYYY-MM-DD format
    const date = d.toISOString().slice(0, 10)
     
    //  console.log(match)
     const fetchItem = async () => {
         const fetchItem = await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?id=${match.params.id}`, {
            "method": "GET",
            "headers": {
                // "x-rapidapi-key": "fd78c35180msh576d5a8b2d0a7e4p1a4a3ajsn3270b395de52",
                // "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
                "x-rapidapi-key": "b02247c256mshf46f822c662c7c6p14da13jsn6c90e280d0e9",
		        "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
         const matches = await fetchItem.json();
         setMatches(matches.response[0])
         
     }
    //  console.log(matches)

     let home_team = matches?.teams?.home?.name
     let away_team = matches?.teams?.away?.name

    //Function to determine the event in a match
    const eventType= (game) =>{
        let eventDisplay = ''
        if (game.type == "Goal"){
            eventDisplay = <i className="far fa-futbol"></i>
        }
        else if (game.type=="Card" && game.detail=="Yellow Card"){
            eventDisplay = <i className="fas fa-square yellow"></i>
        }
        else if(game.type =="Card" && game.detail=="Red Card"){
            eventDisplay = <i className="fas fa-square red"></i>
        }
        else if(game.type == "subst"){
            eventDisplay = <p><i className="fas fa-tshirt"></i></p>
        }
        else {
            eventDisplay = <p></p>
        }
        return eventDisplay
    }

    return (
        <div className="game-container">
            <div className="league-details">
                <div className="league-info">
                    <img src={`${matches?.league?.flag}`} alt="country logo" />
                    <span>{matches?.league?.country} - {matches?.league?.name}</span>
                </div>
                <div className="date-info">{date}</div>
            </div>
            <div className="match-summary">
                <div className="home-info">
                    <img src={`${matches?.teams?.home?.logo}`} alt="home-logo" />
                    <p className="home-name">{matches?.teams?.home?.name}</p>
                </div>
                <div className="game-score">
                    <span className='home-score'>{matches?.goals?.home== null ? "" : matches?.goals?.home}</span>-<span className='away-score'>{matches?.goals?.away== null ? "" : matches?.goals?.away}</span>
                </div>
                <div className="away-info">
                    <img src={`${matches?.teams?.away?.logo}`} alt="away-logo" />
                    <p className="away-name">{matches?.teams?.away?.name}</p>
                </div>    
            </div>
            <div className="events">
                <div className="match-events">Events</div>
                <div className="events-action">
                    <div className="home__events">
                        {matches?.events?.filter(game => 
                            game?.team.name === home_team)
                            ?.map(game => (
                                
                                    <div className="event__type">
                                        <p>{game.time.elapsed}</p>
                                        <p>{game.player.name}</p>
                                        <p>{eventType(game)}</p>
                                        {/* <p>{game.type == 'Goal' ? <i className="far fa-futbol"></i> : ""}</p>
                                        <p>{game.type == 'sust' ? <i className="fas fa-tshirt"></i> : ""}</p> */}
                                    </div>
                               
                        ))}
                    </div>
                    <div className="away__events">
                        {matches?.events?.filter(game => 
                            game?.team.name === away_team)
                        ?.map(game => (
                            
                                <div className="event__type">
                                    <p>{game.time.elapsed}</p>
                                    <p>{game.player.name}</p>
                                    <p>{eventType(game)}</p>
                                    {/* <p>{game.type == 'Goal' ? <i className="far fa-futbol"></i> : ""}</p> */}
                                </div>
                           
                        ))}
                    </div>
                </div>
            </div>
            <div className="match-details">
                <div className="game-details">Details</div>
                <div className="referee"><small>Referee:</small> {matches?.fixture?.referee} </div>
                <div className="venue"><small>Stadium:</small> {matches?.fixture?.venue?.name} - {matches?.fixture?.venue?.name}</div>
            </div>
        </div>
    )
}


export default GameInfo


// ("https://api-football-beta.p.rapidapi.com/fixtures/events?fixture=37899", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b02247c256mshf46f822c662c7c6p14da13jsn6c90e280d0e9",
// 		"x-rapidapi-host": "api-football-beta.p.rapidapi.com"
