import Card from "./Card";
import "./css/Catalog.css"
import {favourites_images} from "./Card";
import {useState} from "react";

const url = {
    prefixUrl: "https://www.reddit.com/r/cats/.json?after="
}

let after = null

function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function urlImages(response) {
    let json = JSON.parse(response)
    let format;
    let urlArray = [];
    let photoCount = 0;
    let count = 0;

    while (photoCount < 5) {
        let url = json["data"]["children"][count]["data"]["url"]
        format = url.slice(-4)
        if (format === ".jpg" || format === ".png") {
            if (favourites_images.indexOf(url) === -1) {
                photoCount += 1
                after = json["data"]["after"]
                urlArray.push(url)
            }
        }
        count += 1
    }

    return urlArray
}

export default function Catalog() {
    const [cats, setCats] = useState([])

    return (
        <div className="catalog__container">
            <h1>Cats</h1>
            {cats}
            <AddCats cats={cats} setCats={setCats}/>
        </div>
    )
}

function AddCats({setCats}) {
    function handlerAddCats(event) {
        event.preventDefault();
        urlImages(httpGet(url.prefixUrl + after)).map((url) =>
            setCats((cats) => cats.concat(<Card src={url} type={0}/>))
        )
    }

    const buttonStyle = {
        marginLeft: "350px",
        maxWidth: "75px",
        width: "100%",
        background: "#f6bcbc"
    }

    return (
        <button onClick={handlerAddCats} style={buttonStyle}>More cats</button>
    )
}
