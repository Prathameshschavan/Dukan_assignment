import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
} from "@mui/material";
const Dashboard = () => {
  const [arr] = useState([1, 3, 3, 4, 4, 5, 5, 5, 5, 7, 9, 9]);
  return (
    <div>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          border={"1px solid rgb(215, 214, 214)"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"15px"}
            p={"25px 30px"}
          >
            <Typography>Payments</Typography>
            <Box
              display={"flex"}
              gap={"5px"}
              color={"#4C4C4C"}
              alignItems={"center"}
            >
              <i className="fa-regular fa-circle-question"></i>
              <Typography fontSize={"15px"}>How it works</Typography>
            </Box>
          </Box>

          <Box position={"relative"} ml={"-25%"}>
            <input
              style={{
                width: "150%",
                padding: "12px 12px 12px 40px",
                borderRadius: "5px",
                background: "#F2F2F2",
                border: "none",
                fontSize: "16px",
              }}
              placeholder="Search features, tutorials, etc."
            />
            <i
              style={{
                position: "absolute",
                top: "30%",
                left: "5%",
                color: "#888888",
              }}
              class="fa-solid fa-magnifying-glass"
            ></i>
          </Box>

          <Box color={"#5F5F5F"} display={"flex"} pr={"2%"} gap={"15px"}>
            <Box
              height={"40px"}
              width={"40px"}
              borderRadius={"50%"}
              bgcolor={"#E6E6E6"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{cursor:"pointer"}}
            >
              <i
                style={{
                  fontSize: "16px",
                  padding: "8px",
                }}
                class="fa-solid fa-comment-dots"
              ></i>
            </Box>
            <Box
              borderRadius={"50%"}
              height={"40px"}
              width={"40px"}
              bgcolor={"#E6E6E6"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{cursor:"pointer"}}
            >
              <i
                style={{
                  fontSize: "20px",
                  padding: "8px",
                  marginTop: "-4px",
                }}
                class="fa-solid fa-sort-down"
              ></i>
            </Box>
          </Box>
        </Box>
        <Box bgcolor={"#fafafa"} height={"92vh"} overflow={"auto"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"2%"}
          >
            <Typography variant="h6">Overview</Typography>
            <Box>
              <select>
                <option value="lastMonth">Last Month</option>
              </select>
            </Box>
          </Box>

          <Box display={"flex"} p={"0 2%"} gap={"20px"}>
            <Box
              sx={{ cursor: "pointer" }}
              borderRadius={"5px"}
              p={"15px 15px 15px 20px"}
              width={"50%"}
              bgcolor={"white"}
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
            >
              <Typography style={{ color: "#7a7a7a" }}>
                Online orders
              </Typography>
              <Typography mt={"10px"} variant="h4">
                231
              </Typography>
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              borderRadius={"5px"}
              p={"15px 15px 15px 20px"}
              width={"50%"}
              bgcolor={"white"}
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
            >
              <Typography style={{ color: "#7a7a7a" }}>
                Amount recevied
              </Typography>
              <Typography mt={"10px"} variant="h4">
                &#8377; 23,92,312.19
              </Typography>
            </Box>
          </Box>

          <Box p={"2%"}>
            <Typography variant="h5">Transations | This Month</Typography>

            <Box m={"25px 30px 0 0"}>
              <TableContainer component={Paper} style={{ padding: "15px" }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  mb={"15px"}
                >
                  <Box position={"relative"}>
                    <input
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 40px",
                        borderRadius: "5px",
                        border: "1px solid rgb(215, 214, 214)",
                        fontSize: "16px",
                      }}
                      placeholder="Search by order ID..."
                    />
                    <i
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "5%",
                        color: "#888888",
                      }}
                      class="fa-solid fa-magnifying-glass"
                    ></i>
                  </Box>

                  <Box display={"flex"} gap={"15px"}>
                    <Button
                      style={{
                        border: "1px solid rgb(215, 214, 214)",
                        color: "gray",
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      Sort
                      <i className="arrow fa-solid fa-arrow-right-arrow-left"></i>
                    </Button>
                    <Button
                      style={{
                        border: "1px solid rgb(215, 214, 214)",
                        color: "gray",
                        display: "flex",
                      }}
                    >
                      <i
                        style={{ fontSize: "18px", padding: "0" }}
                        className="fa-solid fa-arrow-up-from-bracket"
                      ></i>
                    </Button>
                  </Box>
                </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          background: "#f2f2f2",
                          height: "10px",
                          borderRadius: "10px 0 0 10px",
                        }}
                      >
                        Order ID
                      </TableCell>
                      <TableCell
                        style={{ background: "#f2f2f2", height: "10px" }}
                        align="right"
                      >
                        Order date
                        <i
                          style={{ marginLeft: "5px", cursor:"pointer" }}
                          class="fa-solid fa-sort-down"
                        ></i>
                      </TableCell>
                      <TableCell
                        style={{ background: "#f2f2f2", height: "10px" }}
                        align="right"
                      >
                        Order amount
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#f2f2f2",
                          height: "10px",
                          borderRadius: " 0 10px 10px 0",
                        }}
                        align="right"
                      >
                        Transaction fees
                        <i
                          style={{ marginLeft: "5px", cursor:"pointer" }}
                          className="fa-regular fa-circle-question"
                        ></i>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {arr.map((row) => (
                      <TableRow>
                        <TableCell  style={{ color: "#2F7EBD", fontWeight:"550" }} align="left">
                          #281209
                        </TableCell>
                        <TableCell   style={{ fontWeight:"500" }}align="right">&#8377;1,278.23</TableCell>
                        <TableCell   style={{ fontWeight:"500" }}align="right">&#8377;22</TableCell>
                        <TableCell   style={{ fontWeight:"500" }} align="right">7 July, 2023</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  p={"20px 0 10px 0 "}
                >
                  <button
                    style={{
                      background: "white",
                      border: "1px solid rgb(215, 214, 214)",
                      borderRadius: "5px",
                      cursor: "pointer",
                      color: "#5c5c5c",
                      fontWeight: "550",
                      padding: "0 10px",
                    }}
                  >
                    <i className="fa-solid fa-chevron-left"></i> &nbsp;&nbsp;
                    Previous
                  </button>
                  <Pagination
                    page={10}
                    count={100}
                    hidePrevButton
                    hideNextButton
                  />
                  <button
                    style={{
                      background: "white",
                      border: "1px solid rgb(215, 214, 214)",
                      borderRadius: "5px",
                      cursor: "pointer",
                      color: "#5c5c5c",
                      fontWeight: "550",
                      padding: "0 10px",
                    }}
                  >
                    Next&nbsp;&nbsp;{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </Box>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
