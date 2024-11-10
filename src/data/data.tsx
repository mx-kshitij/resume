import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/page-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import Pdf from './assets/resume.pdf';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kshitij Karandikar',
  description: "Welcome! Here you can find my resume and personal projects",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kshitij Karandikar`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Technical Architect</strong> with over{' '}
        <strong className="text-stone-100">10 years of expertise</strong> in end-to-end solution design, technical
        architecture, and application development. Highly skilled in{' '}
        <strong className="text-stone-100">Mendix, React, Java, and cloud solutions</strong>, with a track record of
        developing reusable, scalable solutions that enhance client satisfaction and reduce development time. Proven
        ability to lead teams, optimize CI/CD processes, and deliver innovative, high-performance applications across
        web, native, and PWA platforms.
      </p>
    </>
  ),
  actions: [
    {
      href: Pdf,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Technical Architect specializing in Mendix, React, Java and cloud tech, with a passion for travel, world cinema, photography, and emerging technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Amsterdam, NL', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Employment', text: 'Mendix B.V.', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Travelling, Photography, Gaming', Icon: SparklesIcon},
    // {label: 'Study', text: 'Bachelor of Engineering', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Development',
    skills: [
      {
        name: 'Mendix',
        level: 10,
      },
      {
        name: 'React / React native',
        level: 8,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'HTML & CSS',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'Kubernetes / Docker',
        level: 5,
      },
      {
        name: 'Azure / AWS / GCS',
        level: 5,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 9,
      },
      {
        name: 'Marathi',
        level: 5,
      },
      {
        name: 'Dutch',
        level: 5
      }
    ],
  },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
    // ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2016',
    location: 'Symbiosis Institute of Business Management, Pune, India',
    title: 'Post graduate diploma in Innovation and Corporate Entrepreneurship',
    content: <p>This course imbued me with skills in creativity, strategic thinking, and business model innovation. </p>,
  },
  {
    date: '2014',
    location: 'Institute of Technology and Management (ITM), Gwalior, India',
    title: 'Bachelor of Engineering (Mechanical)',
    content: <p>This program honed my technical skills, critical thinking, and soft skills, providing a strong foundation in engineering principles and problem-solving.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - Present',
    location: 'Mendix B.V.',
    title: 'Technical Architect',
    content: (
      <p>
        Architecting and developing scalable, reusable, secure and high performance solutions using Mendix, React, Java, React native, etc.
      </p>
    ),
  },
  {
    date: 'Sept 2019 - July 2021',
    location: 'Clevr B.V. (Formerly Mansystems B.V.)',
    title: 'Mendix Consultant',
    content: (
      <p>
        End to end app development with high quality and reliability using Mendix and customized components using JavaScript and Java.
      </p>
    ),
  },
  {
    date: 'Sept 2014 - Sept 2019',
    location: 'Infosys Ltd.',
    title: 'Senior Systems Engineer',
    content: (
      <p>
        DevOps app development and maintenance using IBM Notes (Lotus Notes) and Mendix.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'kshitijkarandikar@gmail.com',
      href: 'mailto:kshitijkarandikar@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Amsterdam, NL',
      href: 'https://www.google.com/maps/place/Amsterdam,+Netherlands/@52.3547418,4.8215604,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@yourbucketlistguy',
      href: 'https://www.instagram.com/yourbucketlistguy',
    },
    {
      type: ContactType.Github,
      text: 'mx-kshitij ',
      href: 'https://github.com/mx-kshitij',
    },
    {
      type: ContactType.LinkedIn,
      text: 'kshitijkarandikar',
      href: 'https://www.linkedin.com/in/kshitijkarandikar/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mx-kshitij'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kshitijkarandikar/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yourbucketlistguy'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
