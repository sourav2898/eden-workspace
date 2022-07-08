import { Box, InputBase, TextField, Typography } from "@mui/material";
import React from "react";
import locales from "../../assets/locales";

const Screen2 = ({ userInfo, setUserInfo, errorInfo, setErrorInfo }) => {
  console.log(userInfo);
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
        {locales[2]?.input1}{" "}
      </Typography>
      <InputBase
        name="workspace"
        value={userInfo?.workspace}
        onChange={(e) => {
          setUserInfo({ ...userInfo, workspace: e.target.value });
          setErrorInfo({ ...errorInfo, workspace: false });
        }}
        fullWidth
        sx={{
          marginBottom: 2,
          color: "#999",
          fontWeight: "500",
          border: `${
            errorInfo.workspace ? "1px solid crimson" : "1px solid lightgray"
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
        {locales[2]?.input2}{" "}
        {locales[2]?.optional && (
          <span style={{ color: "#999" }}> (optional) </span>
        )}{" "}
      </Typography>
      <Box sx={{ width: "100%", display: "flex" }}>
        <InputBase
          disabled
          value="www.eden.com/"
          sx={{
            marginBottom: 2,
            width: "38%",
            color: "#999",
            fontWeight: "500",
            border: `${
              errorInfo.workspaceUrl
                ? "1px solid crimson"
                : "1px solid lightgray"
            }`,
            borderRight: "none",
            borderRadius: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            padding: 0.5,
          }}
        />
        <InputBase
          name="workspaceUrl"
          placeholder="Example"
          value={userInfo?.workspaceUrl}
          onChange={(e) => {
            setUserInfo({ ...userInfo, workspaceUrl: e.target.value });
          }}
          sx={{
            marginBottom: 2,
            width: "60%",
            color: "#999",
            fontWeight: "500",
            border: "1px solid lightgray",
            borderRadius: 1,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 0.5,
          }}
        />
      </Box>
    </>
  );
};

export default Screen2;
