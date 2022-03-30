import React from 'react';
import './style.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom';

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/admin" element={<AdminLogIn />}></Route>
        <Route path="/student" element={<StudentLogIn />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: '2px', margin: '1px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guvi
              </Typography>

              <Button onClick={() => navigate('/login')} color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              XYZ Organization,
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              India
            </Typography>
            <Typography variant="body2">
              Learning is the key to success
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => navigate('/contact')} size="small">
              CONTACT US
            </Button>
          </CardActions>
        </Card>
        <br />
        <Grid container spacing={2}>
          <Grid item>
            <Button onClick={() => navigate('/admin')} variant="contained">
              Admin Login
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => navigate('/student')} variant="contained">
              Student Login
            </Button>
          </Grid>
        </Grid>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular JS</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </>
  );
}

function Action(x) {
  const navigate = useNavigate();
  console.log(x);
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/')} color="inherit">
        {' '}
        HomePage{' '}
      </Button>
      <BrowserRouter>
        <Link to="/login"></Link>
      </BrowserRouter>
      <h3>{x}</h3>
    </>
  );
}

function LogIn() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/')} color="inherit">
        {' '}
        HomePage{' '}
      </Button>
      <h3>Log-In Page</h3>
    </>
  );
}

function AdminLogIn() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/')} color="inherit">
        {' '}
        HomePage{' '}
      </Button>
      <h3> Admin Page</h3>
    </>
  );
}

function StudentLogIn() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/')} color="inherit">
        {' '}
        HomePage{' '}
      </Button>
      <h3>Student Page</h3>
    </>
  );
}

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/')} color="inherit">
        {' '}
        HomePage{' '}
      </Button>
      <h3>Contact US for Any Query</h3>
    </>
  );
}
