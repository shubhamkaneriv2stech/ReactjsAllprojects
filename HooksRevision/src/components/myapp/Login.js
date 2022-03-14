import React from 'react'
import { Button, Container } from 'react-bootstrap'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const diffToast = () => {
        toast.success("Login Sucessfully", {
            position: "top-center",
        })
    }
    return (
        <Container  className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}>
            <h2>Welcome to sign in page</h2>
            <Button onClick={diffToast}>Login in</Button>
          
             <ToastContainer />
        </Container>
    )
}

export default Login
