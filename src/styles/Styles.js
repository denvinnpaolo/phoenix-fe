import styled from 'styled-components';

export const AppContainer = styled.div`
    // border: 1px solid black;
    // // font-size: 1.6rem;
    // display: flex;
    // align-items: center;
    // width: 100%;
    // height: 100vh;
    // color: black;
`;


export const IconContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 7%;
    width: 25%;
    height: 100%;
    background-color:#0080a5; 
    box-sizing: border-box;

`;

export const NavExp = styled.div`
    postion: absolute;
    height: 100%;
    width: 75%;
    background-color:#029cc9; 
    box-sizing: border-box;

`;

export const BtmIconCont = styled.div`
    display:flex;
    flex-flow: column wrap;
    height: 100%;
    align-content: flex-end;
`;

export const LoginForm = styled.form`
  background-color: #288B50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 15px;

  h1 {
    font-size: 2.5rem;
    color: white;
  }


  #btns {
    padding-bottom: 18%;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

  }
  div {
    // margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    height: 280px;
    border-radius: 20px;

    #input-cont  {
        background-color: white;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    label {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-evenly;


    }
    #password{
        padding-top:25px;
    }

    button {
      height: 50px;
      width: 100px;
      color: black;
      border-radius: 30px;
      border: 1px solid white;
    }

    #sign-up-btn {
        width: 200px;
        background-color: #dd9869;
        border: 1px solid #dd9869;
    }

    input {
        height: 30px;
        width: 220px;
        border: none;
        border-bottom: .5px solid black;

    }

    .checkbox {
        width: 100px;
        height: 10px;
        display:flex;
        justify-content: center;
        margin: 0px; 
    
    }

    .box-label {
        font-size:7px;
        display: flex;
        width:175px;
        height:10px;
        
    }
  }

`;