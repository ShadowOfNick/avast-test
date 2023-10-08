import AntiTrackIcon from './img/antitrack.png';

export const AntiTrack: React.FC = () => {
  return (
    <div className="anti-track">
      <h2 className="anti-track__title">
        Avast AntiTrack
      </h2>

      <div className="anti-track__bar">
        <div className="anti-track__bar__left-part">
          <div className="anti-track__bar__left-part__icon">
            <img className="anti-track__bar__left-part__icon__image" src={AntiTrackIcon} alt="AntiTrack" />
          </div>

          <p className="anti-track__bar__left-part__price">
            <strong>£16.99</strong> / first year
          </p>
        </div>

        <button className="anti-track__bar__button">
          Buy Now
        </button>
      </div>

      <p className="anti-track__text">
        After the first year, it automatically renews every year at £49.99 unless canceled*
      </p>
    </div>
  );
};
