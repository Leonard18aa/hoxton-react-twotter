export function TwitterLeftMenu() {
  return (
    <>
      <div className="twiterLeftPage">
        <button className="TweetLogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            width={30}
            alt=""
          />
        </button>
        <button>
          <i className="fa-solid fa-house-user"></i>
          <h3>Home</h3>
        </button>
        <button>
          <i className="fa-regular fa-hashtag"></i>
          <h3>Explore</h3>
        </button>
        <button>
          <i className="fa-solid fa-bell"></i>
          <h3>Notifications</h3>
        </button>
        <button>
          <i className="fa-regular fa-envelope"></i>
          <h3>Messages</h3>
        </button>
        <button>
          <i className="fa-thin fa-bookmark"></i>
          <h3>Bookmark</h3>
        </button>
        <button>
          <i className="fa-thin fa-list-dropdown"></i>
          <h3>Lists</h3>
        </button>
        <button>
          <i className="fa-thin fa-user"></i>
          <h3>Profile</h3>
        </button>
        <button>
          <i className="fa-thin fa-circle-ellipsis"></i>
          <h3>More</h3>
        </button>
        <div className="tweetButton">
          <button className="tweetButtonTweet">Tweet</button>
        </div>
      </div>
    </>
  );
}
