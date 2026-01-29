# 🎬 NETFLIX-Themed Portfolio Website

<p align="center">
  <b>A Netflix-inspired personal portfolio built with React & TypeScript</b>
</p>

![Demo App](./img.jpeg)

---

## 📌 Introduction

A modern, **Netflix-themed personal portfolio website** designed to present my academic background, technical skills, projects, and interests through a cinematic and interactive UI.  
This project reflects my journey as a **cybersecurity enthusiast** while learning **full-stack web development**, combining strong visuals with structured content.

---

## 👨‍💻 About Me

**Digvijay Ram**  
🎓 Third-Year B.Tech Student – **JNAFAU Hyderabad**  
🔐 Cybersecurity Enthusiast | Full-Stack Development Learner  

I am a highly motivated undergraduate student with a strong interest in **cybersecurity**, particularly offensive security and red teaming concepts. I am actively building a foundation in **computer networking, system behavior, and secure application design**, while enrolling in hands-on courses and certifications in cybersecurity.

Alongside my security-focused learning, I am developing **full-stack web applications** to better understand how real-world systems are built, deployed, and secured.

---

## 🛠️ Tech Stack

| Technology       | Use                            |
|------------------|---------------------------------|
| **React**        | Frontend UI framework           |
| **TypeScript**   | Type safety & component typing  |
| **React Router** | Routing & profile switching     |
| **React Icons**  | Font icons                      |
| **Cloudinary**   | CDN image hosting               |
| **Firebase**     |   (future scope)                |
| **LocalStorage** | Session management              |
| **Custom CSS**   | Netflix-themed design system    |

---

## 📂 Project Structure

```shell
Netflix-Portfolio/
│
├── public/                              # Public assets (favicon, images, etc.)
│   ├── images/                          # Static images (logos, profile pics)
│   └── index.html                       # Main HTML file
│
├── src/                                 # Main React application
│   ├── assets/                          # Fonts, audio (e.g., netflix-sound.mp3), misc assets
│   ├── components/                      # Reusable UI components
│   │   ├── Navbar.tsx                   # Netflix-style top navbar
│   │   ├── ProfileCard.tsx              # Profile selector cards
│   │   ├── TopPicksRow.tsx              # Horizontal scroll row (Netflix style)
│   │   ├── ContinueWatching.tsx         # Dynamic cards (music, blogs, game, etc.)
│   │   └── PlayButton.tsx / MoreInfo.tsx # Buttons used in banners
│   │
│   ├── data/                            # Constants & static data
│   │   └── constants.ts                 # Skills, projects, certifications, etc.
│   │
│   ├── pages/                           # Main page components
│   │   ├── NetflixTitle.tsx             # Animated intro splash screen with sound
│   │   ├── Browse.tsx                   # Who's watching? (profile selection)
│   │   ├── ProfilePage.tsx              # Main dashboard page per profile
│   │   ├── WorkExperience.tsx           # Vertical timeline for education/work
│   │   ├── Skills.tsx                   # Categorized skills grid
│   │   ├── Projects.tsx                 # Project gallery with tech stacks
│   │   ├── Certifications.tsx           # Certification cards with icons
│   │   ├── Blogs.tsx                    # Blog summaries with images and links
│   │   ├── Music.tsx                    # Personal music picks and genres
│   │   ├── Reading.tsx                  # Reading recommendations (books/articles)
│   │   ├── Game.tsx                     # Cube Run game iframe with close button
│   │   └── ContactMe.tsx                # Contact info + footer with social links
│   │
│   ├── types/                           # TypeScript interfaces and types
│   │   └── types.ts                     # Interfaces for skills, projects, timelines
│   │
│   ├── App.tsx                          # Main application routes and layout
│   ├── index.tsx                        # Entry point for React DOM rendering
│   └── react-app-env.d.ts               # TypeScript environment types
│
├── styles/ or embedded `*.css`          # Component-specific CSS files
│   └── Navbar.css, Browse.css, etc.     # Netflix-inspired UI styling
│
├── .gitignore                           # Ignored files for git
├── package.json                         # Project dependencies and scripts
├── tsconfig.json                        # TypeScript compiler configuration
└── README.md                            # 📖 Project overview and documentation
```
---

## 🧩 Dynamic Routing

- `/browse`: Who’s watching? → Select Recruiter/Developer/Adventurer etc.
- `/profile/:profileName`: Loads dynamic profile data + background + top picks.
- `/game`: Loads CubeRun game with escape option.
- `/music`, `/projects`, `/skills`, `/contact-me`, `/blogs` → Standalone pages.

🔒 **Session is preserved** using `localStorage` to remember user role on Home clicks.

---

## 🚀 Getting Started

Want to set this up locally? Follow these steps:

1. **Clone the Repository**: Copy the repository to your local system.
2. **Install Dependencies**: Use a package manager to install the required dependencies.

```bash
nvm install 18
nvm use 18
```
After upgrading Node.js, clear your node_modules and reinstall:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```
3. **Run the Project**: Start the development server.

```bash
npm start
```

4. **Visit the Local Server**: Open your browser and navigate to the local server URL.
---

## 🎮 Cube Run Game

- Game is embedded in `/game` route using an iframe.
- Styled Netflix-style with custom close icon to return to profile.
- Full-screen experience with **no scrollbars or zoom** issues.
- Fully responsive and seamless game experience.

---

## 📱 Mobile Support

Fully responsive across:

- 📱 iOS / Android Phones  
- 💻 Desktop & Tablets  
- ✅ Built with `@media` queries and responsive layout principles

---

## 📧 Contact

- 💻 GitHub:(https://github.com/Diggi-07)
- 📧 Email: [ramdiggi7.5@gmail.com](mailto:ramdiggi7.5@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/digvijay-ram/)

---


## 🌟 Show Your Support
If you liked the Netflix Portfolio:

- ⭐ Star the repo

- 🔀 Fork and customize

- 🤝 Connect on LinkedIn

---
<p align="center"> <b>Digvijay Ram</b><br/> Cybersecurity Enthusiast | Full-Stack Development Learner </p> <p align="center"> Made with ❤️
</p>
