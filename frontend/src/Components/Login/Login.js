import React, { useState } from 'react';
import styles from './Login.module.css';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleSubmit=()=>{

  }
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
          <div className={styles.icon}>
          </div>
          <div className={styles.loginLayout}>
                <div>
                    <div>
                        <label htmlFor="username" className={styles.usernametext}>
                            Username
                        </label>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                </div>
                 <div>
                      <div className={styles.usernametext}>
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className={styles.pass}>
                        <br />
                      <FormControl sx={{ m: 0, width: '26ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                      </div>
                 </div>
                 <div className={styles.btnlo}> 
                      <input type="button" className={styles.btn} value="Login" onClick={handleSubmit} />
                 </div>
          </div>
          <div className={styles.divi}>
            <hr />
          </div>
          <div className={styles.gogit}>
                  <div className={styles.google}>
                  </div>
                  <div className={styles.linkedin}>
                  </div>
                  <div className={styles.github}>
                  </div>
              
          </div>
      </div>
      <div className={styles.rec}>
      </div>
    </div>
  )
}

export default Login
