// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={className}>
      <h1 className="head">{title}</h1>
      <p className="list-para">{description}</p>
      <img src={imgUrl} className="avatar" alt={title} />
    </li>
  )
}

export default CardItem
