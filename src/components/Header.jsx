import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Investment App Logo" />
      <h1>Investment calculator</h1>
    </header>
  );
};

export default Header;
