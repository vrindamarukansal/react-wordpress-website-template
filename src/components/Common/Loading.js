import React from 'react'
const Loading = (props)=>{
    return(
    <div className="container d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
        <div className="spinner-border align-items-center" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <br/>
        <p>Loading</p>

    </div>
    )
}

export default Loading