// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const initialState = () => (
    <p className="description">
      Click on an event, to view its registration details
    </p>
  )

  const renderSuccessPage = () => (
    <div className="status-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="icon"
      />
      <h1 className="registration">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="status-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-icon"
      />
      <p className="registration-desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="status-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-icon"
      />
      <h1 className="registration">Registrations Are Closed Now!</h1>
      <p className="registration-desc">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderDescribedOutput = () => {
    const {statusData, storingStatus} = props
    switch (statusData) {
      case storingStatus.success:
        return renderSuccessPage()
      case storingStatus.yetToRegister:
        return renderYetToRegister()
      case storingStatus.closed:
        return renderRegistrationsClosed()
      default:
        return initialState()
    }
  }

  return <div className="right-cont">{renderDescribedOutput()}</div>
}
export default ActiveEventRegistrationDetails
