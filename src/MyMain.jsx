import { useState, useEffect } from "react";
import card from "./assets/card";

function MyMain() {
    const [actors, setActors] = useState([])
    const [actress, setActress] = useState([])
    // const [allActors, setAllActors] = useState([])

    function fetchactors() {
        axios.get('https://lanciweb.github.io/demo/api/actors/')
            .then(res => setActors(res.data))
    }
    function fetchactress() {
        axios.get('https://lanciweb.github.io/demo/api/actresses/')
            .then(res => setActress(res.data))
    }

    useEffect(fetchactors, []);
    useEffect(fetchactress, []);

    return (
        <main>
            <section className="container">

                {actors.map(a => card(a))}
                {actress.map(a => card(a))}
            </section>

        </main>
    )
}

export default MyMain