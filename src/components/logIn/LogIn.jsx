import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import './LogIn.css';
import Swal from 'sweetalert2'
import BusinessServices from "../../stores/businessServices";
import logoRT from '../../assets/images/logoRT.png'
import { observer } from 'mobx-react-lite';
const LogIn = observer(() => {
  useEffect(() => {
    async function fetchData() {
      await BusinessServices.initialBusinessData();
      console.log("LEN", Object.keys(BusinessServices.business).length)
      if (Object.keys(BusinessServices.business).length === 0) {
        BusinessServices.setBusinessData({
          name: "הדמיות אדריכליות",
          address: "המכבים 5 בני ברק",
          phone: '0527622812',
          email: 'rivkitoled@gmail.com',
          owner: "רבקי טולידאנו",
          logo: logoRT,
          description: "מאסטרית בהדמיות ועיצוב  "
        });
      }
    }
    fetchData();
  }, []);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);

    if (response.status === 200) {
      localStorage.setItem("isLogin", true);
      console.log(BusinessServices.isLogin)
      BusinessServices.setIsLogin(true)
      console.log(BusinessServices.isLogin)

      Swal.fire({
        title: "Welcome!",
        text: "You are recognized",
        icon: "success"
      });
    }
    else {
      Swal.fire({
        title: "Oops, the entrance to the business owner Selsed",
        width: 500,
        padding: "3em",
        color: "black",
        backgroundColor: "yellow",
        backdrop: `
          rgba(0,0,185,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat.
        `});
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        opacity: '90%'
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.3rem',
          padding: '4rem',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7) ',
          borderRadius: '8px',
          backgroundColor: 'white',
          opacity: '80%'
        }}
      >
        <TextField
          fullWidth
          label="BusinessOwnerName"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: <PersonIcon />,
          }}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          InputProps={{
            startAdornment: <LockIcon />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogIn}
        >log In</Button>
      </Box>
    </Box>
  );
}
)

export default LogIn;

