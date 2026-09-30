import { Link } from 'react-router-dom';

export default function Science() {
  const scienceCareers = [
    { id: 'medical-professional', title: 'Doctor', desc: 'Cornerstone of the healthcare system, dedicating their lives to diagnosing, treating, and preventing human diseases and injuries.' },
    { id: 'university-science-professor', title: 'University Professor (Science & Engineering)', desc: 'Driving technological innovation through advanced research while mentoring the next generation of STEM professionals.' },
    { id: 'medical-professor', title: 'Medical Professor & Clinical Educator', desc: 'Training the next generation of healthcare professionals through hands-on clinical instruction and advanced medical research.' },
    { id: 'data-scientist', title: 'Data Scientist', desc: 'Extract meaningful insights from vast amounts of data using machine learning and algorithms.' },
    { id: 'research-scientist', title: 'Research Scientist', desc: 'Pioneers of human knowledge, operate at the cutting edge of fields like biotechnology, astrophysics, environmental science, and artificial intelligence.' },
    { id: 'engineer', title: 'Engineer', desc: 'Mathematical, scientific, and technical foundation needed to solve complex real-world problems.' },
    { id: 'aerospace-engineer', title: 'Aerospace Engineer', desc: 'Design, test, and manufacture aircraft, spacecraft, and missiles.' },
    { id: 'software-engineer', title: 'Software Engineer', desc: 'Build the applications, systems, and digital infrastructure of the future.' },
    { id: 'army-officer', title: 'Army Officer', desc: 'manage military operations, training, security missions, and disaster relief activities.' },
    { id: 'air-force-officer', title: 'Air Force Officer', desc: 'Protect the nation’s airspace and operate advanced aircraft, defense systems, and aviation technologies.' },
    { id: 'navy-officer', title: 'Navy Officer', desc: 'protect the country’s maritime borders and manage operations on warships, submarines, and naval bases.' },
    { id: 'defence-scientist', title: 'Defence Scientist (DRDO)', desc: 'Research and develop advanced weapons, communication systems, missiles, and military technologies for national security.' }
  ];

  return (
    <div className="stream-page-container">
      <div className="stream-hero science-bg">
        <h1>Science</h1>
        <p>Innovate & Engineer. Dive into the mechanics of the future, from writing algorithms that power modern tech to engineering sustainable solutions for human health and space exploration.</p>
      </div>

      <h2 className="section-title">Explore Science Trajectories</h2>
      
      <div className="career-options-grid">
        {scienceCareers.map(career => (
          <Link to={`/career/${career.id}`} key={career.id} className="career-card">
            <h3>{career.title}</h3>
            <p>{career.desc}</p>
            <span className="explore-btn">View Path Details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}