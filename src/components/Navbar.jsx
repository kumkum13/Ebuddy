import React from 'react'
import styled from 'styled-components'
import {Search } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';  

const Container = styled.div`
  height:20px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`s
   padding : 10px 20px;
   display: flex;
   justify-content:space-between;
   align-item:center;
   ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
 flex:1;
 display:flex;
 align-item:center;
 margin-left:20px;
`;
const Center = styled.div`
flex:1;
 
 
`;
const Right = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
margin-right:25px;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size : 25px;
  cursor:pointer;
  display:flex;
  align-item:center;
  ${mobile({ display: "none" })}
`;
const Searchcontainer = styled.div`
  border:none;
  display:flex;
  align-item:center;
  margin-left:25px;
  padding : 5px;
`;
const Input = styled.input`
height:20px;
${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
font-weight:bold;
margin-top:0.05px;
margin-left:160px;
${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
font-size : 25px;
  cursor:pointer;
  margin-left:25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           
            <Left><Language> En </Language>
              
            <Searchcontainer>
            <Input></Input>
            <Search></Search>
            </Searchcontainer> </Left>
            <Center><Logo><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><b>E Buddy...</b></Link> </Logo></Center>
            <Right> 
            <MenuItem><Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}><b>REGISTER</b></Link></MenuItem>
            <MenuItem> <Link to="/Login" style={{ color: 'inherit', textDecoration: 'none' }}><b>SIGN IN</b></Link></MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}><ShoppingCartOutlinedIcon/></Link>
                 
            </Badge>
             </MenuItem>
              </Right>  
        </Wrapper>
       
    </Container>
  )
}

export default Navbar
