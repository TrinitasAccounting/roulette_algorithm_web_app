
import CountdownTimer from "./CountdownTimer";


import { useState } from "react";



function Timer() {

    const [accessGranted, setAccessGranted] = useState(false)




    // onClick of button will set the state to positive access if the code is correct
    function handleClickToUnlock() {
        setAccessGranted(!accessGranted)

        startTimerClick()
    }



    // timer that will set the state to false again once 
    function startTimerClick() {
        setTimeout(() => {
            setAccessGranted(!accessGranted);
        }, 2000);
    }


    return (
        <>
            {!accessGranted ?
                <div style={{ color: 'red' }}>
                    <h1>NO Acess</h1>
                </div>

                :

                <div style={{ color: 'green' }}>
                    <h1>YES Acess</h1>
                </div>
            }
            <button onClick={handleClickToUnlock}>Unlock</button>

            <button onClick={startTimerClick} style={{ padding: '1px', margin: '10px' }}>Start Timer</button>

            {/* Passing the accessGranted down so when the timer runs out, then the access can switch back */}
            {accessGranted ?
                <CountdownTimer setAccessGranted={setAccessGranted} accessGranted={accessGranted} />
                :
                <h2>No timer because no access</h2>
            }
        </>
    )
}

export default Timer;