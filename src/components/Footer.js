import "./Footer.css";

const Footer = ({ brandName = "SS Hexa", className = "footer" }) => {
  return (
    <footer className={className}>
      <p>Copyright &copy; {new Date().getFullYear()} {brandName} | Powered by {brandName}</p>
    </footer>
  );
};

export default Footer;
