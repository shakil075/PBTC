import React from "react";

const VideoList = ({ handleVideoPlay, image, urlLink }) => {
    return (
        <div className="videoCard col-md-4 col-sm-6">
            <div className="wrapperVideo">
                <div className="videoImage">
                    <i
                        data-video={urlLink}
                        onClick={handleVideoPlay}
                        class="fa-solid fa-circle-play"
                    ></i>
                    <img src={image} alt="" />
                </div>
                <div className="videoTitle">
                    Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
        </div>
    );
};

export default VideoList;
