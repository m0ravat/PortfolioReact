import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";
import { FaCircle } from "react-icons/fa"; // Example icon

// Timeline data with start dates for sorting
const timelineData = [
  {
    id: 1,
    title: "Started University of Westminster",
    description: "September 2023",
    startDate: new Date("2023-09-01"), // Start date for sorting
  },
  {
    id: 2,
    title: "Created a Password Generator in Python",
    description: "June 2024 - July 2024",
    startDate: new Date("2024-06-01"),
  },
  {
    id: 3,
    title: "Created a Group Project",
    description: "March 2024 - April 2024",
    startDate: new Date("2024-03-01"),
  },
  {
    id: 4,
    title: "Created First Personal Portfolio Website",
    description: "April 23, 2024 - August 10, 2024",
    startDate: new Date("2024-04-23"),
  },
  {
    id: 5,
    title: "Created To-Do List App",
    description: "July 19, 2024 - August 5, 2024",
    startDate: new Date("2024-07-19"),
  },
  {
    id: 6,
    title: "Created Mosque Management System",
    description: "January 2025 - February 2025",
    startDate: new Date("2025-01-01"),
  },
  {
    id: 7,
    title: "Created Weather App",
    description: "August 2024",
    startDate: new Date("2024-08-01"),
  },
  {
    id: 8,
    title: "Created CV Generator",
    description: "August 20th - 21st, 2024",
    startDate: new Date("2024-08-20"),
  },
  {
    id: 9,
    title: "Sky Group Project",
    description: "February 2025 - Ongoing",
    startDate: new Date("2025-02-01"),
  },
];

// Sort the timeline data by startDate
const sortedTimelineData = timelineData.sort(
  (a, b) => a.startDate - b.startDate
);

// Update IDs to reflect the sorted order
sortedTimelineData.forEach((item, index) => {
  item.id = index + 1;
});

const Timeline1 = () => {
  return (
    <Timeline position="alternate">
      {sortedTimelineData.map((item, index) => (
        <TimelineItem key={item.id}>
          {/* Separator (Icon and Connector) */}
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FaCircle />
            </TimelineDot>
            {index !== sortedTimelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          {/* Main Content (Title and Description) */}
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Timeline1;