import React, { useState, useEffect } from 'react';
import { NavContainer, IconContainer, NavExp, BtmIconCont } from '../../../styles/Styles';
import { BiHome, BiCalendar} from 'react-icons/bi'
import { FiSettings,FiMinusCircle } from 'react-icons/fi'
import { BsQuestionDiamond } from 'react-icons/bs'
import bg from '../../../assets/img/bg.jpeg'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Nav = () => {
    const [nav, setNav] = useState(false)

    const clickHandler = e => {
        setNav(!nav)
    }

    return(
        <ProSidebar  image={bg} collapsed={nav}>
            <SidebarHeader>
                    <Menu iconShape="circle">
                    <h1>Logo</h1>

                    <MenuItem onClick={clickHandler} icon={<FiMinusCircle />}></MenuItem>
                    </Menu>
            </SidebarHeader>
            <Menu iconShape="round" popperArrow={true}>
                <MenuItem icon={<BiHome />}>Home</MenuItem>
                <SubMenu title="Schedule" onClick={clickHandler} icon={<BiCalendar />}>
                    <MenuItem>Calendar</MenuItem>
                    <MenuItem></MenuItem>
                </SubMenu>
                <SubMenu title="Settings" icon={<FiSettings />}>

                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}


// const Nav = () => {
//     const [Expansion, setExpansion] = useState({
//         expand: false,
//         type: 'home'
//     })
//     const [prev, setPrev] = useState()

//     const handleClick = e => {
//         setPrev(Expansion.type)
//         setExpansion({ 
//             expand: !Expansion.expand,
//             type: e.target.name
//         })
//         console.log(prev)
//         document.getElementById(prev.toString()).classList.remove('selected')
//         document.getElementById(Expansion.type).classList.add('selected')

//     }

//     return (


//         <NavContainer>
//             <IconContainer>
//                 <div className='top-icon-cont'>
//                     <div className='logo'></div>
//                     <div className='icon-btn' id='home'><img src={home} name='home' onClick={handleClick}/></div>
//                     <div className='icon-btn' id='sche'><img src={bookmark} name='sche' onClick={handleClick}/></div>
//                 </div>
//                     <div className='icon-btn'><BsQuestionDiamond /></div>
//                     <div className='icon-btn'><FiSettings /></div>
//             </IconContainer>

//             {Expansion.expand &&
//             <NavExp>
//                 <div><button></button></div>
//             </NavExp>}
//         </NavContainer>
//     );
// };

export default Nav;