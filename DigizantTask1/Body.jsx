import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import "./common.css";

export const Body = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ marginTop: "10px", width: "1235px", margin: "10px" }}
      >
        <Grid item xs={3} className="item">
          <Card sx={{ height: "700px", bgcolor: "lightgray" }}>
            <CardContent>
              <h3>New Orders</h3>
              <Card sx={{ height: "160px" }}>
                <CardContent></CardContent>
              </Card>
              <Card sx={{ height: "160px", marginTop: "10px" }}>
                <CardContent></CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className="item">
          <Card sx={{ height: "700px", bgcolor: "lightgray" }}>
            <CardContent>
              <h3>In Progress</h3>
              <Card sx={{ height: "160px" }}>
                <CardContent></CardContent>
              </Card>
              <Card sx={{ height: "220px", marginTop: "10px" }}>
                <CardContent></CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className="item">
          <Card sx={{ height: "700px", bgcolor: "lightgray" }}>
            <CardContent>
              <h3>Waiting For Buyers</h3>
              <Card sx={{ height: "160px" }}>
                <CardContent></CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className="item">
          <Card sx={{ height: "700px", bgcolor: "lightgray" }}>
            <CardContent>
              <h3>Completed</h3>
              <Card sx={{ height: "160px" }}>
                <CardContent></CardContent>
              </Card>
              <Card sx={{ height: "160px", marginTop: "10px" }}>
                <CardContent></CardContent>
              </Card>
              <Card sx={{ height: "160px", marginTop: "10px" }}>
                <CardContent></CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
