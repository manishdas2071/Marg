import { Link } from 'react-router-dom';
import image1 from '../assets/Home.png';
import engineer from '../assets/enginee logo.png';
import doctor from '../assets/doctor logo.png';
import scientist from '../assets/scientist logo.png';
import law from '../assets/law logo.png';
import UPSC from '../assets/satyamev-jayate logo.png';

export default function Home() {
  return (
    <>
      <div className="Home">
        <span className="quote1">
          <h1 className="quote">Clarity precedes success</h1>
          <p className="desc">
            Discover your exact career trajectory. Take our precision-based assessment to map your unique skills to real-world industry demands, and build a definitive roadmap for your future.
          </p>
        </span>
        <span>
          <img className="image1" src={image1} alt="Hero Image" />
        </span>
      </div>
      
      <div className="popular">
        <p>Popular Careers</p>
        <div className="options">
          
          <span>
            <Link to="/career/engineer">
              <img src={engineer} alt="Engineer" width="50px" /> Engineer
            </Link>
          </span>
          <span>
            <Link to="/career/medical-professional">
              <img src={doctor} alt="Doctor" width="50px" /> Doctor
            </Link>
          </span>
          <span>
            <Link to="/career/research-scientist">
              <img src={scientist} alt="Scientist" width="50px" /> Scientist
            </Link>
          </span>
          <span>
            <Link to="/career/civil-services">
              <img src={UPSC} alt="Civil Services" width="50px" /> Civil Ser.
            </Link>
          </span>
          <span>
            <Link to="/career/corporate-lawyer">
              <img src={law} alt="Law" width="50px" /> Law
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}