import Tab from './Tab';
import {ReactComponent as MalDetectText} from "../icons/MalDetect_Text.svg";

const Home = () => {

  return (
    <div className="container">
      <div className="wrapper">
        <header className="text-primary">
          <MalDetectText />
        </header>
        <p className="about">
          Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.
        </p>
        <div>
          <Tab />
        </div>
      </div>
    </div>
  );
}

export default Home;
