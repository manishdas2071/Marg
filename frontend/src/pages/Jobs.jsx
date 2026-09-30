import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const jobFilters = ['All', 'Internship', 'Full-Time', 'Remote'];

  const jobListings = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechNova Solutions",
      location: "Bangalore, India",
      type: "Internship",
      salary: "₹30,000 / month",
      posted: "2 days ago",
      tags: ["React", "Node.js", "MongoDB"],
      applyLink: "https://manishdas2071.github.io/Coming-Soon/" 
    },
    {
      id: 2,
      title: "Junior Data Scientist",
      company: "Quant Analytics",
      location: "Remote",
      type: "Remote",
      salary: "₹8,00,000 / year",
      posted: "5 days ago",
      tags: ["Python", "Machine Learning", "SQL"],
      applyLink: "https://manishdas2071.github.io/Coming-Soon/" 
    },
    {
      id: 3,
      title: "Legal Associate",
      company: "Apex Corporate Law",
      location: "Mumbai, India",
      type: "Full-Time",
      salary: "₹6,50,000 / year",
      posted: "1 week ago",
      tags: ["Contract Law", "Corporate Governance"],
      applyLink: "https://manishdas2071.github.io/Coming-Soon/" 
    },
    {
      id: 4,
      title: "Investment Banking Analyst",
      company: "Global Capital Partners",
      location: "Gurugram, India",
      type: "Full-Time",
      salary: "₹12,00,000 / year",
      posted: "Just now",
      tags: ["Financial Modeling", "Valuation", "Excel"],
      applyLink: "https://manishdas2071.github.io/Coming-Soon/" 
    },
    {
      id: 5,
      title: "Summer Research Intern",
      company: "National Institute of Science",
      location: "Guwahati, India",
      type: "Internship",
      salary: "Stipend Provided",
      posted: "3 days ago",
      tags: ["System Control", "Automation", "Research"],
      applyLink: "https://manishdas2071.github.io/Coming-Soon/" 
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' ? true : job.type === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="jobs-page-container">
      
      <div className="jobs-header">
        <h1>Career Opportunities</h1>
        <p>Discover internships and full-time roles tailored to your skillset and career trajectory.</p>
      </div>

      <div className="jobs-controls">
        <div className="jobs-searchbar">
          <input 
            type="text" 
            placeholder="Search by job title or company..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="jobs-filter-tabs">
          {jobFilters.map(filter => (
            <button 
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="job-listings-wrapper">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div>
                  <h2>{job.title}</h2>
                  <h3 className="company-name">{job.company}</h3>
                </div>
                <span className={`job-type-badge ${job.type.toLowerCase()}`}>{job.type}</span>
              </div>
              
              <div className="job-card-details">
                <span><FontAwesomeIcon icon={faLocationDot} className="icon" /> {job.location}</span>
                <span><FontAwesomeIcon icon={faBriefcase} className="icon" /> {job.salary}</span>
                <span className="posted-time">{job.posted}</span>
              </div>

              <div className="job-card-footer">
                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="apply-btn" 
                  onClick={() => window.open(job.applyLink, '_blank')}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-jobs-found">
            <h3>No opportunities found</h3>
            <p>Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

    </div>
  );
}