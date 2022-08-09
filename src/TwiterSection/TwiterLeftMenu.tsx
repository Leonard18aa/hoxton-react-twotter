export function TwitterLeftMenu() {
    return (
        <>
        <div className='twiterLeftPage'>
        <button className="TweetLogo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" width={30} alt="" />
        </button>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/15/15766.png" width={20} alt="" />
          <h3>Home</h3>
        </button>
        <button>
          <img src="https://w7.pngwing.com/pngs/421/641/png-transparent-sharp-logo-musical-note.png" width={20} alt="" />
          <h3>Explore</h3>
        </button>
        <button>
          <img src="https://toppng.com/uploads/preview/youtube-logo-transparent-square-for-kids-notification-bell-icon-11562857378pfhstovenl.png" width={20} alt="" />
          <h3>Notifications</h3>
        </button>
        <button>
          <img src="https://toppng.com/uploads/preview/email-icon-transparent-background-11549825133qbltljgp1w.png" width={20} alt="" />
          <h3>Messages</h3>
        </button>
        <button>
          <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-4-1/512/165-512.png" width={20} alt="" />
          <h3>Bookmark</h3>
        </button>
        <button>
          <img src="https://www.clipartmax.com/png/middle/422-4223422_to-do-list-free-icon-logo-paper-list.png" width={20} alt="" />
          <h3>Lists</h3>
        </button>
        <button>
          <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png" width={20} alt="" />
          <h3>Profile</h3>
        </button>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/128/152/152528.png" width={20} alt="" />
          <h3>More</h3>
        </button>
        <div className="tweetButton">
        <button className="tweetButtonTweet">Tweet</button>
        </div>
        </div>
        </>
    )
}