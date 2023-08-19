import { useState, useEffect } from "react";
import { Post } from "../types";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Tabledata = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User_ID", width: 90 },
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 300 },
  ];

  const rows = posts;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        marginBottom: "100px",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Table Data
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
