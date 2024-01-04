// gitprofile.config.js

const config = {
  github: {
    username: 'Sekseli3', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Akseli Tuominen',
    telegram: 'AkseliT',
    website: 'https://Sekseli3.github.io/Portfolio/',
    email: 'akseli2001.tuominen@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/Sekseli3/Portfolio/main/CV2024.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'C',
    'JavaScript',
    'HTML',
    'CSS',
    'React.js',
    'Node.js',
    'SQlite',
    'Scala',
    'Git',
    'Java',
  ],
  experiences: [
    {
      company: 'Ge Healthcare',
      position: 'Manufacturing Engineer',
      from: 'May 2022',
      to: 'Present',
      companyLink: 'https://www.gehealthcare.fi',
    },
    {
      company: 'Confide',
      position: 'Lobby Attendant',
      from: 'July 2019',
      to: 'September 2021',
      companyLink: 'https://confide.fi',
    },
  ],
    certifications: [
    {
      name: 'SFS 6002 Electrical Safety Card',
      body: 'Allows me to do electrical work in Finland, valid until 2028',
      year: '2023',
      link: 'https://koulutusmaailma.fi/fi/courses/26/145/electrical-safety-card/electrical-work-safety-training'
    },
  ],
  education: [
    {
      institution: 'Aalto University',
      degree: 'Bachelor of Electrical Engineering, Major: Automation and Systems Technology, Minor: Computer Science',
      from: '2021',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
