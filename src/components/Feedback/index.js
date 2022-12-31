// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedbackGiven: false,
  }

  onSelectFeedback = () => {
    this.setState({feedbackGiven: true})
  }

  feedbackOptions = props => {
    const {name, imageUrl, id} = props
    return (
      <li className="feedback-option" key={id}>
        <img
          src={imageUrl}
          alt={name}
          className="feedback-image"
          onClick={this.onSelectFeedback}
        />
        <p className="feedback-name">{name}</p>
      </li>
    )
  }

  render() {
    const {feedbackGiven} = this.state
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData

    let feedbackPage

    if (feedbackGiven === false) {
      feedbackPage = (
        <div className="feedback-container">
          <h1 className="feedback-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="feedback-options">
            {emojis.map(eachItem => this.feedbackOptions(eachItem))}
          </ul>
        </div>
      )
    } else {
      feedbackPage = (
        <div className="thankyou-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
          <h1 className="thankyou">Thank You!</h1>
          <p className="thankyou-description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="feedback-bg-container">{feedbackPage}</div>
  }
}

export default Feedback
