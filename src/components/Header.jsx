import React from 'react';


function Header() {

    const handleClick = () => {
        alert('Button Clicked!')
    };

    return(
        <section id='headerLog'>
            <img id='kafopticonbg' src='../assets/kafopticonbg.png'></img>
            <div className='formContainer'>
                <form id='mainform' action="http://localhost:3010/address" method="post">
                    <input id='input' placeholder='Cluster URL' name="address"></input>
                    <button id="submitbutton" onClick={handleClick}>Submit</button>
                </form>
            </div>
            
        </section>
    )
};


export default Header;