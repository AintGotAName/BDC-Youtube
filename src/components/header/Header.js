import "./Header.css";

import YouTubeIcon from "@mui/icons-material/YouTube";
import UploadIcon from "@mui/icons-material/Upload";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function Header() {
    return (
        <div className="Header">
            <div>
                <MenuIcon />
                <YouTubeIcon htmlColor="red" />
                <b>YouTube</b>
            </div>
            <div>
                <input></input>
                <SearchIcon />
                <KeyboardVoiceIcon />
            </div>
            <div>
                <UploadIcon />
                <NotificationsNoneOutlinedIcon />
                <AccountCircleOutlinedIcon />
            </div>
        </div>
    );
}

export default Header;
