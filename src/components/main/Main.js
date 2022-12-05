import "./Main.css";

import Video from "./Video";

function Main() {
    const videos = [
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
        {
            thumbnail: "https://i3.ytimg.com/vi/OnylCjJqQdQ/maxresdefault.jpg",
            title: "THIS IS WHY *RAVENOUS HYDRA* IS SCHEDULED TO BE NERF",
            author: "이렐킹 IRELKING",
            views: 1,
            time: Date("22/11/2022"),
        },
    ];
    return (
        <div className="Main">
            {videos.map((props) => (
                <Video props={props} />
            ))}
        </div>
    );
}

export default Main;
