function card(props) {

    return (
        <div key={props.id} className="card mt-4">
            <div className="row g-0">

                <img src={props.image} alt={props.name} className="actor-pic col-md-4" />

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">born in {props.birth_year}, <span>{props.nationality}</span> </p>
                        <p className="card-text">{props.biography}</p>
                        <p className="card-text">Awards: {Array.isArray(props.awards) ? props.awards.join(", ") : props.awards}</p>
                        <p className="card-text">Starred in: <br />
                            {Array.isArray(props.known_for) ? props.known_for.join(", ") : props.known_for}</p>
                        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card