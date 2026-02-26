import "./Card.css"
import image from "../assets/image.png";

const Card = ({title = "Card n", content = "This is the card description n"}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img style={{borderRadius: "10px"}} src={image} alt="image" />
      <p className="content">{content}</p>
    </div>
  )
}

export default Card