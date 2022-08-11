import { BsFillHouseDoorFill } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { AiFillBell } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillBookmarkFill } from "react-icons/bs"
import { BsCardChecklist } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { CgMenuRound } from "react-icons/cg"
import './TwiterLeftMenu.css'

import { Link } from "react-router-dom"




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
        <Link to='/homePage'>
        <button>
          <BsFillHouseDoorFill />
          <h3>Home</h3>
        </button>
        </Link>

        {/* <button>
          <BsFillHouseDoorFill />
          <h3>Home</h3>
        </button> */}
        <button>
          <FaHashtag />
          <h3>Explore</h3>
        </button>
        <button>
          <AiFillBell />
          <h3>Notifications</h3>
        </button>
        <button>
          <AiOutlineMail />
          <h3>Messages</h3>
        </button>
        <button>
          <BsFillBookmarkFill />
          <h3>Bookmark</h3>
        </button>
        <button>
          <BsCardChecklist />
          <h3>Lists</h3>
        </button>
        <button>
          <FaUserAlt />
          <h3>Profile</h3>
        </button>
        <button>
          <CgMenuRound />
          <h3>More</h3>
        </button>
        <div className="tweetButton">
          <button className="tweetButtonTweet">Tweet</button>
        </div>
      </div>
    </>
  );
}
