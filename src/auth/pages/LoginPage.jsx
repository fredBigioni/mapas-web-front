import { Button, ButtonGroup, Grid, GridCol, GridRow, Textfield } from "@element/react-components";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ping, startLogin } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";

export const LoginPage = () => {

  
  const dispatch = useDispatch();

  const onAuthenticate = (event) => {
    event.preventDefault();
    debugger;
    const data = new FormData(event.currentTarget);
    const login = data.get('username');
    const password = data.get('password');

    debugger;
    dispatch(startLogin(login, password));

  }

  return (
    
    <AuthLayout title="Login">
        <form
          fullWidth
          onSubmit={onAuthenticate}
        >
        <Grid fullWidth>
          <GridRow>
            <GridCol desktopCol={12}>
              <Textfield 
                name='username'
                label="UserName"
                type="text"
                variant="outlined"
                placeholder="Ingrese su username"
                fullWidth
              />
            </GridCol>
            <GridCol desktopCol={12}>
              <Textfield 
                name='password'
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </GridCol>
            <GridCol desktopCol={12}>
              <Button
                // variant='contained'
                type='submit'
                color='secondary'
                fullWidth>
                {/* <Typography variant='buttonFont'>Login</Typography> */}
              </Button>   
            </GridCol>
          </GridRow>
        </Grid>    
        </form>

     {/* <form
      fullWidth
      onSubmit={onAuthenticate}
     >
        <Grid fullWidth>
          <GridRow>
            <GridCol desktopCol={12}>
              <Textfield 
                name='username'
                label="UserName"
                type="text"
                variant="outlined"
                placeholder="Ingrese su username"
                fullWidth
              />
            </GridCol>
            <GridCol desktopCol={12}>
              <Textfield 
                name='password'
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </GridCol>
          </GridRow>
        </Grid>    
            <Button
              // variant='contained'
              type='submit'
              color='secondary'
              fullWidth>

            </Button>   
       </form> */}

   </AuthLayout>
    
  )
}
