import PageContainer from "@/components/PageContainer";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <PageContainer header="About Me">
      <Typography variant="h6" gutterBottom className="pt-4">
        Hello, 👋 I&#39;m Chirag
      </Typography>
      <Typography variant="body1" gutterBottom lineHeight="24px" textAlign="justify">
        I&#39;m Experienced <b>ReactJS Frontend Engineer</b> with <b>7+ years</b> of expertise in leading UI development for <b>scalable,
        high-performance web applications</b>. Equally effective as a <b>team leader or individual contributor</b>, with a proven ability to {" "}
        <b>drive projects from concept to completion</b>. Focused on crafting <b>intuitive UIs</b>, <b>optimizing performance</b>, and leveraging
        modern frontend technologies to deliver <b>seamless user experiences</b>. Skilled in <b>HTML5, CSS3, CSS-in-JS, React,
        TypeScript, JavaScript(ES6+), Context API and Redux for State Management, Python (Django), and AWS</b>, with a strong
        focus on <b>scalability, maintainability, and team collaboration</b>.
      </Typography>

      <Typography variant="h6" gutterBottom className="pt-6" color="warning">
        My Skills & Technology expertise
      </Typography>
      <ul className="list-disc pl-5">
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Frontend:</b> HTML5, ReactJS, TypeScript, JavaScript (ES6+), AngularJS, jQuery, AG Grid (deep expertise), 
            AG Charts, ReCharts, Wordpress (CMS), Jest & React Testing Library
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Styling:</b> CSS3, CSS Grid & Flexbox, SCSS/LESS, Tailwind UI, MUI, Bootstrap UI, CSS-in-JS (Styled Components, Emotion)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>State Management:</b> Context-API, Redux, Redux-Saga, Redux-Thunk
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Accessibility:</b> WCAG, ARIA and Semantic HTML
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Backend & Databases:</b> Python (Django), PHP, NodeJS, PostgreSQL
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Designing & Prototyping Tool:</b> Figma, InVision, Zeplin
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Tools & DevOps:</b> AWS, Puppeteer, Jenkins, Git, Docker
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Agile & Project Management:</b> Agile workflow, Atlassian products (JIRA, Confluence, Bitbucket)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>Soft Skills:</b> Leadership & Mentorship, Collaboration & Communication, Flexibility & Continuous Learning
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom lineHeight="24px">
            <b>CI/CD Tools:</b> Jenkins, GitHub Actions
          </Typography>
        </li>
      </ul>

    </PageContainer>
  );
}
