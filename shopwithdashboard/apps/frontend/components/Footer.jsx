import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="inner-wrapper">
          <div className="footer-menu">
            <span>دوره های آکادمی در یوتیوب</span>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@frontendcoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ری اکت
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ریداکس
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره Next.js
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  سایت آکادمی
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>دوره های آکادمی</span>
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ری اکت
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره ریداکس
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  دوره Next.js
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  سایت آکادمی
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>راه‌های ارتباطی</span>
            <ul className="contact">
              <li>
                <a
                  href="https://instagram.com/frontendcoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اینستاگرام
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dev-nasrin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  لینکدین
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/programmer4006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تلگرام
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <div className="container-footer">
          <p>© {new Date().getFullYear()} Nasrin Mokhtari Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;