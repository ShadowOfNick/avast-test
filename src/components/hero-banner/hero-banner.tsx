import HeroImage from './img/hero_img.png';

export const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <h1 className="hero-banner__title">
        How about building a supreme comfort zone?
      </h1>

      <p className="hero-banner__caption">
        We all want to live in comfort, so why not build a plush fort for 
        yourself <strong>just because</strong> you can?
        Compile your cushions and bridge your blankets to create a comfy fortress to browse in.
        To strengthen privacy in your soft sanctuary, you've still got time to get
        1 year of <strong>Avast AntiTrack for only £16.99.</strong>
      </p>

      <img
        src={HeroImage}
        alt="Hero banner"
        className="hero-banner__image"
      />
    </div>
  );
};