import React from 'react';


function Header() {

    const handleClick = () => {
        alert('Button Clicked!')
    };

    return(
        <section id='headerLog'>
            <img id='kafopticonbg' src='../assets/kafopticonbg.png'></img>
            {/* <h1 id='title'>KafOpticon</h1> */}
            <div className='formContainer'>
                <form id='mainform'>
                    <input id='input' placeholder='Cluster URL'></input>
                    <button id="submitbutton" onClick={handleClick}>Submit</button>
                </form>
            </div>
            
        </section>
    )
};


export default Header;