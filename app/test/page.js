'use client'
import React, {useEffect, useMemo, useState} from 'react';

function App() {
    //const [number, setNumber] = useState(0)
    const [isKorea, setIsKorea] = useState(true)
    
    
    const location = {
        country: isKorea ? '한국' : '일본'
    }


    useEffect(()=>{
        console.log('useEffect 호출')
        
    },[location])
   

    return (
        <div>
            <p>나라: {location.country}</p>
            <button onClick={()=> setIsKorea(!isKorea)}>비행기</button>
        </div>
    )
}

export default App;