import Card from "./Card";
import "./css/Catalog.css"
import {favourites_images} from "./Card";

const url = {
    prefixUrl: "https://www.reddit.com/r/cats/top/.json"
}

function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function urlImages(response) {
    let json = JSON.parse(response)
    let url;
    let urlArray = [];

    for (let i = 0; i < 25; i++) {
        url = json["data"]["children"][i]["data"]["url"]
        let format = url.slice(-4)
        if (format === ".jpg" || format === ".png") {
            if (favourites_images.indexOf(url) === -1) {
                urlArray.push(url)
            }
        }
    }
    return urlArray
}

export default function Catalog() {

    return (
        <div className="catalog__container">
            {urlImages(httpGet(url.prefixUrl)).map((url) => (
                <Card src={url} type={0}/>
            ))}
        </div>
    )
}