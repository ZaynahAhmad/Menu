import React from "react";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeWorkIcon />,
        link: "/home"
    },
    {
    title:"Mail",
    icon:<MarkEmailUnreadIcon />,
    link:"/mail",
    },
    {
    title: "Analytics",
    icon:<AnalyticsIcon />,
    link: "/analytics"
    },
    {
        title:"Dashboard",
        icon:<DashboardCustomizeIcon />,
        link:"/dashboard",
    },
    {
        title:"Friends",
        icon:<PeopleOutlineIcon />,
        link:"/friends",
    },
    {
        title:"Images",
        icon:<FilterBAndWIcon />,
        link:"/Images",
    },
]