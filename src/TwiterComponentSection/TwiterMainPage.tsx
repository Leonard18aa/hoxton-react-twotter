import "./TwiterMainPage.css";

import { FaRegCommentDots } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import { useState } from "react";

const [counter, setCounter] = useState(0);
const [posts, setPosts] = useState(
  [
  {
    id: 1,
    img: "https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png",
    name: "Leonard Lleshaj",
    postImg:
      "https://images.pexels.com/photos/5717750/pexels-photo-5717750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    commentIcon: <FaRegCommentDots />,
    reTweetIcon: <FaRetweet />,
    likeIcon: <AiFillHeart />,
    shareIcon: <MdOutlineIosShare />,
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png",
    name: "Nicolas Marcora",
    postImg:
      "https://www.bratislavashootingclub.com/wp-content/uploads/2015/12/steamworkshop_webupload_previewfile_235024238_preview-e1453310947321.jpg",
    commentIcon: <FaRegCommentDots />,
    reTweetIcon: <FaRetweet />,
    likeIcon: <AiFillHeart />,
    shareIcon: <MdOutlineIosShare />,
  },
]);

export function TwiterMainPage() {


  return (
    <div className="twiterMainPage">
      {posts.map((post) => {
        return (
          <div className="FirstPost">
            <div className="Username">
              <img src={post.img} width={30} alt="" />
              <p>{post.name}</p>
            </div>
            <img src={post.postImg} width={550} alt="" />
            <span className="Comments">
              {post.commentIcon}
              {post.reTweetIcon}
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                {post.likeIcon}
                <h1>{counter}</h1>
              </button>
              {post.shareIcon}
            </span>
          </div>
        );
      })}
    </div>
  );
}
