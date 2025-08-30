import './style/Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'CS Teaching Assistant',
            company: 'Gettysburg College, Gettysburg, PA',
            period: 'Aug 2025 – Present',
            description: [
                'Mentor 25+ students in programming concepts and data structure principles through office hours and class support.',
                'Assist students with debugging code, improving problem-solving and academic performance.'
            ],
            link: 'https://www.gettysburg.edu/',
            side: 'left'
        },
        {
            id: 2,
            role: 'Software Engineer Intern',
            company: 'PM Accelerator (Remote)',
            period: 'May 2025 – July 2025',
            description: [
                'Led development of the entire front-end of PetTokAI, a React Native mobile app generating AI-powered pet content.',
                'Designed responsive UI components and integrated with backend AI services for real-time personalization.',
                'Owned the full front-end lifecycle from prototyping to deployment in a fast-paced startup.'
            ],
            link: 'https://pmaccelerator.io/',
            side: 'right'
        },
        {
            id: 3,
            role: 'SAT Math Teacher',
            company: 'Self-employed (Remote)',
            period: 'Oct 2023 – Present',
            description: [
                'Tutored 50+ students in SAT Math, boosting average scores by 150+ points.',
                'Customized teaching strategies to simplify complex concepts and foster engagement.'
            ],
            link: '#',
            side: 'left'
        }
    ];

    return (
        <div className="experience-container">
            <h2>companies()</h2>
            
            <div className="timeline">
                <div className="timeline-line"></div>
                
                {experiences.map((exp) => (
                    <div key={exp.id} className={`timeline-item ${exp.side}`}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="card-header">
                                <h3 className="role-title">{exp.role}</h3>
                                <div className="company-info">
                                    <span className="company-name">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <ul className="description-list">
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="card-footer">
                                <a 
                                    href={exp.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="company-link"
                                >
                                    Go to website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;