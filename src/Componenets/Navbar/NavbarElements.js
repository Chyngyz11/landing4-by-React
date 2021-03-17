import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'
export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
align-items: center;


`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex:
align-items: center;
text-decoration:none;
cursor: pointer;

@media screen and (max-width: 400px){
position: absolute:
top: 10px;
left: 25px;

}
`;

export const NavIcon = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
top: 20px;
right: 0;
cursor: pointer;
color: #fff;
align-items: center;


p {
transform: translate(-90%, 100%);
font-weight: bold;
/*align-items: center;
margin-right: 30px*/

}
`;

export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-50%, 50%)
`;