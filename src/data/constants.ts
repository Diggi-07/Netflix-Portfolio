
import { TimelineItem } from '../types';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

// Skills
export const skillsData = [
    // Programming Languages
    { name: "C", category: "Languages", description: "Structured programming language", icon: "SiC" },
    { name: "C++", category: "Languages", description: "Object-oriented programming", icon: "SiCplusplus" },
    { name: "JavaScript", category: "Languages", description: "Scripting for the web", icon: "SiJavascript" },
    { name: "Python", category: "Languages", description: "General-purpose high-level language", icon: "SiPython" },
    { name: "HTML", category: "Frontend", description: "Markup for the web", icon: "SiHtml5" },
    { name: "CSS", category: "Frontend", description: "Styling for the web", icon: "SiCss3" },
    { name: "Java", category: "Languages", description: "Widely-used general-purpose language", icon: "FaJava" },

    // Frontend Frameworks
    { name: "React", category: "Frontend", description: "Component-based UI library", icon: "FaReact" },
    
    // Backend & APIs
    { name: "Node.js", category: "Backend", description: "JavaScript runtime for backend", icon: "FaNodeJs" },
    { name: "SQL", category: "Backend", description: "Database Query", icon: "SiMysql" },
    { name: "RESTful API", category: "Backend", description: "Web communication standard", icon: "SiApachenetbeanside" }, // fallback icon

    // Cloud & DevOps

    { name: "Firebase", category: "Cloud", description: "Realtime DB and hosting", icon: "SiFirebase" },
    

    // Tools
    { name: "Git", category: "Tools", description: "Version control system", icon: "FaGitAlt" },
    { name: "Excel", category: "Tools", description: "Spreadsheet and data analysis", icon: "SiMicrosoftexcel" },

];


// Projects
export const projectsData = [
    // {
    //     title: "CodeNexus",
    //     description: "A Next.js & TypeScript-powered interview platform with secure authentication, real-time video calls, screen sharing, recording, and seamless interview management for scalability and high performance.",
    //     techUsed: "React, CSS3",
    //     image: "https://res.cloudinary.com/dyz1paeem/image/upload/v1742576766/codenexus_1_hrccxa.avif", // Place this image inside public/images
    // },

];

// Timeline (Work + Education)
export const timelineData: TimelineItem[] = [
    {
        timelineType: 'education',
        name: 'Jawaharlal Nehru Architecture and Fine Arts University, Hyderabad',
        title: 'B.Tech in Digital Techniques for Design and Planning',
        techStack: 'C, C++, Java, Data Structures, Algorithms',
        summaryPoints: [
            // add your cgpa & achievements
        ],
        dateRange: '2023 - Present'
    },
    {
        timelineType: 'education',
        name: 'KSCS School, Bokaro',
        title: 'Higher Secondary Education',
        techStack: 'Maths, Physics, Chemistry, Computer Science',
        summaryPoints: [
            'Secured 65% in final board exams',
            
        ],
        dateRange: '2020 - 2022'
    },

];


// Profile Banner
export const profileBannerData = {
    headline: "Digvijay Ram- Cybersecurity | Full-Stack Dev",
    profileSummary: "A third-year B.Tech student with a strong enthusiasm for cybersecurity and offensive security practices, driven by an interest in understanding real-world attack and defense mechanisms. I am actively building a solid foundation in computer networking while enrolling in hands-on courses and certifications focused on cybersecurity and red teaming. Alongside my security-focused learning, I am developing practical full-stack web development skills to better understand application architecture and system behavior. Throughout my academic journey, I have focused on continuous learning, practical experimentation, and strengthening my technical problem-solving abilities through projects and labs.",
    resumeLink: "",
    linkedinLink: "https://www.linkedin.com/in/digvijay-ram/",
    backgroundImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
};


// Contact Info
export const contactInfo = {
    name: "Digvijay Ram",
    title: "Cybersecurity | Full-Stack Dev",
    summary: "Actively seeking opportunities in cybersecurity, with a focus on offensive security and red teaming, while building supporting skills in web development and networking.",
    companyUniversity: "JNAFAU Hyderabad",
    linkedinLink: "https://www.linkedin.com/in/digvijay-ram/",
    email: "mailto:ramdiggi7.5@gmail.com",
    phoneNumber: "+91 6202527611",
    profilePicture: "/images/myself.jpg"
};


// Certifications
export const certificationsData = [
    {
        title: "Introduction to Genrative AI",
        issuer: "Google",
        issuedDate: "Oct 2025",
        link: "https://drive.google.com/file/d/1C2sFNRxqiuCp-9FpCiKm91aWpqdPdw4_/view?usp=drive_link",
        iconName: "googlecloud"
    },
    {
        title: "Oracle Sql, Certificate Of Completion",
        issuer: "Greatlearning",
        issuedDate: "March 2025",
        link: "https://drive.google.com/file/d/1nwFTzoD8QNq5J29CBHSkf0sAG8fpIEHk/view?usp=drive_link",
        iconName: "greatlearning"
    },
     {
        title: "Indo-Dutch Cyber Security School Participation",
        issuer: "Indo-Dutch Cyber Security School",
        issuedDate: "2024",
        link: "https://drive.google.com/file/d/1sQtFgFAx63bYSj9--795la7fgwsknLpj/view?usp=drive_link",
        iconName: "university"
    },
];

// Blogs
export const blogPosts = [

];

// Reading List
export const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        imgSrc: "/images/atomic_habits.jpg",
        description: "How small habits lead to big changes."
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        imgSrc: "/images/deep_work.jpg",
        description: "Rules for focused success in a distracted world."
    }
];


export const profiles = [
    {
        name: "Recruiter",
        image: blueImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" // Dark storm clouds
    },
    {
        name: "developer",
        image: greyImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" // Flickering neon lights
    },
    {
        name: "stalker",
        image: redImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" // Dark, abstract digital lights
    },
    {
        name: "Adventurer",
        image: yellowImage,
        backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" // Dark ocean waves at night
    },
];
