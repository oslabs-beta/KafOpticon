import React, { useState } from 'react';

function Header() {
  const [clusterURL, setClusterURL] = useState('');
  const [sendToMonitoring, setSendToMonitoring] = useState(false);
  const [sendToAddress, setSendToAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = e => {
    if (e.target.name === 'sendToMonitoring') {
      setSendToMonitoring(e.target.checked);
      setSendToAddress(!e.target.checked);
    } else if (e.target.name === 'sendToAddress') {
      setSendToAddress(e.target.checked);
      setSendToMonitoring(!e.target.checked);
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const portsArray = clusterURL.split(',').map(port => port.trim());

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: portsArray }),
    };

    try {
      let response;
      if (sendToMonitoring) {
        response = await fetch(
          'http://localhost:3010/setup-kafka-monitoring',
          requestOptions,
        );
      } else if (sendToAddress) {
        response = await fetch('http://localhost:3010/address', requestOptions);
      }

      if (response && response.ok) {
        setIsLoading(false);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      alert('Error sending request');
      setIsLoading(false);
    }
  };

  return (
    <section id='headerLog'>
      {isLoading && (
        <div className='loading-alert'>
          Setting up Docker containers, please wait...
        </div>
      )}
      <img
        id='kafopticonbg'
        src='../assets/kafopticon.png'
        alt='Kafopticon Background'></img>
      <div className='formContainer'>
        <form id='mainform' onSubmit={handleSubmit}>
          <input
            id='input'
            placeholder='JMX Ports'
            name='address'
            value={clusterURL}
            onChange={e => setClusterURL(e.target.value)}></input>

          <div className='checkboxes'>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                name='sendToMonitoring'
                checked={sendToMonitoring}
                onChange={handleCheckboxChange}
              />
              Send to Docker Monitoring
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                name='sendToAddress'
                checked={sendToAddress}
                onChange={handleCheckboxChange}
              />
              Send to Local Monitoring
            </label>
          </div>
          <button id='submitbutton' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Header;
