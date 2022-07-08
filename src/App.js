import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { StepIconProps } from "@mui/material/StepIcon";
import { useState } from "react";
import logo from "./assets/img/logo.png";
import locales from "./assets/locales";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Steeper from "./component/Steeper";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    displayName: "",
    workspace: "",
    workspaceUrl: "",
  });
  const [errorInfo, setErrorInfo] = useState({
    fullName: false,
    displayName: false,
    workspace: false,
  });

  const nextStep = () => {
    const error = {
      fullName: false,
      displayName: false,
      workspace: false,
      workspaceUrl: false,
    };
    if (activeStep + 1 === 1) {
      if (userInfo.fullName.trim() === "") error.fullName = true;
      if (userInfo.displayName.trim() === "") error.displayName = true;
    }
    if (activeStep + 1 === 2) {
      if (userInfo.workspace.trim() === "") error.workspace = true;
    }

    setErrorInfo(error);

    if (!error.fullName && !error.displayName && !error.workspace)
      setActiveStep(activeStep + 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <img height={50} src={logo} alt="logo" />

        <Box
          sx={{
            textAlign: "center",
            width: 350,
            margin: "40px auto",
            overflow: "hidden",
          }}
        >
          <Steeper activeStep={activeStep + 1} />
        </Box>

        <Box>
          {activeStep + 1 === 4 && (
            <CheckCircleIcon
              sx={{ width: 100, height: 100, color: "#6767ec" }}
            />
          )}
        </Box>

        <Box mt={3} mb={5}>
          <Typography
            variant="h5"
            color="#222"
            fontWeight="600"
            fontSize={{ xs: "1.3rem", sm: "1.3rem", md: "1.5rem" }}
            mt={2}
          >
            {" "}
            {locales[activeStep + 1]?.title}{" "}
            {activeStep + 1 === 3 && `${userInfo?.workspace}?`}
            {activeStep + 1 === 4 && `${userInfo?.displayName}!`}{" "}
          </Typography>
          <Typography variant="p" color="#888" fontWeight="400">
            {" "}
            {locales[activeStep + 1]?.subTitle}{" "}
            {activeStep + 1 === 4 && `${userInfo?.workspace}!`}{" "}
          </Typography>
        </Box>

        <Box sx={{ textAlign: "left", width: 350, margin: "0 auto" }}>
          {activeStep + 1 === 1 && (
            <Screen1
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              errorInfo={errorInfo}
              setErrorInfo={setErrorInfo}
            />
          )}
          {activeStep + 1 === 2 && (
            <Screen2
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              errorInfo={errorInfo}
              setErrorInfo={setErrorInfo}
            />
          )}
          {activeStep + 1 === 3 && (
            <Screen3
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              errorInfo={errorInfo}
              setErrorInfo={setErrorInfo}
            />
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6767ec",
              "&:hover": {
                backgroundColor: "#6767ec",
              },
              padding: 1,
            }}
            fullWidth
            onClick={activeStep + 1 < 4 && nextStep}
          >
            {activeStep + 1 < 4
              ? "Create Workspace"
              : `Launch ${userInfo?.workspace}`}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
