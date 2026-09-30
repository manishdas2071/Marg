import Manjit from '../assets/Photos/Manjit.jpeg';
import Suraj from '../assets/Photos/Suraj.jpeg';
import Royel from '../assets/Photos/Royel.jpeg';
import Manash from '../assets/Photos/Manash.jpeg';
import Nabajyoti from '../assets/Photos/Nabajyoti.jpeg';

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Manjit Kumar Das",
      role: "UI/UX, Frontend & backend",
      bio: "Translating complex user journeys into clean, accessible interfaces.",
      image: Manjit
    },
    {
    id: 2,
    name: "Royel Nath",
    role: "Backend & Database",
    bio: "Specializing in the MERN stack to architect scalable and intuitive digital solutions, Backend.",
    image: Royel
    },
    {
      id: 3,
      name: "Suraj Saikia",
      role: "UI/UX",
      bio: "Focused on seamless frontend experiences.",
      image: Suraj
    },
    {
      id: 4,
      name: "Manash Pratim Borah",
      role: "Project Presenter",
      bio: "Guiding the audience through the project's features and workflow.",
      image: Manash
    },
    {
      id: 5,
      name: "Nabajyoti Bhuyan",
      role: "Pitch Strategist",
      bio: "Handling the formal pitch.",
      image: Nabajyoti
    }
  ];

  return (
    <div className="about-page-container">
      
      <div className="about-hero">
        <h1>Charting the Course to Your Future</h1>
        <p>At Marg, we believe that clarity precedes success. Our mission is to bridge the gap between academic potential and industry reality.</p>
      </div>

      <div className="about-story-section">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Marg was born out of Dhemaji Engineering College by a group of engineering students who recognized a fundamental challenge: countless talented individuals struggle to find the exact career trajectory that matches their unique skills and ambitions.
          </p>
          <p>
            By combining modern web technologies like the MERN stack with actionable industry insights, we set out to build a platform that doesn't just list jobs, but actively guides students toward their optimal professional paths. From mastering data structures to preparing for summer internships, we are building the roadmap we wish we had.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet the Visionaries</h2>
        <p className="team-subtitle">The engineering team behind Marg.</p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-avatar" />
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}