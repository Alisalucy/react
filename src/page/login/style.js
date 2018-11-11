import styled from 'styled-components';

export const LoginWaper = styled.div`
    z-index:1;
   position:fixed;
   width:100%;
   height:100%;
   background:#bbb;
`;

export const LoginForm = styled.div`
  width:400px;
  height:300px;
  background:#fff;
  margin:100px auto;
  text-align:center;
  overflow:hidden;
  padding-top:70px;
  box-sizing:border-box;
`;

export const Input = styled.input`
  width:250px;
  height:30px;
  border:1px solid #ccc;
  margin:10px auto 15px;
  border-radius:15px;
  padding:0 15px;
    color:#777;
    outline:none;
`;

export const Button = styled.div`
  width:280px;
  height:30px;
  border:1px solid #ccc;
  margin:10px auto 15px;
  border-radius:15px;
  background: #3194d0;
  color:#fff;
  line-height:30px;
`;