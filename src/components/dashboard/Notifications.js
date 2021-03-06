import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content notification-container">
          <span className="card-title black-text">Notifications</span>
          <ul className="notifications">
            { notifications && notifications.map((notification) => {
              return (
                <li key={ notification.id }>
                  <span className="purple-text text-accent-3">{ notification.user } </span>
                  <span>{ notification.content }</span>
                  <div className="grey-text text-darken-3 note-date">
                    { moment(notification.time.toDate()).fromNow() }
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications