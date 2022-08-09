export function TwiterMainPage() {
  return (
    <div className="twiterMainPage">
      <div className="FirstPost">
        <div className="Username">
            <img src="https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png" width={30} alt="" />
            <p>Leonard Lleshaj</p>
        </div>
        <img src="https://images.pexels.com/photos/5717750/pexels-photo-5717750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={550} alt="" />
        <span className="Comments">
        <i className="fa-solid fa-comment-dots"></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </span>
      </div>
      <div className="SecondPost">
      <div className="Username">
            <img src="https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png" width={30} alt="" />
            <p>Nicolass Marcora</p>
        </div>
        <img src="https://www.bratislavashootingclub.com/wp-content/uploads/2015/12/steamworkshop_webupload_previewfile_235024238_preview-e1453310947321.jpg" width={550} alt="" />
        <span className="Comments">
        <i className="fa-solid fa-comment-dots"></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </span>
      </div>
    </div>
  );
}
