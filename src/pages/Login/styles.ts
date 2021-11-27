import styled from "styled-components";
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
        width: 560px;
        height: 700px;
        background: #191919;
        color: white;
        justify-content: center;
        text-align: center;
        border-radius: 10px;

        h1{
            margin: 30px 30px;
        }
        span{
            margin: 30px 30px;
        }
        
        label,input{
            display: block;
            text-align: start;
            background: #191919;
            border: 0;
            margin: 20px 30px;
        }
       
       button{
           width: 100px;
           height: 50px;
           border-radius: 30px;
           border: 0;
           background: #7756fe;
           color: white;
       }
`