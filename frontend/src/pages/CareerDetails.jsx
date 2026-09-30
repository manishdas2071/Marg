import { useParams, Link } from 'react-router-dom';

export default function CareerDetails() {

  const { careerId } = useParams();

  const careerData = {
    'journalist': {
      title: 'Journalist',
      stream: 'Arts',
      description: 'Journalists and Reporters play a major role in informing society about current events, politics, education, sports, entertainment, crime, business, and social issues. They gather information from multiple sources, conduct interviews, investigate facts, and present news through newspapers, television, radio, websites, and social media platforms. A journalist must work with accuracy, honesty, and responsibility because their reports influence public opinion and awareness.Modern journalism is no longer limited to newspapers and TV channels. Digital journalism, online media, podcasts, and content reporting have created new opportunities in this field. Reporters often travel to different locations, attend events, cover breaking news, and interact with people from various backgrounds. Investigative journalism is another important area where reporters research deeply to uncover hidden facts and corruption.A successful journalist must have excellent communication skills, confidence, curiosity, and the ability to work under pressure. Creativity and strong writing ability are also important because journalists must present information clearly and attractively for the audience. This career is ideal for individuals who enjoy storytelling, public interaction, and staying updated with current affairs.',
      skills: ['Communication Skills', 'Writing & Editing', 'Research Ability', 'Public Speaking', 'Critical Thinking', 'Interviewing Skills', 'Digital Media Knowledge', 'Time Management'],
      outlook: 'Media and digital news platforms are growing rapidly. Entry-level salary is moderate, but experienced journalists, anchors, editors, and digital content creators can earn very high salaries and recognition.'
    },
    'data-scientist': {
      title: 'Data Scientist',
      stream: 'Science',
      description: 'Data Scientists are the analytical engines of the modern digital economy. They operate at the intersection of mathematics, computer science, and business strategy, specializing in extracting actionable insights from massive, complex, and unstructured datasets. A typical day involves cleaning and organizing raw data, writing complex algorithms, and building predictive Machine Learning models. Instead of just looking at what happened in the past, they use statistical modeling to predict future trends, automate decision-making processes, and uncover hidden patterns that human analysts might easily miss. Data Scientists are critical to almost every major industry today. Whether they are building recommendation engines for streaming services, predicting stock market fluctuations, analyzing genomic data for healthcare, or optimizing global supply chains, their work empowers organizations to make highly accurate, data-driven decisions.',
      skills: ['Python/R', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistics'],
      outlook: 'Highly demanding with exceptional growth. Average starting salary is very competitive.'
    },
    'aerospace-engineer': {
      title: 'Aerospace Engineer',
      stream: 'Science',
      description: 'Aerospace engineering is a highly specialized and advanced field focused on the design, development, testing, and production of aircraft, spacecraft, and related systems. It is broadly divided into two overlapping branches: aeronautical engineering, which deals with vehicles operating within Earth\'s atmosphere (like commercial jets, drones, and helicopters), and astronautical engineering, which focuses on craft operating outside it (such as satellites, rockets, and space stations). This discipline demands a rigorous mastery of aerodynamics, propulsion, thermodynamics, and materials science to ensure that vehicles can safely withstand extreme physical conditions, from high-velocity atmospheric friction to the vacuum of space. Ultimately, aerospace engineers are the innovators who push the boundaries of human flight, enabling global connectivity and deep space exploration.',
      skills: ['Thermodynamics', 'Aerodynamics', 'AutoCAD', 'Propulsion', 'Mathematics'],
      outlook: 'Steady growth with opportunities in defense, space exploration (like ISRO/NASA), and commercial aviation.'
    },
    'engineer': {
      title: 'Engineer',
      stream: 'Science',
      description: 'An engineering degree is a rigorous undergraduate program designed to equip students with the mathematical, scientific, and technical foundation needed to solve complex real-world problems. The two most common pathways, the Bachelor of Technology (B.Tech) and the Bachelor of Engineering (B.E.), are largely similar in scope and career prospects but differ slightly in their academic approach. B.E. programs typically lean towards a knowledge-based, theoretical foundation of engineering concepts, whereas B.Tech programs are generally more skill-oriented, emphasizing practical applications and modern technological tools. Despite these minor curricular differences, both are traditionally four-year degrees that hold equal academic value and open doors to diverse fields like computer science, civil, mechanical, and electrical engineering.',
      skills: ['Systems Thinking', 'Troubleshooting', 'Mathematics', 'Iterative Design', 'Basic Programming', 'Software Proficiency', 'Technical Communication', 'Ethical Judgment'],
      outlook: 'The engineering landscape is currently defined by rapid technological integration. While traditional infrastructure and manufacturing provide stable, long-term career security, the fastest growth and highest compensation remain in software, cloud architecture, and data science. Additionally, the industry is seeing greater geographical flexibility; the rise of remote development roles and expanding regional tech hubs (such as Guwahati) means high-paying tech jobs are no longer strictly confined to Tier-1 megacities.'
    },
    'psychologist': {
      title: 'Psychologist',
      stream: 'Arts',
      description: 'A psychologist is a mental health professional who studies human behavior, cognitive processes, and emotions to help individuals navigate psychological challenges and improve their overall well-being. Unlike psychiatrists, who are medical doctors that can prescribe medication, psychologists primarily rely on psychotherapy, behavioral interventions, and specialized testing to treat various mental health conditions. The profession encompasses a wide range of specializations—from clinical psychology, which focuses on treating severe disorders, to industrial-organizational psychology, which aims to optimize workplace dynamics and employee wellness. In India, becoming a practicing clinical psychologist requires rigorous academic training, typically an M.Phil or Ph.D., along with official registration with the Rehabilitation Council of India (RCI), ensuring that patients receive scientifically grounded and empathetic care.',
      skills: ['Empathy', 'Research', 'Communication', 'Analytical Thinking', 'Patience'],
      outlook: 'The demand for psychologists in India is seeing a significant upward trend in 2026, driven by a massive shift in cultural attitudes toward mental health and the expansion of corporate wellness programs.There is a growing need for mental health professionals in hospitals, educational institutions, and the private sector. The "wellness tech" industry is also booming, creating new roles for psychologists in app development and remote counseling.'
    },
    'normal-teacher': {
      title: 'Teacher',
      stream: 'Any Stream',
      description: 'Teachers and Lecturers are responsible for educating students, developing knowledge, and guiding them toward personal and professional growth. School teachers focus on building fundamental concepts and discipline among students, while lecturers and professors in colleges teach specialized subjects and encourage research and analytical thinking. Teaching is considered one of the most respected professions because teachers help shape the future generation. Their responsibilities include preparing lesson plans, conducting classes, evaluating assignments, organizing activities, and mentoring students. Lecturers in colleges and universities may also participate in research work, seminars, and academic publications. With the growth of online education and smart classrooms, teaching methods are becoming more technology-oriented. Teachers now use presentations, digital tools, videos, and online platforms to improve learning experiences. Patience, leadership, subject expertise, and the ability to explain concepts clearly are essential qualities for success in this profession. This profession offers job stability, respect in society, and opportunities to contribute positively to students’ lives. People who enjoy sharing knowledge and helping others learn often find teaching highly rewarding.',
      skills: ['Subject Knowledge', 'Communication Skills', 'Patience & Understanding', 'Leadership Ability', 'Classroom Management', 'Presentation Skills', 'Creativity in Teaching', 'Time Management'],
      outlook: 'Demand for qualified teachers and lecturers remains steady in schools, colleges, coaching institutes, and online education platforms. Salary increases with qualifications, experience, and institution level.'
    },
    'university-science-professor': {
      title: 'University Professor (Science & Engineering)',
      stream: 'Science',
      description: 'A University Professor in the Sciences or Engineering is as much a researcher as they are an educator. While they deliver lectures on advanced theoretical concepts, a significant portion of their role involves securing research grants, running independent laboratories, and publishing findings in peer-reviewed scientific journals. At this level, professors do not just teach existing knowledge; they actively create new knowledge. They mentor postgraduate and Ph.D. students, guiding them through complex experiments, data analysis, and the writing of their doctoral dissertations. Whether developing new pharmaceutical compounds, engineering advanced robotics, or researching quantum physics, these professors often collaborate with government agencies, private tech companies, and international research organizations.',
      skills: ['Advanced Scientific Research', 'Grant Writing & Fundraising', 'Data Modeling & Analysis', 'Academic Publishing', 'Ph.D. Mentorship', 'Laboratory Direction'],
      outlook: 'Highly competitive and prestigious. Requires a Ph.D. and often post-doctoral experience. Strong demand in premier institutes (like IITs, NITs, and central universities).'
    },
    'medical-professor': {
      title: 'Medical Professor & Clinical Educator',
      stream: 'Science',
      description: 'Medical Professors and Clinical Educators are highly experienced doctors who dedicate their careers to training the next generation of healthcare professionals. They teach in medical colleges, nursing schools, and teaching hospitals, covering subjects from Anatomy and Pharmacology to specialized fields like Surgery and Neurology. Unlike traditional professors, their "classroom" is often the hospital ward or the operating theater. They conduct clinical rounds with MBBS and MD/MS students, teaching them how to interact with patients, diagnose complex illnesses, and execute critical medical procedures under real-world pressure. In addition to patient care and student mentorship, medical professors are heavily involved in clinical research. They conduct trials, publish findings in major medical journals (like The Lancet or NEJM), and continuously update their curriculum to reflect the latest advancements in medical technology and treatment protocols.',
      skills: ['Advanced Clinical Expertise', 'Real-time Procedural Instruction', 'Patient Empathy & Bedside Manner', 'Medical Research & Trial Management', 'High-Pressure Mentorship', 'Diagnostic Problem Solving'],
      outlook: 'Highly prestigious with exceptional job security. Requires advanced medical degrees (MD/MS/DNB) followed by years of clinical practice. Strong demand in both government and private medical colleges worldwide.'
    },
    'university-arts-professor': {
      title: 'University Professor (Arts & Humanities)',
      stream: 'Arts',
      description: 'University Professors in the Arts and Humanities specialize in the deep, critical analysis of human culture, society, history, and literature. They lead high-level seminars where complex theories and historical contexts are vigorously debated rather than just memorized. Unlike science professors who work in labs, humanities professors conduct extensive archival research, sociological fieldwork, or literary analysis. Their primary academic output consists of publishing comprehensive books, translating historical texts, and writing articles for prestigious academic journals. They play a crucial role in shaping public discourse and policy. By guiding undergraduate and postgraduate students through rigorous thesis writing, they develop the next generation of historians, sociologists, political analysts, and authors.',
      skills: ['Extensive Archival Research', 'Critical Theory Application', 'Book & Journal Publishing', 'Seminar Facilitation', 'Thesis Mentorship', 'Public Speaking & Discourse'],
      outlook: 'Steady demand, particularly for tenured positions. Requires a Ph.D. and a strong portfolio of published academic writing. Opportunities exist in both universities and independent think tanks.'
    },
    'university-commerce-professor': {
      title: 'University Professor (Business & Commerce)',
      stream: 'Commerce',
      description: 'University Professors in Commerce, Management, and Business (often teaching in BBA, MBA, or M.Com programs) focus on advanced economic theories, corporate strategy, and global financial markets. Their teaching methodology relies heavily on the "Case Study" approach, analyzing real-world corporate successes and failures to teach students high-level decision-making. Beyond the classroom, these professors frequently act as consultants for multinational corporations or government economic advisory boards. Their research often involves analyzing market trends, consumer behavior, and organizational psychology. By blending academic theory with current industry realities, they prepare students to become CEOs, investment bankers, and senior financial analysts.',
      skills: ['Advanced Economic Modeling', 'Case-Study Methodology', 'Industry & Corporate Consulting', 'Strategic Financial Analysis', 'Business Journal Publishing', 'Leadership Development'],
      outlook: 'Excellent prospects, especially in top-tier business schools (like IIMs) and private universities. A Ph.D. is standard, though significant high-level corporate experience (like being a former CEO) is also highly valued.'
    },
    'sales-executive': {
      title: 'Sales Executive',
      stream: 'Commerce',
      description: 'Sales Executives are professionals responsible for promoting and selling products or services to customers. They help businesses increase revenue by building customer relationships, identifying market opportunities, and achieving sales targets. Sales executives work in industries such as retail, technology, automobiles, banking, pharmaceuticals, and real estate. Their responsibilities include meeting clients, explaining product features, negotiating deals, preparing sales reports, and maintaining customer satisfaction. Strong communication and convincing abilities are essential because sales professionals interact directly with customers and represent the company’s image. Modern sales roles also involve digital marketing, online customer engagement, and data-driven sales strategies. Sales executives often travel, attend meetings, and participate in promotional campaigns. Performance-based incentives and bonuses are common in this profession, making it financially rewarding for skilled individuals. This career is suitable for confident, energetic, and goal-oriented people who enjoy interacting with others and working in competitive environments.',
      skills: ['Communication Skills', 'Negotiation Ability', 'Confidence', 'Customer Handling', 'Marketing Knowledge', 'Teamwork', 'Time Management', 'Persuasion Skills'],
      outlook: 'Sales professionals are needed in almost every industry. Salary growth can be very fast because incentives and promotions depend on performance.'
    },
    'bank-clerk': {
      title: 'Bank PO/Clerk',
      stream: 'Commerce',
      description: 'Bank Probationary Officers (POs) and Clerks are responsible for handling banking operations, customer services, financial transactions, and administrative tasks. Banks play a major role in the economy, and employees ensure smooth management of accounts, loans, deposits, and customer support services. Bank Clerks mainly handle daily operations such as cash deposits, withdrawals, account updates, passbook entries, and customer queries. Probationary Officers have more responsibilities, including supervising staff, approving loans, managing branch operations, and handling financial services. The banking sector offers stable government and private job opportunities with good working conditions and career growth. Candidates usually enter this field through competitive examinations conducted by banks and recruitment agencies. People working in banking must be disciplined, customer-friendly, and accurate while handling financial data and transactions. Technology and digital banking are also becoming important parts of the profession.',
      skills: ['Numerical Ability', 'Communication Skills', 'Customer Service', 'Computer Knowledge', 'Accuracy & Attention', 'Problem Solving', 'Time Management', 'Banking Awareness'],
      outlook: 'Banking jobs provide stable career growth, government benefits, promotions, and good salary increments over time.'
    },
    'chartered-accountant': {
      title: 'CA (Chartered Accountant)',
      stream: 'Commerce',
      description: 'Chartered Accountants are finance professionals responsible for managing accounting, auditing, taxation, financial planning, and business advisory services. They help organizations maintain financial records, ensure legal compliance, and make informed business decisions. CAs work in accounting firms, multinational companies, banks, government organizations, and private businesses. Their responsibilities include preparing balance sheets, auditing financial statements, filing taxes, analyzing profits and losses, and advising companies on financial strategies. They also help organizations reduce risks and improve financial efficiency. The CA profession requires strong analytical ability, numerical skills, accuracy, and dedication because financial work demands precision and responsibility. The Chartered Accountancy course is considered challenging and involves multiple examinations, practical training, and deep knowledge of accounting laws and taxation systems. A career in CA offers high respect, excellent earning potential, and opportunities to work globally in finance and business sectors.',
      skills: ['Accounting Knowledge', 'Financial Analysis', 'Taxation Skills', 'Numerical Ability', 'Attention to Detail', 'Problem Solving', 'Analytical Thinking', 'Business Knowledge'],
      outlook: 'Qualified Chartered Accountants are always in demand in finance, taxation, auditing, and corporate sectors. Salary growth is excellent with experience and specialization.'
    },
    'corporate-lawyer': {
      title: 'Corporate Lawyer',
      stream: 'Arts',
      description: 'Law is a professional career focused on justice, legal systems, and protection of rights. Lawyers advise clients, prepare legal documents, represent people in courts, and help resolve disputes related to criminal, civil, corporate, family, or constitutional matters. The legal profession is essential for maintaining justice and order in society. Lawyers may work independently, join law firms, become legal advisors for companies, or work in government departments and courts. Some specialize in areas such as corporate law, criminal law, cyber law, intellectual property law, or environmental law. Legal professionals must study acts, rules, evidence, and legal procedures carefully to build strong cases and arguments. A successful lawyer requires confidence, logical reasoning, research ability, and excellent speaking skills. Court proceedings often demand quick thinking and the ability to present arguments effectively. The legal field also offers opportunities in judiciary services, legal consulting, academics, and corporate sectors. Law is a highly respected profession with opportunities for professional growth, social influence, and financial success.',
      skills: ['Negotiation', 'Contract Law', 'Analytical Skills', 'Public Speaking', 'Attention to Detail'],
      outlook: 'Highly lucrative. Essential for every growing business, startup, and multinational corporation.'
    },
    'investment-banker': {
      title: 'Investment Banker',
      stream: 'Commerce',
      description: 'An investment banker is a specialized financial professional who helps corporations, governments, and large institutions raise capital and navigate complex financial transactions. Rather than dealing with everyday consumer banking, they act as strategic advisors and intermediaries in high-stakes deals, such as managing initial public offerings (IPOs), issuing corporate bonds, and orchestrating mergers and acquisitions (M&A). The role demands rigorous financial modeling, deep market analysis, and exceptional negotiation skills to determine the accurate valuation of companies and structure lucrative, legally compliant deals. Often characterized by a fast-paced and high-pressure environment, investment banking serves as a critical engine of the global economy, connecting entities that need funding to grow with investors looking to allocate their capital efficiently.',
      skills: ['Financial Modeling', 'Valuation', 'Excel', 'Networking', 'High-Pressure Management'],
      outlook: 'Known for long hours but offers some of the highest financial compensations in the market.'
    },
    'business-analyst': {
      title: 'Business Analyst',
      stream: 'Commerce',
      description: 'A Business Analyst (BA) acts as the crucial bridge between a company\'s strategic objectives and its technological capabilities. Their primary role involves analyzing organizational data, evaluating current business processes, and identifying areas for structural improvement, cost reduction, or increased efficiency. By gathering detailed requirements from stakeholders and utilizing tools like SQL, advanced Excel, and various Business Intelligence (BI) platforms, they translate complex business problems into actionable, data-driven solutions. Ultimately, business analysts empower organizations to make informed decisions, ensuring that new technologies, software implementations, and operational changes directly align with the company\'s broader financial and growth goals.',
      skills: ['Data Analysis', 'Process Mapping', 'SQL', 'Tableau/PowerBI', 'Problem Solving'],
      outlook: 'Excellent. Every tech and non-tech company requires BAs to streamline operations.'
    },
    'software-engineer': {
      title: 'Software Engineer',
      stream: 'Science',
      description: 'A software engineer is a technical professional who applies the principles of computer science, engineering, and mathematical analysis to design, develop, test, and maintain software systems. Rather than simply writing code, they architect scalable, efficient solutions to solve complex problems, working across diverse domains such as web applications, mobile platforms, operating systems, and enterprise networks. The role demands a rigorous understanding of programming languages, data structures, algorithms, and system architecture, alongside the ability to collaborate effectively with designers, product managers, and other stakeholders. Ultimately, software engineers are the builders of the modern digital infrastructure, creating the secure and reliable technologies that power businesses, communication, and everyday life.',
      skills: ['Data Structures', 'Algorithms', 'MERN Stack', 'Java/C++', 'System Design'],
      outlook: 'Exponential growth. The backbone of the modern digital economy.'
    },
    'brand-strategist': {
      title: 'Brand Strategist',
      stream: 'Arts',
      description: 'A brand strategist is a marketing professional responsible for shaping and managing how a company, product, or service is perceived by the public. Acting as the architect behind a brand\'s identity, they conduct deep market research and analyze consumer behavior to define a brand\'s unique voice, core values, and market positioning. Rather than just designing logos or writing catchy slogans, they develop the long-term, overarching blueprint that ensures every piece of communication—from visual aesthetics to marketing campaigns—aligns seamlessly with the organization\'s broader business objectives. Ultimately, their goal is to build strong, enduring emotional connections with the target audience, differentiating the brand from its competitors and driving long-term customer loyalty and growth.',
      skills: ['Market Research', 'Copywriting', 'Consumer Psychology', 'Creative Direction', 'SEO'],
      outlook: 'Strong demand in marketing agencies and tech startups looking to establish a unique identity.'
    },
    'medical-professional': {
      title: 'Doctor',
      stream: 'Science',
      description: 'Medical professionals are the cornerstone of the healthcare system, dedicating their lives to diagnosing, treating, and preventing human diseases and injuries. This field covers a vast array of roles, from general physicians providing essential primary care to highly specialized surgeons performing complex, life-saving procedures. The daily environment of a medical professional is fast-paced, high-stakes, and deeply rewarding. Whether in local clinics, bustling emergency rooms, or surgical theaters, they often make critical decisions under extreme pressure. Beyond treating immediate symptoms, they interpret complex diagnostic tests (like MRIs and blood panels), prescribe targeted therapies, and develop comprehensive long-term patient care plans. Medicine is an ever-evolving field that demands lifelong learning to keep pace with rapid advancements in medical technology and pharmacology. Above all, succeeding in this profession requires a rare blend of extreme scientific rigor and deep human empathy to guide patients and their families through their most vulnerable moments.',
      skills: ['Biology', 'Empathy', 'Critical Thinking', 'Anatomy', 'High-Pressure Decision Making'],
      outlook: 'Constant high demand globally with diverse specialization paths.'
    },
    'civil-services': {
      title: 'Civil Services',
      stream: 'Arts',
      description: 'Civil Services is one of the most prestigious career fields in the country. Civil servants work in government administration and help implement policies, maintain law and order, manage public welfare programs, and contribute to national development. Officers such as IAS, IPS, IFS, and other government administrators play a major role in decision-making and governance. Civil servants are responsible for solving public issues, managing government departments, supervising development projects, and ensuring proper implementation of laws and policies. The profession requires dedication, discipline, leadership, and strong decision-making ability. Officers may work in areas such as education, health, finance, police administration, foreign affairs, and rural development.The selection process for civil services is highly competitive and usually involves multiple stages of examinations, interviews, and personality assessments. Candidates must have strong knowledge of current affairs, history, polity, economics, geography, and public administration.This career offers authority, social respect, job security, and opportunities to directly contribute to society and national progress.',
      skills: ['Public Administration', 'Leadership', 'Policy Analysis', 'General Knowledge', 'Ethics', 'Decision Making', 'Problem Solving', 'Communication Skills', 'Administrative Ability', 'Analytical Thinking', 'Time Management'],
      outlook: 'Highly prestigious and stable, offering significant societal impact.'
    },
    'research-scientist': {
      title: 'Research Scientist',
      stream: 'Science',
      description: 'Research Scientists are the pioneers of human knowledge. They dedicate their careers to answering the fundamental questions of how the universe works, from the microscopic behavior of quantum particles to the macroscopic mapping of distant galaxies. They operate at the cutting edge of fields like biotechnology, astrophysics, environmental science, and artificial intelligence. A scientist’s daily work is driven by the Scientific Method. They spend their time formulating complex hypotheses, designing rigorous experiments, and utilizing highly advanced laboratory equipment or supercomputers to gather data. After experimentation, they rigorously analyze their findings to draw evidence-based conclusions, often writing detailed papers to publish their discoveries in peer-reviewed scientific journals. While many scientists work in academic settings like universities, a massive number are employed by the private sector and government agencies (like NASA or the WHO). Whether they are developing life-saving vaccines, engineering renewable energy solutions, or programming next-generation AI, their work directly shapes the future trajectory of humanity.',
      skills: ['Data Analysis & Statistics', 'Hypothesis Testing', 'Advanced Mathematics', 'Technical Writing & Publishing', 'Perseverance & Patience', 'Specialized Laboratory Techniques'],
      outlook: 'Highly specialized with strong demand in private sectors (pharmaceuticals, tech, green energy) and government research. Usually requires a Master’s degree or a Ph.D.'
    },
    'army-officer': {
      title: 'Army Officer',
      stream: 'Science',
      description: 'Army Officers lead soldiers and protect the country from external and internal threats. They manage military operations, training, security missions, and disaster relief activities. This profession requires leadership, discipline, courage, physical fitness, and quick decision-making ability while serving the nation in challenging and high-responsibility environments.',
      skills: ['Leadership Skills', 'Physical Fitness', 'Discipline', 'Decision Making', 'Team Management', 'Courage'],
      outlook: 'Defence services offer secure government careers, promotions, allowances, pensions, and strong long-term growth opportunities.'
    },
    'air-force-officer': {
      title: 'Air Force Officer',
      stream: 'Science',
      description: 'Air Force Officers protect the nation’s airspace and operate advanced aircraft, defense systems, and aviation technologies. They perform missions related to national security, surveillance, rescue operations, and air combat. This profession requires technical knowledge, concentration, confidence, discipline, and the ability to work under pressure.',
      skills: ['Technical Knowledge', 'Concentration', 'Physical Fitness', 'Leadership Skills', 'Decision Making', 'Communication Skills'],
      outlook: 'Air Force careers provide excellent salary, government benefits, promotions, and opportunities in aviation and defense sectors.'
    },
    'navy-officer': {
      title: 'Navy Officer',
      stream: 'Science',
      description: 'Navy Officers protect the country’s maritime borders and manage operations on warships, submarines, and naval bases. They handle navigation, security missions, rescue operations, and technical systems at sea. This profession requires discipline, teamwork, leadership, physical endurance, and strong understanding of naval operations and technology.',
      skills: ['Leadership Skills', 'Teamwork', 'Physical Endurance', 'Technical Knowledge', 'Discipline', 'Problem Solving'],
      outlook: 'Navy careers offer stable government employment, attractive salary, allowances, and career advancement opportunities in defense services.'
    },
    'defence-scientist': {
      title: 'Defence Scientist (DRDO)',
      stream: 'Science',
      description: 'Defence Scientists research and develop advanced weapons, communication systems, missiles, and military technologies for national security. They work in laboratories and research organizations to improve defense systems and innovations. This profession requires scientific knowledge, analytical thinking, research ability, creativity, and strong technical problem-solving skills.',
      skills: ['Research Skills', 'Technical Knowledge', 'Analytical Thinking', 'Problem Solving', 'Creativity', 'Scientific Knowledge'],
      outlook: 'Defence research offers prestigious government careers with good salary growth, research opportunities, and long-term job stability.'
    },
  };

  const career = careerData[careerId];

  if (!career) {
    return (
      <div className="career-not-found">
        <h2>Career not found!</h2>
        <p>The career path you are looking for does not exist in our database.</p>
        <Link to="/career" className="back-btn">Return to Careers</Link>
      </div>
    );
  }

  return (
    <div className="career-details-container">
      
      <div className="breadcrumb">
        <Link to="/career" className="back-link">← Back to Careers</Link>
      </div>

      <div className="career-header">
        <span className={`stream-badge ${career.stream.toLowerCase()}`}>{career.stream}</span>
        <h1>{career.title}</h1>
      </div>

      <div className="career-content-grid">
        
        <div className="main-info">
          <h2>Overview</h2>
          <p>{career.description}</p>

          <h2>Job Outlook & Salary Trajectory</h2>
          <p>{career.outlook}</p>
        </div>

        <div className="sidebar-info">
          <h2>Core Skills Required</h2>
          <div className="skills-container">
            {career.skills.map((skill, index) => (
              <span key={index} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}