import React from "react"
import './Matchinfo.css'

const Matchinfo = (props) => {
    console.log(props.data.matchType);
    console.log(props.data.score.length);
    return (

        props.data.matchType !== "test" ?
            (
                <div className="container">
                    <header className="header">MATCH SUMMARY </header>
                    <span className="date">{props.data.date}</span>
                    <span className="matchType">{props.data.matchType}</span>
                    <span className="versus">{props.data.teams[0]}  vs  {props.data.teams[1]}</span>
                    <h3 className="team">{props.data.teams[0]}</h3>
                    {props.data.score.hasOwnProperty(0) ? teamScore(props.data.score[0]) : ("Match not started")}
                    <h3 className="team">{props.data.teams[1]}</h3>

                    {props.data.score.hasOwnProperty(1) ? teamScore(props.data.score[1]) : (<h3 className="teamscore">-</h3>)}
                    <h4 className="status">{props.data.status}</h4>
                    

                </div>
            ) :
            (
                <div className="container">
                    <header className="header">MATCH SUMMARY </header>
                    <span className="date">{props.data.date}</span>
                    <span className="matchType">{props.data.matchType}</span>
                    <span className="versus">{props.data.teams[0]}  vs  {props.data.teams[1]}</span>
                    <h3 className="team">{props.data.teams[0]}</h3>
                    {props.data.score.hasOwnProperty(0) ? teamScore(props.data.score[0]) : ("Match not started")}
                    <h3 className="team">{props.data.teams[1]}</h3>

                    {props.data.score.hasOwnProperty(1) ? teamScore(props.data.score[1]) : (<h3 className="teamscore">-</h3>)}
                    {props.data.score.hasOwnProperty(2) ?
                        <>
                            <h3 className="team">{props.data.teams[0]}</h3>
                            {teamScore(props.data.score[2])}
                        </> : null}

                    {props.data.score.hasOwnProperty(3) ?
                        <>
                            <h3 className="team">{props.data.teams[1]}</h3>
                            {teamScore(props.data.score[3])}
                        </> : null}
                    <h4 className="status">{props.data.status}</h4>




                </div>
            )

    )
}

const teamScore = scoreData => {
    return (
        <h3 className="teamscore">{scoreData.r}/{scoreData.w} ({scoreData.o})</h3>
    );
}

export default Matchinfo;