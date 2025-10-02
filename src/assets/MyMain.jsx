import { useState, useEffect } from "react";

function MyMain() {
    const [actors, setActors] = useState([])
    const [actress, setActress] = useState([])
    const [allActors, setAllActors] = useState([])

    function fetchactors() {
        axios.get('https://lanciweb.github.io/demo/api/actors/')
            .then((res) => setActors(res.data))
    }
    function fetchactress() {
        axios.get('https://lanciweb.github.io/demo/api/actresses/')
            .then((res) => setActress(res.data))
    }

    useEffect(fetchactors, []);
    useEffect(fetchactress, []);
    // console.log(actors, actress);

    return (
        <main>
            {actors.map(a => (
                <div key={a.id} className="card">
                    <h2 className="actor-name">{a.name}</h2>
                    <img src={a.image} alt={a.name} className="actor-pic" />
                    <p className="birthyear">{a.birth_year}</p>
                    <p className="nationality">{a.nationality}</p>
                    <p className="bio">{a.biography}</p>
                    <p className="awards">{a.awards}</p>
                </div>
            ))}
        </main>
    )
}

export default MyMain