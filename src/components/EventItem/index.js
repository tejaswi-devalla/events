// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventData, changeRegistrationStatus, clicked} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEventData
  const isClicked = clicked ? 'event-img border' : 'event-img'

  const onClickEvent = () => {
    changeRegistrationStatus(registrationStatus, id)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={isClicked} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-place">{location}</p>
    </li>
  )
}
export default EventItem
