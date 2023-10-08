import AntiTrackImage from './img/antitrack-big.png'
import CheckIcon from './img/30d_icon.png'
import PcIcon from './img/1y_icon.png'

export const AntiTrackBig: React.FC = () => {
  return (
    <div className="anti-track-big">
      <div className="anti-track-big__wrapper">
        <img className="anti-track-big__icon" src={AntiTrackImage} alt="AntiTrack" />
        
        <h2 className="anti-track-big__title">
          Avast AntiTrack
        </h2>

        <p className="anti-track-big__price">
          <strong>£16.99</strong> / first year
        </p>

        <button className="anti-track-big__button">
          Get it now
        </button>

        <div className="anti-track-big__list-item">
          <img src={CheckIcon} alt="check" />
          <p>
            30-day money-back guarantee
          </p>
        </div>

        <div className="anti-track-big__list-item">
          <img src={PcIcon} alt="pc" />
          <p>
            1-year subscription for one device
          </p>
        </div>

        <div className="anti-track-big__list-item">
          <p>
            Avallable on vindows
          </p>
        </div>
      </div>

      <p className="anti-track-big__text">
        After the first year, it automatically renews every year at £49.99 unless canceled*
      </p>
    </div>
  );
};
