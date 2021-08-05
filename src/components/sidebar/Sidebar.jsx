import "./sidebar.css";
import { DashboardRounded, AssessmentOutlined, RecentActorsRounded, DonutSmall,
         SupervisedUserCircleRounded, SettingsRounded, ExitToApp } 
from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarLogo">
                        <img src="C:\Users\Daniel Tshibangu\Desktop\risk-project\public\external-content.duckduckgo.com.png" alt="#"/>
                    </div>
                    
                    {/* <div className="sidebarProfile">
                        <div className="profilePic"></div>
                    </div> */}
                    <ul className="sidebarList main-menu">
                        <li className="sidebarListItem dashboard">
                            <DashboardRounded className="sidebarIcon" />
                            Dashboard
                        </li>
                        <li className="sidebarListItem analytics">
                            <AssessmentOutlined className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem contact">
                            <RecentActorsRounded className="sidebarIcon" />
                            Contact Us
                        </li>
                        <li className="sidebarListItem risk-overview">
                            <DonutSmall className="sidebarIcon"/>
                            Risk Overview
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Settings</h3>
                    <ul className="sidebarList settings">
                        <li className="sidebarListItem help">
                            <SupervisedUserCircleRounded className="sidebarIcon" />
                            Help
                        </li>
                        <li className="sidebarListItem settings">
                            <SettingsRounded className="sidebarIcon" />
                            Settings
                        </li>
                        <li className="sidebarListItem logout">
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarTitle notification">
                    </ul>
                </div>
            </div>
        </div>
    );
}