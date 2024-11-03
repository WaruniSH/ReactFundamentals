import React from "react";

function Phone(props){
    
    return(
        <React.Fragment>
        <div>
            <li>{props.phone}</li>
        </div>

        </React.Fragment>
    );
}

export default Phone;