/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Razib Hasan",
  title: "Hi all, I'm Razib",
  subTitle: emoji(
    "🚀 Passionate DevOps Engineer 🌐, on a relentless quest to architect the future 🏗️! Proficient in the art of leveraging cutting-edge libraries and frameworks 🛠️ to craft masterpieces of robust, scalable, and highly available software solutions. 💻 A virtuoso poised to automate, orchestrate, and conduct symphonies of development, deployment, and maintenance for mission-critical systems. 🔧 A devoted disciple of continuous integration and continuous delivery (CI/CD) 🔄, crafting a smoother and more efficient symphony of software development. ! 🌟"),
  resumeLink:
    "https://drive.google.com/file/d/1vdDouKc43zE6A2dfSlXBIH5_LkdC6Ieq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
//github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/razibul-hasan-69b58a10b/",
  gmail: "razibhasan70@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/razib.hasan.bullet",
  medium: "https://medium.com/@kkopsmirpur",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Unleash the Power of Scalability: Craft High-Impact Infrastructure for Your Web Applications!"
    ),
    emoji("⚡ Propel Your Web Presence with Progressive Web Applications - Automation at Your Service! "),
    emoji(
      "⚡ Seamlessly Fuse the Best: Integrate Top-Tier Third-Party Services - AWS, Digital Ocean, Azure, GCP - Your Gateway to Excellence! 🚀💎 "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Daffodil International University",
      logo: require("./assets/images/diu.png"),
      subHeader: "Bachelor of Science in Electronics & Telecommunication",
      duration: "May 2013 - September 2017",
    },
    {
      schoolName: "Daffodil International College",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary School Certificate.",
      duration: "January 2010 - April 2012",
    },
    {
      schoolName: "M.D.C Model Institute",
      logo: require("./assets/images/mdc.png"),
      subHeader: "Secondary School Certificate",
      duration: "January 2009 - April 2010",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Services", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Monitoring and Logging",
      progressPercentage: "70%"
    },
    {
      Stack: "Collaboration",
      progressPercentage: "80%"
    },
    {
      Stack: "Security",
      progressPercentage: "58%"
    },
    {
      Stack: "Automation",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Devops Engineer ICT 3",
      company: "NEXT Ventures",
      companylogo: require("./assets/images/nv.jpg"),
      date: "Nov 2023 – Present",
      desc: " Loading 🚀",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    
    {
      role: "Senior Devops Engineer",
      company: "Aleph-Labs Malaysia",
      companylogo: require("./assets/images/aleph.png"),
      date: "Jan 2022 – Nov 2023",
      desc: "Experienced Senior DevOps Engineer with a proven track record in automating, optimizing, and streamlining operations. Seeking to contribute expertise in building and maintaining scalable, reliable infrastructure.",
      descBullets: [
        "AWS / AZURE / ALIBABA CLOUD  ",
        "JENKINS / ARGO CD / BIT BUCKET / Rabbit MQ & MANY MORE /"
      ]
    },
    {
      role: "Devops Engineer",
      company: "Wunderman Thompson MSC Dhaka",
      companylogo: require("./assets/images/wt.jpg"),
      date: "Feb 2019 – Jan 2022",
      desc: "Experienced with various AWS Services like EC2, S3, RDS, VPC, ELB, EBS, ACM, SQS,SNS, CloudWatch, AWS Backup CloudFront, Elastic Transcoder, ECS, ECR, Fargate,Auto scaling,RDS etc."
      
    },
    {
      role: "Cyber Security Engineer",
      company: "NHQ Distributions LTD",
      companylogo: require("./assets/images/nhq.png"),
      date: "OCT 2017 – Feb 2019",
      desc: "Developed and implemented comprehensive security policies and procedures for safeguarding confidential data against cyber threats.Updated antivirus software and other applications to enhance system protection from malicious software.Analyzed system logs to identify suspicious network activity and provided solutions to rectify potential threats."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Organizations I've Collaborated with to Shape Their Technology",
  projects: [
    {
      image: require("./assets/images/vmlyr.png"),
      projectName: "VMLYR",
      projectDesc: "Site Migration To AWS & Total Maintenance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dev-bavculturerank.vmlyr.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "MIDF Berhad Philly",
      projectDesc: "Infrastructure create from scratch with Kubernetes & Maintenance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.midf.com.my/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CKAD",
      subtitle:
        "Certified Kubernetes Administrator Developer",
      image: require("./assets/images/cka.png"),
      
      
      footerLink: [
        
        
      ]
    },

    {
      title: "CKA",
      subtitle:
        "Certified Kubernetes Administrator",
      image: require("./assets/images/ckad.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "razibhasan70@gmail.com"
};

// Twitter Section

 const twitterDetails = {
 userName: "twitter", //Replace "twitter" with your twitter username without @
display: false // Set true to display this section, defaults to false
 }; 


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
