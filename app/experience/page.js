"use client";
import PageContainer from "@/components/PageContainer";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const experiences = [
  {
    role: 'Software Engineer III',
    company: 'JP Morgan Service India Pvt Ltd',
    date: 'Feb 2023 – Present',
    location: 'Mumbai, Maharashtra, India',
  },
  {
    role: 'Software Engineer I',
    company: 'JP Morgan Service India Pvt Ltd',
    date: 'Apr 2021 – Jan 2023',
    location: 'Mumbai, Maharashtra, India',
  },
  {
    role: 'Software Developer',
    company: 'Ada Annex Advisory Service Pvt Ltd',
    date: 'Nov 2019 – Mar 2021',
    location: 'Mumbai, Maharashtra, India',
  },
  {
    role: 'UI Developer',
    company: 'ZI Systech Pvt Ltd',
    date: 'Aug 2017 – Nov 2019',
    location: 'Mumbai, Maharashtra, India',
  },
];


export default function Experience() {

  return (
    <PageContainer header="Work Experience">
      <Box>
      {experiences.map((exp, index) => (
        <Card
          key={index}
          variant=""
          sx={{ mb: 2 }}
        >
          <CardContent>
            <Grid container spacing={2} wrap="nowrap">
              <Grid className="mt-[1px]">
                <WorkIcon color="primary" />
              </Grid>
              <Grid>
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  — {exp.location}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <CalendarTodayIcon fontSize="small" sx={{ mr: 1, mb: 0.5 }} />
                  <Typography variant="body2">{exp.date}</Typography>
                </Box>
                {/* <Typography variant="body2" mt={2}>
                  {exp.description}
                </Typography> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
    </PageContainer>
  )
}
