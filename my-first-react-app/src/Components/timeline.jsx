import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography} from "@mui/material";
import { FaCircle } from "react-icons/fa"; // Example icon

// Timeline data with start dates for sorting
const timelineData = [
  {
    id: 1,
    title: "Started University of Westminster (Sep 2023)",
    description: "When I first started to learn how to code in python, java and HTML/CSS/JS",
    startDate: new Date("2023-09-01"), // Start date for sorting
  },
  {
    id: 2,
    title: "Created a Password Generator in Python (06/24 - 07/24)",
    description: "My first personal python project which implemented core programming concepts",
    startDate: new Date("2024-06-01"),
  },
  {
    id: 3,
    title: "Started my 1st Group Project (03/24 - 04/24)",
    description: "This was my first largescale web project which mainly composed of HTML/CSS",
    startDate: new Date("2024-03-01"),
  },
  {
    id: 4,
    title: "Created First Personal Portfolio Website (04/24 - 08/24)",
    description: "I spent months finetuning my HTML/CSS/JS skills alongside utilising basic UI/UX design principles. Implemented webpack and dynamic page loading too",
    startDate: new Date("2024-04-23"),
  },
  {
    id: 5,
    title: "Created To-Do List App (07/24 - 08/24)",
    description: "My first large scale JS application that implemented basic OOP principles alongside basic CRUD functions",
    startDate: new Date("2024-07-19"),
  },
  {
    id: 6,
    title: "Created Mosque Management System (01/25 - 02/25)",
    description: "My first grand scale Java project, implementing key and complex OOP principles while querying a local MySQL DB. ",
    startDate: new Date("2025-01-01"),
  },
  {
    id: 7,
    title: "Created Weather App (08/24)",
    description: "My first project which introduced me to API use",
    startDate: new Date("2024-08-01"),
  },
  {
    id: 8,
    title: "Created CV Generator (08/24)",
    description: "My first project in React which utilised state management",
    startDate: new Date("2024-08-20"),
  },
  {
    id: 9,
    title: "Sky Group Project (02/25 - ??/25)",
    description: "Ongoing group project for Sky utilising Django, SQLite and Bootstrap",
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
    <Timeline position="alternate" className="mx-2">
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
          <TimelineContent className="bg-slate-200 rounded-3xl"         
          sx={{transform: index % 2 === 0 ? "translateX(2%)" : "translateX(-2%)", maxWidth:"100%"}}>
              <Typography variant="h7" component="h5" className="bg-gray-700 text-cyan-500 px-2 py-1 w-full rounded-md">
                {item.title}
              </Typography>
              <Typography className="px-2 py-1">{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Timeline1;