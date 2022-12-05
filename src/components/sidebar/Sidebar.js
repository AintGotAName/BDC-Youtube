import "./Sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import AnimationIcon from "@mui/icons-material/Animation";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryOutlined from "@mui/icons-material/VideoLibraryOutlined";

function Sidebar() {
    return (
        <div className="Sidebar">
            <a href="#">
                <HomeIcon />
                Home
            </a>
            <a href="#">
                <AnimationIcon />
                Shorts
            </a>
            <a href="#">
                <SubscriptionsOutlinedIcon />
                Subscriptions
            </a>
            <a href="#">
                <VideoLibraryOutlined />
                Library
            </a>
        </div>
    );
}

export default Sidebar;
