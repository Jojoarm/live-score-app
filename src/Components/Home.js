import React from 'react'
import Countries from './Countries'
// import Games from './Games'
import './Home.css'
// import Results from './Results'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="games_list">
                    <div className="my_leagues">
                        <div className="league_title">
                            <i className="fas fa-star"></i>
                            <div className='country_list'>Countries</div>
                        </div>
                        <div className="league_names">
                           <Countries />
                        </div>
                    </div>
                </div>

                <div className="match-container">
                    <div className="container">
                        {/* <Games /> */}
                    </div>
                    <div className="results">
                        <h4>Results</h4>
                        <div className="result-container">
                            {/* <Results /> */}
                        </div>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Home
