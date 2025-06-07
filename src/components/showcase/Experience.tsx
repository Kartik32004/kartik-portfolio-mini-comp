import React from 'react';
import ResumeDownload from './ResumeDownload';

// export interface ExperienceProps {}

// const Experience: React.FC<ExperienceProps> = (props) => {
//     return (
//         <div className="site-page-content">
//             <ResumeDownload />
//             <div style={styles.headerContainer}>
//                 <div style={styles.header}>
//                     <div style={styles.headerRow}>
//                         <h1>Hover</h1>
//                         <a
//                             rel="noreferrer"
//                             target="_blank"
//                             href={'https://hover.gg/'}
//                         >
//                             <h4>www.hover.gg</h4>
//                         </a>
//                     </div>
//                     <div style={styles.headerRow}>
//                         <h3>Frontend Engineer</h3>
//                         <b>
//                             <p>Summer 2020 - Fall 2021</p>
//                         </b>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-block">
//                 <p>
//                     Targeted towards online content creators and streamers
//                     looking to build a brand, Hover is the home of over 150K
//                     users. Written in Typescript using React, React-Native,
//                     Framer, Express, and Redux.
//                 </p>
//                 <br />
//                 <ul>
//                     <li>
//                         <p>
//                             Architected and engineered the vertical scrolling
//                             discover player which, at its daily peak, was
//                             responsible for generating over 600,000 views across
//                             20,000 active users.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Designed and implemented multiple features to
//                             increase app usability and user experience while
//                             ensuring the quality, maintainability and
//                             scalability of the front end as the user base grew
//                             by over 50,000.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Coordinated major refactors targeted towards app
//                             optimization and performance resulting in a smoother
//                             user experience and accomplished by eliminating
//                             redundant re-renders and API calls by over 50%.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Directed and executed an internal migration of 3
//                             individual repositories to a single monorepo,
//                             greatly reducing overhead for developing new
//                             features, fixing bugs, and managing dependencies.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Rebuilt the website with React and shared mobile app
//                             components allowing users to access a wide variety
//                             of app interactions entirely on the web, resulting
//                             in over 700,000 total site visits.
//                         </p>
//                     </li>
//                 </ul>
//             </div>
//             <div style={styles.headerContainer}>
//                 <div style={styles.header}>
//                     <div style={styles.headerRow}>
//                         <h1>BrACS</h1>
//                         <a
//                             target="_blank"
//                             rel="noreferrer"
//                             href={'https://bracs.co/'}
//                         >
//                             <h4>www.bracs.co</h4>
//                         </a>
//                     </div>
//                     <div style={styles.headerRow}>
//                         <h3>Team Lead & Engineer</h3>
//                         <b>
//                             <p>Fall 2021 - Spring 2022</p>
//                         </b>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-block">
//                 <p>
//                     Supervised and developed the front end of bracs.co, a
//                     beautifully simple and effective bracket creation and
//                     management engine. Written in Typescript using React and
//                     deployed using AWS Elastic Beanstalk.
//                 </p>
//                 <br />
//                 <ul>
//                     <li>
//                         <p>
//                             Managed the project and team members by conducting
//                             bi-weekly stand-ups.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Architected bracket view UI using React Flow and
//                             custom bracket data types built from binary trees.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Created conversion algorithms to serialize bracket
//                             tree data to allow for saving in the cloud.
//                         </p>
//                     </li>
//                     <li>
//                         <p>
//                             Implemented bracket generation utilities which
//                             employ gray code for proper team seeding and
//                             placement.
//                         </p>
//                     </li>
//                 </ul>
//             </div>
//             <div style={styles.headerContainer}>
//                 <div style={styles.header}>
//                     <div style={styles.headerRow}>
//                         <h1>K-F/X</h1>
//                         <a
//                             target="_blank"
//                             rel="noreferrer"
//                             href={'https://kfxnyc.com/'}
//                         >
//                             <h4>www.kfxnyc.com</h4>
//                         </a>
//                     </div>
//                     <div style={styles.headerRow}>
//                         <h3>Special Effects Technician</h3>
//                         <b>
//                             <p>Fall 2019, Summer 2021</p>
//                         </b>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-block">
//                 <p>
//                     Applied problem solving and technical skills to operate
//                     large equipment such as rain machines, fog machines, small
//                     explosives and general rigging with a professional crew of
//                     50+ people.
//                 </p>
//                 <br />
//                 <h3 style={styles.indent}>Screen Credits:</h3>
//                 <ul>
//                     <li style={styles.row}>
//                         <p>• Ray Donovan</p>
//                         <p>
//                             [{' '}
//                             <a
//                                 href="https://www.sho.com/ray-donovan"
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 SHOWTIME
//                             </a>{' '}
//                             ]
//                         </p>
//                     </li>
//                     <li style={styles.row}>
//                         <p>• Ray Donovan: The Movie</p>
//                         <p>
//                             [{' '}
//                             <a
//                                 href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 SHOWTIME
//                             </a>{' '}
//                             ]
//                         </p>
//                     </li>
//                     <li style={styles.row}>
//                         <p>• Hightown</p>
//                         <p>
//                             [{' '}
//                             <a
//                                 href="https://www.starz.com/us/en/series/hightown/57463"
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 STARZ
//                             </a>{' '}
//                             ]
//                         </p>
//                     </li>
//                     <li style={styles.row}>
//                         <p>• Bull</p>
//                         <p>
//                             [{' '}
//                             <a
//                                 href="https://www.cbs.com/shows/bull/"
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 CBS
//                             </a>{' '}
//                             ]
//                         </p>
//                     </li>
//                     <li style={styles.row}>
//                         <p>• At Home with Amy Sedaris</p>
//                         <p>
//                             [{' '}
//                             <a
//                                 href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 truTV
//                             </a>{' '}
//                             ]
//                         </p>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const styles: StyleSheetCSS = {
//     header: {
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     skillRow: {
//         flex: 1,
//         justifyContent: 'space-between',
//     },
//     skillName: {
//         minWidth: 56,
//     },
//     skill: {
//         flex: 1,
//         padding: 8,
//         alignItems: 'center',
//     },
//     progressBar: {
//         flex: 1,
//         background: 'red',
//         marginLeft: 8,
//         height: 8,
//     },
//     hoverLogo: {
//         height: 32,
//         marginBottom: 16,
//     },
//     headerContainer: {
//         alignItems: 'flex-end',
//         width: '100%',
//         justifyContent: 'center',
//     },
//     hoverText: {
//         marginBottom: 8,
//     },
//     indent: {
//         marginLeft: 24,
//     },
//     headerRow: {
//         justifyContent: 'space-between',
//         alignItems: 'flex-end',
//     },
//     row: {
//         display: 'flex',
//         justifyContent: 'space-between',
//     },
// };

// export default Experience;


export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AICTE GenAI Virtual Internship</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://internship.aicte-india.org/'}
                        >
                            <h4>AICTE Internship Portal</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Virtual Intern - Generative AI</h3>
                        <b>
                            <p>Oct 2024 - Dec 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Completed intensive modules on LLMs, transformers, and ethical AI under AICTE’s national GenAI initiative.</p>
                    </li>
                    <li>
                        <p>Built and fine-tuned text summarization and generation models using Google Vertex AI and Hugging Face.</p>
                    </li>
                    <li>
                        <p>Achieved 90%+ model accuracy in classification and prompt-based evaluations.</p>
                    </li>
                    <li>
                        <p>Ranked in the top 10% of 25K+ participating students nationwide.</p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>CISCO Skill-a-thon Internship (SAKEC)</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.netacad.com/'}
                        >
                            <h4>netacad.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Networking Intern - CCNA</h3>
                        <b>
                            <p>Dec 2024 - Jan 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Completed hands-on training in routing, switching, IP connectivity, and subnetting using Cisco Packet Tracer.</p>
                    </li>
                    <li>
                        <p>Simulated network topologies and implemented security protocols for small to medium scale networks.</p>
                    </li>
                    <li>
                        <p>Built foundational network design and troubleshooting skills as per CCNA curriculum.</p>
                    </li>
                    <li>
                        <p>Ranked in the top 15% in assessments and successfully completed the internship with merit.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
