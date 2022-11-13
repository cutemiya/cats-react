import Card from "./Card";
import {favourites_images} from "./Card";
export default function Favourites() {
    console.log(favourites_images)
    return (
        <div className="catalog__container">
            {favourites_images.map((url) => (
                <Card src={url} type={1}/>
            ))}
        </div>
    )
}
