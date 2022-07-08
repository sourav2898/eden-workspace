import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const Screen3 = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <Box
        p={2}
        mb={2}
        sx={{
          width: 120,
          border: `${!selected ? "2px solid #6767ec" : "2px solid lightgray"}`,
          borderRadius: 2,
          cursor: "pointer",
        }}
        onClick={() => setSelected(0)}
      >
        <PersonIcon sx={{ color: `${!selected ? "#6767ec" : "gray"}` }} />
        <Typography color="#222" fontWeight="600" mt={2} mb={1}>
          For Myself
        </Typography>
        <Typography fontSize={12} color="#888" fontWeight="400">
          Write better. Think more clearly. Stay organized.
        </Typography>
      </Box>
      <Box
        p={2}
        mb={2}
        sx={{
          width: 120,
          border: `${selected ? "2px solid #6767ec" : "2px solid lightgray"}`,
          borderRadius: 2,
          cursor: "pointer",
        }}
        onClick={() => setSelected(1)}
      >
        <GroupsIcon sx={{ color: `${selected ? "#6767ec" : "gray"}` }} />
        <Typography color="#222" fontWeight="600" mt={2} mb={1}>
          With My Team
        </Typography>
        <Typography fontSize={12} color="#888" fontWeight="400">
          Wikis, docs, tasks & projects all in one place.
        </Typography>
      </Box>
    </Box>
  );
};

export default Screen3;
