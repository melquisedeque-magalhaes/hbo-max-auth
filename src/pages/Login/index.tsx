import { useState } from 'react';
import { ModalContainer } from './styles';

export function Login() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

    
    return (
        <>
        <button
            onClick={openModal}
            >
                Sign
        </button>

        <ModalContainer
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        contentLabel="Modal"
        >
            <h1> Sign In </h1>

            <span>Do you have an HBO Max account?</span>

            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="email" name="email" id="password" />

                <button>
                    SIGN IN
                </button>
            </form>
           
        </ModalContainer>
        </>
    )
}