import React from "react";
import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Home",
      icon: "fa-house",
    },
    {
      title: "Orders",
      icon: "fa-clipboard-list",
    },
    {
      title: "Products",
      icon: "fa-gifts",
    },
    {
      title: "Delivery",
      icon: "fa-truck",
    },
    {
      title: "Marketing",
      icon: "fa-bullhorn",
    },
    {
      title: "Analytics",
      icon: "fa-chart-simple",
    },
    {
      title: "Payments",
      icon: "fa-money-check-dollar",
    },
    {
      title: "Tools",
      icon: "fa-location-arrow",
    },

    {
      title: "Discounts",
      icon: "fa-sack-dollar",
    },

    {
      title: "Audience",
      icon: "fa-users",
    },

    {
      title: "Appearance",
      icon: "fa-palette",
    },
    {
      title: "Pulgins",
      icon: "fa-bolt",
    },
  ];
  return (
    <div>
      <Box width={"100%"} height={"100vh"} bgcolor={"#1e2640"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"white"}
          p={"15px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <img
                style={{ width: "70px", borderRadius: "10px", cursor:"pointer" }}
                src="https://scontent.fbom36-1.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX81Avu3&_nc_ht=scontent.fbom36-1.fna&oh=00_AfAEhMtjxkcOfJVPoceDQKJ1jB7Ll4VDUVP-Oh4s3-iiHQ&oe=65A1C07B"
                alt="profile image"
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"c"}
              flexDirection={"column"}
              lineHeight={1}
            >
              <h2 style={{ marginTop: "-5px" }}>Nishyan</h2>
              <a href="#" style={{ color: "#D2D4D9",cursor:"pointer" }}>Visit store</a>
            </Box>
          </Box>

          <Box>
            <i
              style={{ fontSize: "25px", cursor:"pointer" }}
              className="fa-solid fa-angle-down"
            ></i>
          </Box>
        </Box>
        <Box mt={"10px"} pl={"25px"}>
          {menuItems.map((item) => {
            return (
              <Box
                key={item.title}
                color={"#D2D4D9"}
                display={"flex"}
                alignItems={"center"}
                gap={"20px"}
                mt={"-10px"}
                fontWeight={"100"}
                sx={{ cursor: "pointer" }}
              >
                <Box width={"20px"}>
                  <i
                    style={{ fontSize: "20px" }}
                    className={`fa-solid ${item.icon}`}
                  ></i>{" "}
                </Box>

                <p>{item.title}</p>
              </Box>
            );
          })}
        </Box>

        <Box
          position={"absolute"}
          bottom={0}
          width={"14%"}
          m={"15px"}
          borderRadius={"10px"}
          display={"flex"}
          alignItems={"center"}
          bgcolor={"#353C53"}
          height={"80px"}
          justifyContent={"left"}
          gap={"12%"}
          pl={"1%"}
          sx={{cursor:"pointer"}}
        >
          <Box p={"8px"} borderRadius={"5px"} color={"#fff"} bgcolor={"#494F64"}>
            <i style={{ fontSize: "25px" }} className="fa-solid fa-wallet"></i>
          </Box>
          <Box>
            <Typography color={"#D7D8DD"}>Available credits</Typography>
            <Typography color={"#FCFCFC"}>222.10</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
