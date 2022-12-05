import "./Video.css";
function Video({ props }) {
    const { thumbnail, title, author, views, time } = { ...props };
    return (
        <div className="Video">
            <img src={thumbnail} alt={title} />
            <p>
                <b>{title}</b>
            </p>
            <p>{author}</p>
            <p>
                {views} views, {time}
            </p>
        </div>
    );
}
export default Video;
