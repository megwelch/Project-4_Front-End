import React from "react";

const ShowResults = (props) => {
    let listItem = ''
    if(props.error !== null) {
        return <p>An error has occured</p>
    }
    if (props.data === null) {
        return <p>Loading...</p>
    }
    if (props.data !== null && props.error === null) {
        if (props.data.length === 0) {
            return(
                <p>Sorry, we couldn't find what you were searching for.</p>
            )
        } else {
            listItem = props.data.map((element) => {
                return (
                    <li key={element.show.id} className='list-item'>
                        <div>{element.show.name}</div>
                        <div>
                            {element.show.image ? 
                            (<img src={element.show.image.medium} alt={element.show.name} />)
                            : 
                            (<div className="missing-img-div"><img src=""/><h1 className='text-center'>no photo available</h1></div>)}
                        </div>
                    </li>
                )
            })
        }
    }

    return (
        <ul className="list-container">
            {listItem}
        </ul>
    )
}

export default ShowResults