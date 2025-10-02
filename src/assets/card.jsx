function card(props) {

    return (
        < div key={props.id} className="card" >
            <h2 className="actor-name">{props.name}</h2>
            <img src={props.image} alt={props.name} className="actor-pic" />
            <p className="birthyear">born in {props.birth_year}, <span>{props.nationality}</span> </p>
            <p className="bio">{props.biography}</p>

            {/* meteodo array.isarray necessario per outsmartare axios */}
            <p className="awards">Awards: <br />{Array.isArray(props.awards) ? props.awards.join(", ") : props.awards}</p>
            <p className="films">
                Starred in: <br /><em>{Array.isArray(props.known_for) ? props.known_for.join(", ") : props.known_for}</em>
            </p>
        </div>
    )
}

export default card