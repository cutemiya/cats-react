import "./css/Card.css"
import {useState} from "react";

export let favourites_images = []

export default function Card({ src, type}) {
    const [showModal, setShowModal] = useState(true);
    let title = !type ? "Like" : "Remove"

    return (
        <div className="card__container">
            <div className="card__container_">
                {showModal && <div className="like_button" onClick={() => {
                    let state = showModal ? false : true
                    setShowModal(state)
                    if (!type) {
                        favourites_images.push(src)
                    } else {
                        favourites_images.splice(favourites_images.indexOf(src), 1)
                    }
                }}>{title}</div>}
                {showModal && <img src={src} className="card_image__container" alt={src} />}
            </div>
        </div>

    )
}
