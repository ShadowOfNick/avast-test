import Logo from './img/Avast_logo.png';

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a className="navbar__link" href="https://www.avast.com/">
        <img src={Logo} alt="Avast Logo" className="navbar__link__img" />
      </a>
    </div>
  );
};
