import { Link } from 'react-router-dom';

export default function Commerce() {
  const commerceCareers = [
    { id: 'investment-banker', title: 'Investment Banker', desc: 'Raise capital for corporations and governments while advising on major financial transactions.' },
    { id: 'business-analyst', title: 'Business Analyst', desc: 'Bridge the gap between IT and business operations to optimize workflows and scale enterprises.' },
    { id: 'university-commerce-professor', title: 'University Professor (Business & Commerce)', desc: 'Bridging economic theory and corporate reality to develop the next generation of global business leaders.' },
    { id: 'chartered-accountant', title: 'CA (Chartered Accountant)', desc: 'Manage accounting, auditing, taxation, and financial planning for businesses and individuals.' },
    { id: 'bank-clerk', title: 'Bank PO/Clerk', desc: 'Handle banking operations, customer services, financial transactions, loans, and account management.' },
    { id: 'sales-executive', title: 'Sales Executive', desc: 'Promote products or services, build customer relationships, and achieve company sales targets.' }
  ];

  return (
    <div className="stream-page-container">
      <div className="stream-hero commerce-bg">
        <h1>Commerce</h1>
        <p>Strategize & Scale. Master the language of global business. Analyze market trends, manage capital, and drive the strategic growth behind the world's most successful startups.</p>
      </div>

      <h2 className="section-title">Explore Commerce Trajectories</h2>
      
      <div className="career-options-grid">
        {commerceCareers.map(career => (
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