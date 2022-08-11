// import * as React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import Typography from "@mui/material/Typography";
// import { Box, Divider } from "@mui/material";

// const Education = () => {
//   return (
//     <Box
//       id="Education"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "95vh",
//         backgroundImage:
//           "linear-gradient(135deg, rgba(79,189,191,1) 0%, rgba(252,252,254,1) 100%)",
//         backgroundPosition: "center top",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "scroll",
//         backgroundSize: "cover",
        
//       }}
//     >
//        <Divider sx={{  display: "flex", mt: "6rem", width:"20rem" }}>
//         <Typography  sx={{  fontFamily:"montserrat" }}variant="h5" component="h4">
//           My Education
//         </Typography>
//       </Divider>
//       <Timeline position="alternate" color="common.white">
//         <TimelineItem>
//           <TimelineOppositeContent
//             sx={{ m: "auto 0" }}
//             align="right"
//             variant="body2"
//             color="text.secondary"
//           >
//             2013 to 2016
//           </TimelineOppositeContent>
//           <TimelineSeparator>
//             <TimelineConnector />
//             <TimelineDot></TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="h6" component="span">
//               Shri Ramdeobaba College of Engineering and management
//             </Typography>
//             <Typography>Computer Science and engineering</Typography>
//           </TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineOppositeContent
//             sx={{ m: "auto 0" }}
//             variant="body2"
//             color="text.secondary"
//           >
//             2010 to 2013{" "}
//           </TimelineOppositeContent>
//           <TimelineSeparator>
//             <TimelineConnector />
//             <TimelineDot></TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="h6" component="span">
//               Shri Datta Meghe PolyTechnic
//             </Typography>
//             <Typography>Information Techonlogy</Typography>
//           </TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineOppositeContent
//             sx={{ m: "auto 0" }}
//             align="right"
//             variant="body2"
//             color="text.secondary"
//           >
//             2008 to 2010
//           </TimelineOppositeContent>
//           <TimelineSeparator>
//             <TimelineConnector />
//             <TimelineDot></TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="h6" component="span">
//               Jetkings Institute
//             </Typography>
//             <Typography>Hardware and networking Certification</Typography>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </Box>
//   );
// };
// export default Education;
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

const Education = () => {
  return (
    <Box
      id="Education"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "85vh",
        backgroundImage:
        "linear-gradient(135deg, rgba(79,189,191,1) 0%, rgba(252,252,254,1) 100%)",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",

      }}
    >
      <Divider sx={{  display: "flex", mt: "4rem", }}>
        <Typography  sx={{  fontFamily:"montserrat", color:"#242526" }}variant="h5" component="h4">
          My Education
        </Typography>
      </Divider>
      <Timeline position="alternate"  >
        <TimelineItem >
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat", fontSize:"1rem"}}
            align="right"
            variant="body2"
            color="#242526"
            
          >
            2020 to 2024
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineConnector sx={{ bgcolor: '#242526' }} />
            <TimelineDot sx={{ bgcolor: '#242526' }}></TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#242526' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat", color:"#242526"  }}variant="h6" component="span">
              Malaviya National Institute Of Techonlogy
            </Typography>
            <Typography  sx={{  fontFamily:"montserrat", color:"#242526" }}>Electronics and Communication Engineering</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat", fontSize:"1rem"}}
            variant="body2"
            color="#242526"
          >
            2018 to 2020{" "}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#242526' }}/>
            <TimelineDot sx={{ bgcolor: '#242526' }}></TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#242526' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat", color:"#242526" }}variant="h6" component="span">
              Maheshwari Public School
            </Typography>
            <Typography sx={{  fontFamily:"montserrat", color:"#242526" }}>Senior Secondary School</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" ,fontFamily:"montserrat", fontSize:"1rem"}}
            align="right"
            variant="body2"
            color="#242526"
          >
            2016 to 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#242526' }}/>
            <TimelineDot sx={{ bgcolor: '#242526' }}></TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#242526' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography  sx={{  fontFamily:"montserrat", color:"#242526" }}variant="h6" component="span">
            Maheshwari Public School
            </Typography>
            <Typography sx={{  fontFamily:"montserrat" }}>High School</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
export default Education;
