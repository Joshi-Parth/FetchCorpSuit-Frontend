// pages/dashboard.js
"use client"; 


import { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemButton, ListItemText, Typography, TextField, Button, Box, Paper, Grid } from '@mui/material';


export default function Dashboard() {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState('');

    useEffect(() => {
    // Fetch the list of meetings from your API
        fetch('http://100.26.193.241:8080/transcripts')
        .then((res) => res.json())
        .then((data) => {
            if (data.transcripts) {
            const meetingsArray = Object.entries(data.transcripts).map(([id, details]) => {
                if (typeof details === 'object' && details !== null) {
                    return {
                        id,
                        ...details,
                    };
                } else {
                    // If details is not an object, handle it differently
                    return {
                        id,
                        details, // or you can format it as per your requirement
                    };
                }
            });
            setMeetings(meetingsArray);
            }
        })
        .catch((error) => console.error('Error fetching meetings:', error));
    }, []);

    function handleMeetingSelect(meeting) {
        setSelectedMeeting(meeting);
        setQuery(''); // Reset the query input when a new meeting is selected
        setQueryResult(''); // Reset the query result when a new meeting is selected
    }
    
    function handleQuerySubmit() {
        const apiEndpoint = `http://127.0.0.1:5000/ask-meeting/${selectedMeeting.id}`; // Replace with your GPT API endpoint
        const requestBody = { 
            query: query  // The user's query
        };
        console.log(requestBody);
    
        fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
          .then((response) => response.json())
          .then((data) => setQueryResult(data.answer))
          .catch((error) => console.error('Error processing query:', error));
    }
    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', border: "none" }}>
          <Grid container spacing={2}>
            {/* Left Sidebar for Meetings */}
            <Grid item xs={3}>
              <Paper sx={{ padding: 2, height: '100%', overflowY: 'auto' , backgroundColor: '#151719', border: "none" }}>
                <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
                  My Meetings
                </Typography>
                <List>
                  {meetings.map((meeting, index) => (
                    <ListItem 
                      key={index}
                      sx={{ 
                        my: 1, 
                        border: 1, 
                        borderRadius: 2, 
                        borderColor: 'grey.300', 
                        textAlign: 'center', 
                        color: 'white'
                      }} 
                      disablePadding
                    >
                      <ListItemButton onClick={() => handleMeetingSelect(meeting)}>
                        <ListItemText primary={meeting.topic} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
    
            {/* Right Side Content for Button and Response */}
            <Grid item xs={9}>
              <Box sx={{ padding: 2 }}>
                {selectedMeeting ? (
                  <>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {selectedMeeting.topic}
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      variant="filled"
                      color="primary"
                      label="Ask a question about this meeting"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      sx={{ marginBottom: 2, backgroundColor: "white" }}
                      rows={4}
                    />
                    <Button variant="contained" sx={{ marginBottom: 2, color: "white" }} color="primary" onClick={handleQuerySubmit}>
                      Ask
                    </Button>
                    {queryResult && (
                      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                        <Typography variant="h6">Response:</Typography>
                        <Typography variant="body1">{queryResult}</Typography>
                      </Paper>
                    )}
                  </>
                ) : (
                  <Typography variant="h6">Select a meeting from the left to view details.</Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      );
    // return (
    //     <Container maxWidth="md">
    //         <Typography variant="h3" gutterBottom sx={{ display: "flex" , justifyContent: "center" , marginTop: "10%"}}>
    //             Meetings Dashboard
    //         </Typography>
    //       <Box
    //         display="flex"
    //         flexDirection="column"
    //         alignItems="center"
    //         justifyContent="center"
    //         minHeight="100vh"
    //       >
    //         <List component={Box} sx={{ width: '100%' }}>
    //           {meetings.map((meeting, index) => (
    //             <ListItem 
    //               key={index}
    //               sx={{ 
    //                 my: 2, 
    //                 p: 1, 
    //                 border: 1, 
    //                 borderRadius: 10, 
    //                 borderColor: 'grey.300', 
    //                 textAlign: 'center',
    //                 display: 'flex',
    //                 justifyContent: 'center',
    //               }} 
    //               disablePadding
    //             >
    //               <ListItemButton onClick={() => handleMeetingSelect(meeting)}>
    //                 <ListItemText primary={meeting.topic} />
    //               </ListItemButton>
    //             </ListItem>
    //           ))}
    //         </List>
    //       </Box>
    
    //       {selectedMeeting && (
    //         <Box mt={4} textAlign="center">
    //           <Typography variant="h5" component="h2">
    //             {selectedMeeting.topic}
    //           </Typography>
    //           <Box mt={4}>
    //             <TextField
    //               fullWidth
    //               label="Ask a question about this meeting"
    //               variant="outlined"
    //               value={query}
    //               onChange={(e) => setQuery(e.target.value)}
    //               sx={{ marginBottom: 2 }}
    //             />
    //             <Button variant="contained" color="primary" onClick={handleQuerySubmit}>
    //               Ask
    //             </Button>
    //           </Box>
    //           {queryResult && (
    //             <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
    //               <Typography variant="h6">Response:</Typography>
    //               <Typography variant="body1">{queryResult}</Typography>
    //             </Paper>
    //           )}
    //         </Box>
    //       )}
    //     </Container>
    //   );
//   return (
//     <Container maxWidth="md">
//       {/* <Typography variant="h3" component="h1" gutterBottom sx={{ padding: 2, marginTop: 10 }}>
//         Meetings Dashboard
//       </Typography>
//       <List component={Paper}>
//         {meetings.map((meeting, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton onClick={() => handleMeetingSelect(meeting)}>
//               <ListItemText primary={meeting.topic} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       <Container maxWidth="md">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         minHeight="100vh"
//       >
//         <Typography variant="h4" gutterBottom>
//           Meetings Dashboard
//         </Typography>
//         {meetings.map((meeting, index) => (
//           <Box
//             key={meeting.id}
//             my={2}
//             p={1}
//             border={1}
//             borderRadius={10}
//             borderColor="grey.300"
//             width="100%"
//             textAlign="center"
//             onClick={() => handleMeetingSelect(meeting)}         
//           >
//             <Typography variant="h6">{meeting.topic}</Typography>
//           </Box>
//         ))}
//       </Box>
//     </Container>

//       {selectedMeeting && (
//         <Box mt={4}>
//           <Typography variant="h5" component="h2">
//             {selectedMeeting.topic}
//           </Typography>
//           <Box mt={4}>
//             <TextField
//               fullWidth
//               label="Ask a question about this meeting"
//               variant="outlined"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               sx={{ marginBottom: 2 }}
//             />
//             <Button variant="contained" color="primary" onClick={handleQuerySubmit}>
//               Ask
//             </Button>
//           </Box>
//           {queryResult && (
//             <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
//               <Typography variant="h6">Response:</Typography>
//               <Typography variant="body1">{queryResult}</Typography>
//             </Paper>
//           )}
//         </Box>
//       )}
//     </Container>
//   );
}
