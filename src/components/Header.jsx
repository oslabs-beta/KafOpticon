import React from 'react';


function Header() {
    return(
        <section id='headerLog'>
            <img id='kafopticonbg' src='../assets/kafopticonbg.png'></img>
            <div className='formContainer'>
            <form>
                <input placeholder='Cluster URL'></input>
                <button id="submitbutton">Submit</button>
            </form>
            </div>
        </section>
    )
};


export default Header;