'use client'

export default function Error({error, reset}){
    //console.log(error)
    return (
        <div>
            <h4>에러</h4>
            <button onClick={()=>{ reset() }}>리셋</button>
        </div>
    )
}