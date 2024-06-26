import { Img, Heading } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="274px !important"
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 48 } }}
      className={`${props.className} flex flex-col h-screen pt-6 gap-12 top-0 px-6 sm:pt-5 sm:px-5 border-gray-200 border-r border-solid bg-gray-50 !sticky overflow-auto`}
    >
      <Img src="images/img_sidebar_logo.png" alt="sidebar logo" className="h-[48px] w-[178px] object-contain" />
      <Menu
        menuItemStyles={{
          button: {
            padding: "12px",
            gap: "8px",
            color: "#484644",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "8px",
            [`&:hover, &.ps-active`]: {
              color: "#fffaf4",
              fontWeight: "600 !important",
              backgroundColor: "#484644 !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "8px" } }}
        renderExpandIcon={() => (
          <Img
            src="images/img_arrow_down_gray_800.svg"
            alt="collapse icon"
            className="h-[24px] w-[24px] cursor-pointer"
          />
        )}
        className="mb-[226px] flex w-full flex-col self-stretch pl-6 sm:pl-5"
      >
        <MenuItem icon={<Img src="images/img_component_12.svg" alt="portfolio icon" className="h-[24px] w-[24px]" />}>
          Portfolio
        </MenuItem>
        <SubMenu
          icon={<Img src="images/img_settings.svg" alt="settings icon" className="h-[24px] w-[24px]" />}
          label="Invest"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <MenuItem icon={<Img src="images/img_television.svg" alt="syndicates icon" className="h-[24px] w-[24px]" />}>
          Syndicates
        </MenuItem>
        <MenuItem icon={<Img src="images/img_grid.svg" alt="ledger icon" className="h-[24px] w-[24px]" />}>
          Ledger
        </MenuItem>
        <MenuItem icon={<Img src="images/img_user.svg" alt="messages icon" className="h-[24px] w-[24px]" />}>
          Messages
        </MenuItem>
        <MenuItem icon={<Img src="images/img_calendar.svg" alt="events icon" className="h-[24px] w-[24px]" />}>
          Events
        </MenuItem>
        <MenuItem icon={<Img src="images/img_file.svg" alt="news icon" className="h-[24px] w-[24px]" />}>
          News & Blogs
        </MenuItem>
        <MenuItem icon={<Img src="images/img_profile.svg" alt="support icon" className="h-[24px] w-[24px]" />}>
          Help & Support
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
