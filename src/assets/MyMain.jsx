import { useState, useEffect } from "react";

function MyMain() {
    const [attori, setAttori] = useState([])
    const [attrici, setAttrici] = useState([])

    function fetchAttori() {
        axios.get('https://lanciweb.github.io/demo/api/actors/')
            .then((res) => console.log(res.data))
    }
    function fetchAttrici() {
        axios.get('https://lanciweb.github.io/demo/api/actresses/')
            .then((res) => console.log(res.data))
    }

    useEffect(fetchAttori, []);
    useEffect(fetchAttrici, []);
    // console.log(attori, attrici);

    return (
        <main>

        </main>
    )
}

export default MyMain