import React, { useState } from "react";
import { useEffect } from "react";
import './Matchlists.css';
import Matchinfo from "./Matchinfo";

const Matchlist = () => {
    const [data, setData] = useState({});
    const [matchData, setMatchData] = useState({});


    const getdata = async () => {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=4a387b20-2c73-49ca-a7a5-9cb5e74e671e&offset=0');
        setData(await response.json());

    }

    // const showinfo = (id) => {
    //     console.log( id );
    // }

    useEffect(() => {
        getdata()
    }, []);

    // console.log(data);
    return (
        <div className="box">
            <ul>
                {data?.data?.map((element) => {
                    // console.log(element);
                    return (<aside key={element.id}>
                        {/* {console.log(element.matchType)} */}
                        {/* {element.matchType !== "test" ? ( */}
                            <li className="List">
                                <button onClick={() => { setMatchData(element) }} className="button">info</button>
                                {element.teams[0]} vs {element.teams[1]}
                            </li>
                        {/* ) : ("")} */}

                    </aside>

                    )
                })}
            </ul>

            <div>
                {/* {console.log('asd ==== ', matchData === {})} */}
                {Object.keys(matchData).length !== 0 ? (
                    <Matchinfo
                        data={matchData}
                    />
                ) : (null)}
            </div>
        </div >


    )



}

export default Matchlist;