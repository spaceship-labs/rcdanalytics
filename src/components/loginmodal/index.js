import React from "react"
import { ModalWrapper, ModalContent, Overlay } from "./index.styled"
import LoginFormComponent from "./form"

const LoginModalComponent = ({ show, hideModal }) => {
    return <ModalWrapper show={show}>
        <Overlay onClick={hideModal} />
        <ModalContent>
            <LoginFormComponent />
        </ModalContent>
    </ModalWrapper>
}

export default LoginModalComponent