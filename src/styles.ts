import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --background: #f8f2f5;
    --green: #33CC95;
    --blue-light: #6933ff ;
    --gray-dark: #666 ;
    --gray: #969cb3 ;
    --gray-light: #ccc ;
    --input: #ffc;
    --shape: #ffffff ;
}
    *{ margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html{
       @media (max-width: 1000px) {
        font-size: 93.75%;
       }
       @media (max-width: 720px) {
        font-size: 87.5%;
       }
   }
    body{
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    .react-modal-overlay{
        background: purple;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
       
`;

