import {SITE_NAME, DEVELOPER_NAME, CURRENT_YEAR} from "../config";

const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="footer-content">
                <section className="footer-item">
                    <h2><a href="/" className="footer-item-heading">{SITE_NAME}</a></h2>
                    <ul>
                        <li><a href="/" className="text-highlighted footer-item-normal-text">Contact Us</a></li>
                        <li><a href="/" className="footer-item-normal-text">Get Support</a></li>
                        <li><a href="/" className="footer-item-normal-text">How it works</a></li>
                        <li><a href="/" className="footer-item-normal-text">ToS | Privacy Policy</a></li>
                        <li><a href="/" className="footer-item-normal-text">Blog | Releases</a></li>
                    </ul>
                </section>
                <section className="footer-item">
                    <h2><a href="/" className="footer-item-heading">Community</a></h2>
                    <ul>
                        <li><a href="/" className="footer-item-normal-text">Join Community</a></li>
                        <li><a href="/" className="footer-item-normal-text">Vote and Comment</a></li>
                        <li><a href="/" className="footer-item-normal-text">Contributors</a></li>
                        <li><a href="/" className="footer-item-normal-text">Top Users</a></li>
                        <li><a href="/" className="footer-item-normal-text">Community Buzz</a></li>
                    </ul>
                </section>
                <section className="footer-item">
                    <h2><a href="/" className="footer-item-heading">Tools</a></h2>
                    <ul>
                        <li><a href="/" className="footer-item-normal-text">API Scripts</a></li>
                        <li><a href="/" className="footer-item-normal-text">YARA</a></li>
                        <li><a href="/" className="footer-item-normal-text">Desktop Apps</a></li>
                        <li><a href="/" className="footer-item-normal-text">Browser Extensions</a></li>
                        <li><a href="/" className="footer-item-normal-text">Mobile App</a></li>
                    </ul>
                </section>
                <section className="footer-item">
                    <h2><a href="/" className="footer-item-heading">Premium Services</a></h2>
                    <ul>
                        <li><a href="/" className="text-highlighted footer-item-normal-text">Get a demo</a></li>
                        <li><a href="/" className="footer-item-normal-text">Intelligence</a></li>
                        <li><a href="/" className="footer-item-normal-text">Hunting</a></li>
                        <li><a href="/" className="footer-item-normal-text">Graph</a></li>
                        <li><a href="/" className="footer-item-normal-text">API v3 | v2</a></li>
                    </ul>
                </section>
                <section className="footer-item">
                    <h2><a href="/" className="footer-item-heading">Documentation</a></h2>
                    <ul>
                        <li><a href="/" className="footer-item-normal-text">Searching</a></li>
                        <li><a href="/" className="footer-item-normal-text">Reports</a></li>
                        <li><a href="/" className="footer-item-normal-text">API v3 | v2</a></li>
                        <li><a href="/" className="text-highlighted footer-item-normal-text">Use Cases</a></li>
                    </ul>
                </section>
            </div> */}
            <div className="developer-line">
                <p>&copy; {CURRENT_YEAR}  <a href="/">{SITE_NAME}</a> by <a href="https://github.com/krutiksoni">{DEVELOPER_NAME}</a>. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;