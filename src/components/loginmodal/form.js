import React from "react"
import { Form, ButtonBlue, FormOption } from "./index.styled"
import { Rows } from "../../theme/layout.styled"
import { Link } from "react-router-dom"

const LoginFormComponent = () => <Form>
    <h3>Sign in</h3>
    <p>
        <input className='usr' type='text' name='username' placeholder="Username" />
    </p>
    <p>
        <input className='pws' type='password' name='password' placeholder="Password" />
    </p>
    <p><ButtonBlue to='/home'>LOGIN</ButtonBlue></p>
    <Rows align='space-between'>
        <FormOption>
            <p><input type='checkbox' /> Remember me</p>
        </FormOption>
        <FormOption>
            <p><Link>Forgot Password</Link></p>
        </FormOption>
    </Rows>
</Form>

export default LoginFormComponent