// import React, { useEffect } from "react";
// import "./styles/Contactus.css";
// import Form from "./Form";
// import gmailStiker from "../assets/image/gmail.png";
// import phoneStiker from "../assets/image/1220365_whatsapp_chat_communication_message_phone_icon.png";
// import githubStiker from "../assets/image/github (3).png";
// import linkedinStiker from "../assets/image/linkedin.png";
// import ContactNetwork from "./ContactNetwork";
// const cellPhone =
//   "https://api.whatsapp.com/send/?phone=573226836764&text&app_absent=0";
// const githubLink = "https://github.com/brandonecheverry";

// const Contactus = () => {

//   const handleScrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     handleScrollToTop()
//   }, [])


//   return (
//     <section id="contact" className="s-contact target-section">
//       <div className="row s-contact__header">
//         <div className="column large-12">
//           <h3 className="section-header-allcaps">
//             <span className="black-background">{/*Say Hello*/}Contáctame</span>
//           </h3>
//         </div>
//       </div>
//       <div className="row s-contact__content">
//         <div className="column large-7 medium-12">
//           <h4 className="huge-text">
//             <span className="black-background">
//               {/* Let's start a new project together, I want to collaborate to
//                 materialize that idea into a successful project. */}
//               Estoy listo para iniciar un nuevo proyecto y ayudarte a llevar a
//               cabo tu idea.
//             </span>
//           </h4>
//           <Form />
//         </div>
//         <div className="column large-4 medium-12">
//           <div className="row contact-infos">
//             <div
//               className="column large-12 medium-6 tab-12"
//               id="ContactNetwork-Container"
//             >
//               <div className="contact-block">
//                 <ContactNetwork
//                   stiker={gmailStiker}
//                   alt="gmail-Stiker"
//                   title="Correo Electrónico"
//                   header="Email"
//                   linkName="b.angulo@utp.edu.co"
//                 />
//                 <ContactNetwork
//                   stiker={githubStiker}
//                   alt="github-Stiker"
//                   title="Github"
//                   header="Github"
//                   href={githubLink}
//                   target="_blank"
//                   linkName="BrandonEcheverry"
//                 />
//                 <ContactNetwork
//                   stiker={phoneStiker}
//                   alt="phone-Stiker"
//                   title="WhatsApp"
//                   header="WhatsApp"
//                   href={cellPhone}
//                   target="_blank"
//                   linkName="Enlace al Chat"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contactus;
