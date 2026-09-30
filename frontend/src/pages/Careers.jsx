import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');

  const careerTabs = [
    { id: 'journalist', name: 'Journalist' },
    { id: 'civil-services', name: 'Civil Services' },
    { id: 'research-scientist', name: 'Research Scientist' },
    { id: 'data-scientist', name: 'Data Scientist' },
    { id: 'bank-clerk', name: 'Bank PO/Clerk' },
    { id: 'psychologist', name: 'Psychologist' },
    { id: 'normal-teacher', name: 'Teacher' },
    { id: 'university-science-professor', name: 'University Professor (Science & Engineering)' },
    { id: 'medical-professor', name: 'Medical Professor & Clinical Educator' },
    { id: 'university-arts-professor', name: 'University Professor (Arts & Humanities)' },
    { id: 'university-commerce-professor', name: 'University Professor (Business & Commerce)' },
    { id: 'aerospace-engineer', name: 'Aerospace Engineer' },
    { id: 'chartered-accountant', name: 'CA (Chartered Accountant)' },
    { id: 'sales-executive', name: 'Sales Executive' },
    { id: 'corporate-lawyer', name: 'Corporate Lawyer' },
    { id: 'investment-banker', name: 'Investment Banker' },
    { id: 'engineer', name: 'Engineer' },
    { id: 'army-officer', name: 'Army Officer' },
    { id: 'air-force-officer', name: 'Air Force Officer' },
    { id: 'navy-officer', name: 'Navy Officer' },
    { id: 'defence-scientist', name: 'Defence Scientist (DRDO)' },
    { id: 'business-analyst', name: 'Business Analyst' },
    { id: 'software-engineer', name: 'Software Engineer' },
    { id: 'medical-professional', name: 'Doctor' },
    { id: 'brand-strategist', name: 'Brand Strategist' },
  ];


  const filteredCareers = searchTerm 
    ? careerTabs.filter((career) => career.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <div className="careers-page-container">
      
      <div className="Searchbar">
        <input 
          type="text" 
          placeholder="Search Career...." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FontAwesomeIcon className="magnifying" icon={faMagnifyingGlass} />
        </button>
      </div>

      {searchTerm && (
        <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h3 style={{ marginBottom: '1rem', color: '#004d40' }}>Search Results for "{searchTerm}"</h3>
          <div className="small-tabs-grid">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career) => (
                <Link to={`/career/${career.id}`} key={`search-${career.id}`} className="small-career-tab">
                  <h3>{career.name}</h3>
                </Link>
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', color: '#666' }}>No careers found matching your search.</p>
            )}
          </div>
        </div>
      )}
      

      
      <div className="section-header">
        <h2>Explore Streams</h2>
      </div>
      
      <div className="stream-grid">
        <Link to="/science" className="stream-card">
          <h1>Science</h1>
          <h2>Innovate & Engineer</h2>
          <p>
            Dive into the mechanics of the future. From writing the algorithms that power modern technology to engineering sustainable solutions and advancing human health. This is the path for logical thinkers and relentless problem solvers.
          </p>
          <p className="excar">
            <i>Career Trajectories:</i> Data Scientist, Aerospace Engineer, Medical Professional...
          </p>
        </Link>

        <Link to="/arts" className="stream-card">
          <h1>Arts</h1>
          <h2>Create & Connect</h2>
          <p>
            Shape how the world thinks, feels, and interacts. Combine creative vision with a deep understanding of human behavior to solve complex problems through human-centric design, media, and social policy.
          </p>
          <p className="excar">
            <i>Career Trajectories:</i> Psychologist, Corporate Lawyer, Brand Strategist...
          </p>
        </Link>

        <Link to="/commerce" className="stream-card">
          <h1>Commerce</h1>
          <h2>Strategize & Scale</h2>
          <p>
            Master the language of global business. Learn to analyze market trends, manage capital, and drive the strategic growth behind the world's most successful enterprises and disruptive startups.
          </p>
          <p className="excar">
            <i>Career Trajectories:</i> Investment Banker, Financial Technologist (FinTech), Business Analyst, Chartered Accountant...
          </p>
        </Link>
      </div>

      
      <div className="section-header">
        <h2>Specific Careers</h2>
      </div>

      <div className="small-tabs-grid">
        {careerTabs.map((career) => (
          <Link to={`/career/${career.id}`} key={career.id} className="small-career-tab">
            <h3>{career.name}</h3>
          </Link>
        ))}
      </div>
      
    </div>
  );
}