import React from 'react'
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Tikkas</SidebarLink>
				<SidebarLink to='/'>Kababs</SidebarLink>
				<SidebarLink to='/'>Full Menu</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Learn More</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	)
}

export default Sidebar
