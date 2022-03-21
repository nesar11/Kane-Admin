import React from 'react'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Category,
  FileCopy,
  Restaurant
  
} from "@material-ui/icons";
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
          <li className="sidebarListItem ">
            <Storefront className='sidebarIcon'/>
            Outlet
          </li>
          <li className="sidebarListItem">
            <Restaurant  className='sidebarIcon' />
            Table
          </li>
          <li className="sidebarListItem">
            <Category  className='sidebarIcon' />
            Category
          </li>
          <li className="sidebarListItem">
            <Storefront  className='sidebarIcon' />
            Product
          </li>
          <li className="sidebarListItem">
            <FileCopy  className='sidebarIcon' />
            order
          </li>
          <li className="sidebarListItem">
            <AttachMoney  className='sidebarIcon' />
            Transaction
          </li>
        </ul>

      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <h3 className="sidebarTitle">Notification</h3>
          <li className="sidebarListItem">
            <MailOutline className='sidebarIcon'/>
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed   className='sidebarIcon' />
            Feedback
          </li>

        </ul>

      </div>
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <h3 className="sidebarTitle">Staff</h3>
          <li className="sidebarListItem">
            <WorkOutline  className='sidebarIcon'/>
            Manage
          </li>
          <li className="sidebarListItem ">
            <LineStyle className='sidebarIcon'/>
            Users
          </li>
          <li className="sidebarListItem">
            <Timeline  className='sidebarIcon' />
            Analytics
          </li>
          <li className="sidebarListItem">
            <Report   className='sidebarIcon' />
            Report
          </li>
        </ul>

      </div>
    </div>
      
    </div>
  )
}
