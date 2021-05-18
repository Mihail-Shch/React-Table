import React from 'react'

function ChooseData({ onClick }) {
    const smallURL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigURL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


    return (
        <div style={{ width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ marginRight: '10px' }} onClick={() => onClick(smallURL)} className="btn btn-primary">Small Data</button>
            <button onClick={() => onClick(bigURL)} className="btn btn-secondary">Big Data</button>
        </div>
    )
}

export default ChooseData
