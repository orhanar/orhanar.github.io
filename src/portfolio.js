/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Orhan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable systems.",
  og: {
    title: "Orhan Arifoglu Portfolio",
    type: "website",
    url: "https://orhanar.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Orhan Arifoglu",
  logo_name: "OrhanArifoglu",
  nickname: "orhanar",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable systems.",
  resumeLink:
    "https://drive.google.com/file/d/1cED2wgVCXOksnkkD2uLR8xrvzeizwA1o/view",
  portfolio_repository: "https://github.com/orhanar/orhanar.github.io",
  githubProfile: "https://github.com/orhanar",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/orhanar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/orhanarifoglu/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:orhanarifoglu@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Game Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with Unity Game Engine in 2D and 3D setting",
        "⚡ Working on own general purpose game engine project",
        "⚡ Deploying Unity Games to Docker Containers for CI/CD testing",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Recreational Programming",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience working on low level programming",
        "⚡ Working on various tools like APIs and Compilers",
      ],
      softwareSkills: [
      ],
    },
    {
      title: "Cyber Security",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience working on Capture The Flag (CTF)s",
        "⚡ Experience working on Cisco Networks",
      ],
      softwareSkills: [
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/orhanarifoglu?hr_r=1",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/orhana",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/orhanar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kingston University",
      subtitle: "BSc(Hons) Computer Science",
      logo_path: "school-logo.png",
      alt_name: "Kingston University",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have studied Computer Science subjects like DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Web programming, Desktop Programming and Project Management.",
        "⚡ I achieved Second-class honours, upper division.",
      ],
      website_link: "https://www.kingston.ac.uk/",
    },
    {
      title: "Kingston College",
      subtitle: "HND Computing and Systems Development",
      logo_path: "school-logo.png",
      alt_name: "Kingston College",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have studied modules like Human Computer Interaction, Web Development, Game Programming.",
        "⚡ I achieved Merit.",
      ],
      website_link: "https://stcg.ac.uk/kingston-college",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some businesses that required high performance and scalable code.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "L3Harris Technologies",
          company_url: "https://www.l3harris.com/en-gb/united-kingdom?regional_redirect=en-gb",
          logo_path: "L3Harris.jpg",
          duration: "July 2021 - Current",
          location: "Portsmouth, United Kingdom",
          description:
            "I am working on sea projects writing scalable, maintainable high performance C++ code",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Ed’s Garden Services",
          company_url: "https://edsgardenservices.co.uk/",
          logo_path: "ed-garden.svg",
          duration: "Feb 2020 - Mar 2020",
          location: "London, United Kingdom",
          description:
            "Developed, debugged and fixed bugs within the subsystem's PHP and Javascript code. Also improved the performance of SQL Queries",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of tools. My best experience is on creating desktop applications using various programming languages.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "orhan.jpg",
    description:
      "You can message me through mail, I will reply within 24 hours. I can help you with AI Dev, Web Dev, Game Dev, Recreational Dev, Computer Science and Cyber Security.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write posts about various domains of Computer Science.",
    link: "https://orhanar.github.io/blog/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
  },
  phoneSection: {
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
