import { Avatar, Box } from "@mui/material";
import React from "react";

const Steeper = ({ activeStep }) => {
  return (
    <Box
      fullWidth
      sx={{
        display: "flex",
        margin: "0 auto",
      }}
    >
      {[1, 2, 3, 4].map((value, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 100,
            }}
          >
            <Avatar
              sx={{
                backgroundColor: `${value <= activeStep ? "#6767ec" : "white"}`,
                border: `1px solid ${
                  value <= activeStep ? "#6767ec" : "lightgray"
                }`,
                color: `${value <= activeStep ? "#fff" : "#888"}`,
              }}
            >
              {value}
            </Avatar>
            {value < 4 && (
              <Box
                sx={{
                  width: { xs: 80, sm: 90, md: 100 },
                  height: 2,
                  background: `${
                    value < activeStep
                      ? "#6767ec"
                      : value === activeStep
                      ? "linear-gradient(to right,  #6767ec 0%,#6767ec 50%,lightgray 50%,lightgray 100%)"
                      : "lightgray"
                  }`,
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Steeper;
