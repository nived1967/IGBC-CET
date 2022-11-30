import React from "react";
import members from "./teamMembers.js";

function Team() {
    return ( 
        <div className="team-container" id="team">
            <div className="heading">
                <h1>EXECUTIVE BOARD</h1>
            </div>
            <div className="cards-container">
                {
                    members.slice(0,1).map((member, index) => {
                            return (
                                <div className="card">
                                    <img src={member.photo} alt={member.alt} />
                                    <h2>{member.name}</h2>
                                    <p>{member.title}</p>
                                </div>
                            )    
                        }
                    )
                }
            </div>
            <div className="cards-container">
                {
                    members.slice(1).map((member, index) => {
                            return (
                                <div className="card">
                                    <img src={member.photo} alt={member.alt} />
                                    <h2>{member.name}</h2>
                                    <p>{member.title}</p>
                                </div>
                            )    
                        }   
                    )
                }
            </div>
        </div>
    )
}

export default Team;


// WEBPACK FOOTER //
// ./src/components/Team.jsx