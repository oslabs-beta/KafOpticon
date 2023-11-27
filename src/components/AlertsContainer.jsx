import React from "react"

function alertsContainer(){

    const handleClick = () => {
        alert('Button Clicked!')
    };
//accept email and password credentials to forward alerts from grafana to selected emails
    return (
    <section id="alertsContainer">
        <div className="formContainer">
        <form id='emailUserForm' action="http://localhost:3010/alerts" method="post">
            <input id='input' placeholder='Enter email for email alerts' name="emailAddress"></input>
            <input id='input' placeholder='Enter app password for email alerts' name="appPassword"></input>
            <button id="submitbutton" onClick={handleClick}>Submit</button>
        </form>
        </div>
</section>
)
}
export default alertsContainer;