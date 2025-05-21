"use client";
import PageContainer from "@/components/PageContainer";

import {
  Typography,
  Stack,
  Divider
} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, timelineItemClasses } from '@mui/lab';
import Image from "next/image";
import JPMChase from "@/assets/jpmorganchase_logo.jpeg";
import AdaLogo from "@/assets/55ip_logo.svg";
import ZISystechLogo from "@/assets/zi_systech_logo.png";
import durationCalculator from "@/lib/durationCalculator";

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
      },
      {
        position: 'Software Engineer I',
        start: 'April 2021',
        end: 'January 2023'
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
      },
    ]
  }
];


export default function Experience() {

  return (
    <PageContainer header="Work Experience">
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" variant="middle" flexItem />}
        spacing={2}
        className="mt-4"
      >
        {
          experiences.map((exp) => (
            <div key={exp.company}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Image src={exp.logo} alt={exp.company} width={52} />
                <div className="flex-1">
                  <Typography variant="h6">{exp.company}</Typography>
                  <Typography variant="body2">{exp.type} · <span className="whitespace-nowrap">{durationCalculator(exp.start, exp.end)}</span></Typography>
                  <Typography variant="subtitle2" color="text.secondary">{exp.location}</Typography>
                </div>
              </Stack>
              <Timeline sx={{ mt: 2, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                {
                  exp.roles.map((role, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator className="ml-1 mr-5">
                        <TimelineDot />
                        {index < exp.roles.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="body1" fontWeight={600} fontFamily="var(--font-poppins)">{role.position}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">{role.start} - {role.end || "Present"} · <span className="whitespace-nowrap">{durationCalculator(role.start, role.end)}</span></Typography>
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
