import "./TrendingGames.scss";
import { nanoid } from "nanoid";
import rec23 from "../../assets/img/Rectangle 23.png";
import rec24 from "../../assets/img/Rectangle 24.png";
import rec25 from "../../assets/img/Rectangle 25.png";
import rec26 from "../../assets/img/Rectangle 26@3x.png";
import rec4 from "../../assets/img/Rectangle 4.png";
import { BsFire } from "react-icons/bs";

const games = [
  { id: nanoid(), img: rec23, followers: 40 },
  { id: nanoid(), img: rec24, followers: 40 },
  { id: nanoid(), img: rec25, followers: 40 },
  { id: nanoid(), img: rec26, followers: 40 },
];

const TrendingGames = () => {
  return (
    <section className="trending ">
      <div className="trending-cont container">
        <div className="trending-header ">
          <h2 className="trending-header_h2">Currently Trending Games</h2>
          <button className="see-all-btn">SEE ALL</button>
        </div>

        <div className="games-grid ">
          {games.map((elm) => (
            <div className="game-card" key={elm.id}>
              <div className="card-img-box">
                <img src={elm.img} alt="Game" />
              </div>
              <div className="card-info">
                <span className="followers-count">
                  <BsFire style={{ color: "#fff", paddingRight: "7px" }} />
                  {elm.followers}k Followers
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="big-text ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="banner ">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img src={rec4} alt={"rec4"} />
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
