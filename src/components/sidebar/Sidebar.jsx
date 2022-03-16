import React from 'react'
import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons';
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'> 
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <ul className="sidebarList">

        
          <h3 className="sidebarTitle">Dashboard</h3>
          <li className="sidebarListItem active">
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline  className='sidebarIcon' />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp  className='sidebarIcon' />
            Sales
          </li>
        </ul>

      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">

        
          <h3 className="sidebarTitle">Quick Menu</h3>
          <li className="sidebarListItem active">
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline  className='sidebarIcon' />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp  className='sidebarIcon' />
            Sales
          </li>
        </ul>

      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <h3 className="sidebarTitle">Notification</h3>
          <li className="sidebarListItem active">
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline  className='sidebarIcon' />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp  className='sidebarIcon' />
            Sales
          </li>
        </ul>

      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <h3 className="sidebarTitle">Staff</h3>
          <li className="sidebarListItem active">
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline  className='sidebarIcon' />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp  className='sidebarIcon' />
            Sales
          </li>
        </ul>

      </div>
    </div>
      
    </div>
  )
}
