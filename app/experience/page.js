"use client";
import PageContainer from "@/components/PageContainer";

import {
  Typography,
  Stack,
  Divider,
  Link
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, timelineItemClasses } from '@mui/lab';
import Image from "next/image";
import JPMChase from "@/assets/jpmorganchase_logo.jpeg";
import AdaLogo from "@/assets/55ip_logo.svg";
import ZISystechLogo from "@/assets/zi_systech_logo.png";
import durationCalculator from "@/lib/durationCalculator";
import { useState } from "react";

const experiences = [
  {
    company: 'JPMoragnChase',
    logo: JPMChase,
    type: 'Full-time',
    start: 'April 2021',
    end: null,
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        position: 'Software Engineer III',
        start: 'February 2023',
        end: null,
        key: 'j2',
        tech_stack: ['React', 'TypeScript', 'Python', 'Django', 'Redux', 'MUI', 'Jest', 'React Testing Library', 'Jenkins', 'AWS', 'AG-Grid' ],
        resp: [
          "Utilizing Figma for designing intuitive user interfaces, led the UI development for the PM Console web portal using React, TypeScript, Redux with Redux-Toolkit, and integrating REST APIs.",
          "Worked on CI/CD pipelines using Jenkins for automated testing and deployment.",
          "Worked closely with backend & data analyst teams on platform architecture, including AWS services, scheduled workers, database models, and data flow.",
          "Used MUI (Material-UI) component library to create a consistent and responsive design system, enhancing the user experience across various devices.",
          "Worked with POs and UX designers to understand requirements and translate as well as breakdown features into manageable tasks for agile sprints.",
          "Monitored and optimized application performance, for faster load times and improving overall responsiveness through code-splitting, lazy loading, and efficient state management.",
          "Implemented unit tests using Jest and React Testing Library, achieving 80%+ code coverage and ensuring the reliability of UI components.",
          "Implemented AG-Grid with advanced features such as Row Grouping, Aggregation, Tree Data, Master-Detail Views, Server-Side Data Handling, Custom Headers, Filters, and Pagination, enhancing data visualization performance by 50%.",
          "Built business logic, REST APIs for account submission and trade order generation workflows using Python3.12.",
          "As a part of artifact team, worked on migrating common business logic and process into python packages which are used across applications.",
          "Led the team in parallel during the development of a new React application by providing architectural guidance. Managed and review all the pull requests, ensuring high code quality, consistency, and adherence to best practises.",
          "Served as the Point of Contact (POC) for 55ip and Trade Generation, mentoring 5+ UI developers and providing ongoing consultation and knowledge transfer."
        ]
      },
      {
        position: 'Software Engineer I',
        start: 'April 2021',
        end: 'January 2023',
        key: 'j1',
        tech_stack: ['React', 'TypeScript', 'Python', 'Django', 'Redux', 'MUI', 'Jest', 'React Testing Library', 'AngularJs', 'AG-Grid'],
        resp: [
          "Spearheaded the migration of the 55ip web portal (AngularJS) UI into React using TypeScript and Redux for State Management. Implementing modernized designs and successfully completing the transition within 5 months.",
          "Created UI features using React libraries and improved performance for handling large datasets of 500K+ rows.",
          "Scripted a PDF generation tool using Node.js (Puppeteer-core) cutting document generation time from 10 seconds to 3 seconds, which generates 1000+ PDF daily.",
          "Used AG-Grid in Trade Generation for enhancing data visualization and performance. Reduced the page load time from 3 mins to 2 sec",
          "Built REST APIs for Python commands and SQL queries using Django ORM, reducing the time taken for daily activity of report generation by 80%."
        ]
      },
    ]
  },
  {
    company: 'Ada Annex Advisory Service Pvt Ltd',
    logo: AdaLogo,
    type: 'Full-time',
    start: 'November 2019',
    end: 'March 2021',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        position: 'Software Developer',
        start: 'November 2019',
        end: 'March 2021',
        key: 'a1',
        tech_stack: ['ReactJS', 'AngularJS', 'JavaScript', 'HTML5', 'CSS3', 'Python'],
        resp: [
          "Designed 10+ UI wireframes iteratively based on team feedback.",
          "Developed and maintained 20+ UI components using ReactJS, AngularJS, and JavaScript.",
          "Optimized UI performance to efficiently handle datasets of 50k records.",
          "Ensured a seamless and user-friendly experience through intuitive design and development.",
          "Refactored legacy Python code to improve performance and maintainability, resulting in a 25% reduction in code complexity and enhanced code readability for future development."
        ]
      },
    ]
  },
  {
    company: 'ZI Systech Pvt Ltd',
    logo: ZISystechLogo,
    type: 'Full-time',
    start: 'August 2017',
    end: 'November 2019',
    location: 'Mumbai, Maharashtra, India',
    roles: [
      {
        position: 'UI Developer',
        start: 'August 2017',
        end: 'November 2019',
        key: 'z1',
        tech_stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS', 'WordPress'],
        resp: [
          "Sole UI Developer managing the entire web portal UI for 1.5+ years.",
          "Collaborated with designers & product managers to deliver user-friendly features. Designed and built 20+ UI features using HTML, CSS, JavaScript, jQuery, and AngularJS.",
          "Ensured cross-browser compatibility across 5 browsers Firefox, Chrome, Safari, IE, Edge including mobile device compatibility.",
          "Ensured accessibility using WCAG, ARIA and Semantic HTML.",
          "Optimized UI performance, achieving an 80% reduction in page load time and minimizing lag and browser unresponsiveness.",
          "Managed the marketing site which was developed in using WordPress."
        ]
      },
    ]
  }
];


export default function Experience() {
  const [showMore, setShowMore] = useState([]);

  const toggleShowMore = (key) => {
    if (showMore.includes(key)) {
      setShowMore(showMore.filter(item => item !== key));
    } else {
      setShowMore([...showMore, key]);
    }
  };

  return (
    <PageContainer header="Work Experience">
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" variant="middle" flexItem />}
        spacing={2}
        className="mt-4"
      >
        {
          experiences?.map((exp) => (
            <div key={exp.company}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Image src={exp.logo} alt={exp.company} width={52} />
                <div className="flex-1">
                  <Typography variant="h6" lineHeight={1} className="pb-1">{exp.company}</Typography>
                  <Typography variant="body2">{exp.type} • <span className="whitespace-nowrap">{durationCalculator(exp.start, exp.end)}</span></Typography>
                  <Typography variant="subtitle2" color="text.secondary">{exp.location}</Typography>
                </div>
              </Stack>
              <Timeline sx={{ mt: 2, px: 0, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                {
                  exp.roles?.map((role, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator className="mr-1 md:mr-5 ml-1 md:ml-5">
                        <TimelineDot />
                        {index < exp.roles.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent sx={{ pr: 0 }}>
                        <Typography variant="body1" fontWeight={600} fontFamily="var(--font-poppins)">{role.position}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">{role.start} - {role.end || "Present"} • <span className="whitespace-nowrap">{durationCalculator(role.start, role.end)}</span></Typography>  
                        <Typography variant="body2" fontSize={14}>
                          {role.tech_stack.join(' • ')}
                        </Typography>
                        {
                          showMore.includes(role.key) ? (
                            <div className="my-1">
                              <Typography variant="subtitle2" fontWeight={600} fontFamily="var(--font-poppins)" className="mb-1">
                                Responsibilities & Achievements
                                <Link 
                                  underline="false"
                                  onClick={() => toggleShowMore(role.key)}
                                  fontWeight={400}
                                  className="cursor-pointer pl-3"
                                >
                                  Hide
                                </Link>
                              </Typography>
                              <ul className="list-disc pl-4 md:text-justify">
                                {
                                  role.resp?.map((resp, index) => (
                                    <li key={index}>
                                      <Typography variant="subtitle2" fontWeight={400} fontFamily="var(--font-poppins)" fontSize={13} className="mb-1">
                                        {resp}
                                      </Typography>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                          ) : (
                            <Link 
                              underline="false"
                              onClick={() => toggleShowMore(role.key)}
                            >
                              <Typography variant="subtitle2" fontFamily="var(--font-poppins)" className="pt-1 mb-1 cursor-pointer">
                                View Responsibilities & Achievements  
                              </Typography>
                            </Link>
                          )
                        }
                        
                      </TimelineContent>
                    </TimelineItem>
                  ))
                }
              </Timeline>
            </div>
          ))
        }
      </Stack>
    </PageContainer>
  )
}
