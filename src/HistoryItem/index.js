import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-details-container">
      <div className="history-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-container">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
