import React from 'react';

function Header() {
    return(
        <section id='headerLog'>
            <img id='kafopticonbg' src='../../assets/kafopticonbg.png'></img>
            <h1 id='title'>KafOpticon</h1>
            <form>
                <input placeholder='Cluster URL'></input>
                <button id="submitbutton">Submit</button>
            </form>
        </section>
    )
};

export default Header;