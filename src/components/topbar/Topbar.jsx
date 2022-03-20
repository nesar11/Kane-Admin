import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topLeft">
              <span className="logo">
                <img src="logo.PNG" alt="logo" />
              </span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBagde">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBagde">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Settings />
                 
              </div>
              <img src="https://images.pexels.com/photos/9608547/pexels-photo-9608547.jpeg" alt="" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}
