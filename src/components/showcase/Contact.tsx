import React, { useEffect, useState, useCallback } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';
import emailjs from '@emailjs/browser';
// export interface ContactProps {}

// // function to validate email
// const validateEmail = (email: string) => {
//     const re =
//         // eslint-disable-next-line
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };

// interface SocialBoxProps {
//     icon: string;
//     link: string;
// }

// const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
//     return (
//         <a rel="noreferrer" target="_blank" href={link}>
//             <div className="big-button-container" style={styles.social}>
//                 <img src={icon} alt="" style={styles.socialImage} />
//             </div>
//         </a>
//     );
// };

// const Contact: React.FC<ContactProps> = (props) => {
//     const [company, setCompany] = useState('');
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');
//     const [isFormValid, setIsFormValid] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [formMessage, setFormMessage] = useState('');
//     const [formMessageColor, setFormMessageColor] = useState('');

//     useEffect(() => {
//         if (validateEmail(email) && name.length > 0 && message.length > 0) {
//             setIsFormValid(true);
//         } else {
//             setIsFormValid(false);
//         }
//     }, [email, name, message]);

//     async function submitForm() {
//         if (!isFormValid) {
//             setFormMessage('Form unable to validate, please try again.');
//             setFormMessageColor('red');
//             return;
//         }
//         try {
//             setIsLoading(true);
//             const res = await fetch(
//                 'https://api.henryheffernan.com/api/contact',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         company,
//                         email,
//                         name,
//                         message,
//                     }),
//                 }
//             );
//             // the response will be either {success: true} or {success: false, error: message}
//             const data = (await res.json()) as
//                 | {
//                       success: false;
//                       error: string;
//                   }
//                 | { success: true };
//             if (data.success) {
//                 setFormMessage(`Message successfully sent. Thank you ${name}!`);
//                 setCompany('');
//                 setEmail('');
//                 setName('');
//                 setMessage('');
//                 setFormMessageColor(colors.blue);
//                 setIsLoading(false);
//             } else {
//                 setFormMessage(data.error);
//                 setFormMessageColor(colors.red);
//                 setIsLoading(false);
//             }
//         } catch (e) {
//             setFormMessage(
//                 'There was an error sending your message. Please try again.'
//             );
//             setFormMessageColor(colors.red);
//             setIsLoading(false);
//         }
//     }

//     useEffect(() => {
//         if (formMessage.length > 0) {
//             setTimeout(() => {
//                 setFormMessage('');
//                 setFormMessageColor('');
//             }, 4000);
//         }
//     }, [formMessage]);

//     return (
//         <div className="site-page-content">
//             <div style={styles.header}>
//                 <h1>Contact</h1>
//                 <div style={styles.socials}>
//                     <SocialBox
//                         icon={ghIcon}
//                         link={'https://github.com/henryjeff'}
//                     />
//                     <SocialBox
//                         icon={inIcon}
//                         link={'https://www.linkedin.com/in/henryheffernan/'}
//                     />
//                     <SocialBox
//                         icon={twitterIcon}
//                         link={'https://twitter.com/henryheffernan'}
//                     />
//                 </div>
//             </div>
//             <div className="text-block">
//                 <p>
//                     I am currently employed, however if you have any
//                     opportunities, feel free to reach out - I would love to
//                     chat! You can reach me via my personal email, or fill out
//                     the form below!
//                 </p>
//                 <br />
//                 <p>
//                     <b>Email: </b>
//                     <a href="mailto:henryheffernan@gmail.com">
//                         henryheffernan@gmail.com
//                     </a>
//                 </p>

//                 <div style={styles.form}>
//                     <label>
//                         <p>
//                             {!name && <span style={styles.star}>*</span>}
//                             <b>Your name:</b>
//                         </p>
//                     </label>
//                     <input
//                         style={styles.formItem}
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <label>
//                         <p>
//                             {!validateEmail(email) && (
//                                 <span style={styles.star}>*</span>
//                             )}
//                             <b>Email:</b>
//                         </p>
//                     </label>
//                     <input
//                         style={styles.formItem}
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <label>
//                         <p>
//                             <b>Company (optional):</b>
//                         </p>
//                     </label>
//                     <input
//                         style={styles.formItem}
//                         type="company"
//                         name="company"
//                         placeholder="Company"
//                         value={company}
//                         onChange={(e) => setCompany(e.target.value)}
//                     />
//                     <label>
//                         <p>
//                             {!message && <span style={styles.star}>*</span>}
//                             <b>Message:</b>
//                         </p>
//                     </label>
//                     <textarea
//                         name="message"
//                         placeholder="Message"
//                         style={styles.formItem}
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     />
//                     <div style={styles.buttons}>
//                         <button
//                             className="site-button"
//                             style={styles.button}
//                             type="submit"
//                             disabled={!isFormValid || isLoading}
//                             onMouseDown={submitForm}
//                         >
//                             {!isLoading ? (
//                                 'Send Message'
//                             ) : (
//                                 <p className="loading">Sending</p>
//                             )}
//                         </button>
//                         <div style={styles.formInfo}>
//                             <p
//                                 style={Object.assign(
//                                     {},
//                                     { color: formMessageColor }
//                                 )}
//                             >
//                                 <b>
//                                     <sub>
//                                         {formMessage
//                                             ? `${formMessage}`
//                                             : ' All messages get forwarded straight to my personal email'}
//                                     </sub>
//                                 </b>
//                             </p>
//                             <p>
//                                 <sub>
//                                     {!isFormValid ? (
//                                         <span>
//                                             <b style={styles.star}>*</b> =
//                                             required
//                                         </span>
//                                     ) : (
//                                         '\xa0'
//                                     )}
//                                 </sub>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ResumeDownload altText="Need a copy of my Resume?" />
//         </div>
//     );
// };

// const styles: StyleSheetCSS = {
//     form: {
//         flexDirection: 'column',
//         marginTop: 32,
//     },
//     formItem: {
//         marginTop: 4,
//         marginBottom: 16,
//     },
//     socialImage: {
//         width: 36,
//         height: 36,
//     },
//     buttons: {
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     formInfo: {
//         textAlign: 'right',

//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         paddingLeft: 24,
//     },
//     star: {
//         paddingRight: 4,
//         color: 'red',
//     },
//     button: {
//         minWidth: 184,
//         height: 32,
//     },
//     header: {
//         alignItems: 'flex-end',
//         justifyContent: 'space-between',
//     },
//     socials: {
//         marginBottom: 16,
//         justifyContent: 'flex-end',
//     },
//     social: {
//         width: 4,
//         height: 4,
//         // borderRadius: 1000,

//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: 8,
//     },
// };

// export default Contact;




const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
  icon: string;
  link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => (
  <a rel="noreferrer" target="_blank" href={link}>
    <div className="big-button-container" style={styles.social}>
      <img src={icon} alt="" style={styles.socialImage} />
    </div>
  </a>
);

const Contact: React.FC = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageColor, setFormMessageColor] = useState('');

  useEffect(() => {
    setIsFormValid(validateEmail(email) && name.length > 0 && message.length > 0);
  }, [email, name, message]);

  async function submitForm() {
    if (!isFormValid) {
      setFormMessage('Form validation failed. Please check your inputs.');
      setFormMessageColor('red');
      return;
    }

    setIsLoading(true);
    try {
      const res = await emailjs.send(
        'service_15allqh',     // Replace with your actual service ID
        'template_8ppubry',    // Replace with your actual template ID
        {
          name,
          email,
          company,
          message,
          time: new Date().toLocaleString()
        },
        '8mOhU3Vnvggmrd0Ep'     // Your public key
      );

      if (res.status === 200) {
        setFormMessage(`Message successfully sent. Thank you ${name}!`);
        setCompany('');
        setEmail('');
        setName('');
        setMessage('');
        setFormMessageColor(colors.blue);
      } else {
        setFormMessage('Something went wrong. Please try again.');
        setFormMessageColor(colors.red);
      }
    } catch (e) {
      console.error(e);
      setFormMessage('Error sending message. Please try again.');
      setFormMessageColor(colors.red);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (formMessage.length > 0) {
      setTimeout(() => {
        setFormMessage('');
        setFormMessageColor('');
      }, 4000);
    }
  }, [formMessage]);

  return (
    <div className="site-page-content">
      <div style={styles.header}>
        <h1>Contact</h1>
        <div style={styles.socials}>
          <SocialBox icon={ghIcon} link={'https://github.com/Kartik-Limbachiya'} />
          <SocialBox icon={inIcon} link={'https://www.linkedin.com/in/kartik-limbachiya-25439424a/'} />
          <SocialBox icon={twitterIcon} link={'https://twitter.com/'} />
        </div>
      </div>
      <div className="text-block">
        <p>
          I'm actively seeking opportunities in AI, cybersecurity, and cloud systems. If you're hiring or collaborating, I'd love to hear from you!
        </p>
        <p>
          <b>Email:</b>{' '}
          <a href="mailto:kartik.16994@sakec.ac.in">kartik.16994@sakec.ac.in</a>
        </p>
         <p><b>Mobile:</b>
            +91 9834148979
        </p>
    

        <div style={styles.form}>
          <label>
            <p>
              {!name && <span style={styles.star}>*</span>}
              <b>Your name:</b>
            </p>
          </label>
          <input
            style={styles.formItem}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            <p>
              {!validateEmail(email) && <span style={styles.star}>*</span>}
              <b>Email:</b>
            </p>
          </label>
          <input
            style={styles.formItem}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            <p><b>Company (optional):</b></p>
          </label>
          <input
            style={styles.formItem}
            type="text"
            name="company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label>
            <p>
              {!message && <span style={styles.star}>*</span>}
              <b>Message:</b>
            </p>
          </label>
          <textarea
            name="message"
            placeholder="Message"
            style={styles.formItem}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={styles.buttons}>
            <button
              className="site-button"
              style={styles.button}
              type="submit"
              disabled={!isFormValid || isLoading}
              onClick={submitForm}
            >
              {!isLoading ? 'Send Message' : <p className="loading">Sending</p>}
            </button>
            <div style={styles.formInfo}>
              <p style={{ color: formMessageColor }}>
                <b><sub>{formMessage || ' All messages are forwarded to my inbox securely.'}</sub></b>
              </p>
              <p><sub>{!isFormValid && <><b style={styles.star}>*</b> required</>}</sub></p>
            </div>
          </div>
        </div>
      </div>
      <ResumeDownload altText="Need a copy of my Resume?" />
    </div>
  );
};

const styles: StyleSheetCSS = {
  form: {
    flexDirection: 'column',
    marginTop: 32,
  },
  formItem: {
    marginTop: 4,
    marginBottom: 16,
  },
  socialImage: {
    width: 36,
    height: 36,
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInfo: {
    textAlign: 'right',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: 24,
  },
  star: {
    paddingRight: 4,
    color: 'red',
  },
  button: {
    minWidth: 184,
    height: 32,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  socials: {
    marginBottom: 16,
    justifyContent: 'flex-end',
  },
  social: {
    width: 4,
    height: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
};

export default Contact;
