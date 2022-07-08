import { InputBase, TextField, Typography } from "@mui/material";
import React from "react";
import locales from "../../assets/locales";

const Screen1 = ({ userInfo, setUserInfo, errorInfo, setErrorInfo }) => {
  console.log(errorInfo);
  return (
    <>
      <Typography
        variant="p"
        color="#666"
        fontWeight="500"
        sx={{ display: "block" }}
        mb={1}
      >
        {" "}
        {locales[1]?.input1}{" "}
      </Typography>
      <InputBase
        name="fullName"
        value={userInfo?.fullName}
        onChange={(e) => {
          setUserInfo({ ...userInfo, fullName: e.target.value });
          setErrorInfo({ ...errorInfo, fullName: false });
        }}
        fullWidth
        sx={{
          marginBottom: 2,
          color: "#999",
          fontWeight: "500",
          border: `${
            errorInfo.fullName ? "1px solid crimson" : "1px solid lightgray"
          }`,
          borderRadius: 1,
          padding: 0.5,
        }}
      />
      <Typography
        variant="p"
        color="#666"
        fontWeight="500"
        sx={{ display: "block" }}
        mb={1}
      >
        {" "}
        {locales[1]?.input2}{" "}
        {locales[1]?.optional && (
          <span style={{ color: "#999" }}> (optional) </span>
        )}{" "}
      </Typography>
      <InputBase
        name="displayName"
        value={userInfo?.displayName}
        onChange={(e) => {
          setUserInfo({ ...userInfo, displayName: e.target.value });
          setErrorInfo({ ...errorInfo, displayName: false });
        }}
        fullWidth
        sx={{
          marginBottom: 2,
          color: "#999",
          fontWeight: "500",
          border: `${
            errorInfo.displayName ? "1px solid crimson" : "1px solid lightgray"
          }`,
          borderRadius: 1,
          padding: 0.5,
        }}
      />
    </>
  );
};

export default Screen1;
