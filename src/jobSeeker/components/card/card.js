import "./card.css";
import { useState } from "react";
import Thetan from '../../../assets/thetan f.png';
import WidiLand from '../../../assets/Widi.png'
import Gods from '../../../assets/GodsUnchained.png'
import Axie from '../../../assets/Axie.png'

const Card = ({ setClickedCard, data, setdata }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = (id) => {
    setClickedCard(id);
    setIsClicked(true);
    setdata(data)
  };

  return (
    <div
      className={isClicked ? "activeCard" : "card"}
      onClick={() => handleCardClick(1)}
    >
      <div className="card-image">
          <img src={data.game == 'Axie' ? Axie  : data.game == 'Thetan Arena' ? Thetan : data.game == 'Gods Unchained' ? Gods : WidiLand} className="cardImage"/>
      </div>
      <div className="card-details">
      <div className="card-title">
        <div className="title">
          <h4>{data.title}</h4>
        </div>
      </div>
        <div className="detail">
          <span className="price">{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
