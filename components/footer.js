const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p id="copyright">Copyright © {currentYear}</p>
        <div className="socialMediaIcons"></div>
      </div>
    </div>
  );
}
