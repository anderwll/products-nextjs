import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { MyPaper } from "../MyPaper";

const OffersCardRight = () => {
  return (
    <Grid item md={5} sm={8} xs={12}>
      <MyPaper elevation={2} sx={{ width: "100%" }}>
        <Grid item height={190} display="flex">
          <img
            src="/assets/water.png"
            alt="apple"
            style={{ width: 180, height: 180 }}
          />
          <Grid item m="2rem 1rem" textAlign="center">
            <Typography
              variant="h5"
              color="initial"
              fontStyle="italic"
              fontWeight="bold"
            >
              Best Drink
            </Typography>
            <Button variant="contained" color="error" fullWidth>
              For free
            </Button>
            <Typography variant="body1" color="initial" fontStyle="italic">
              Long term health
            </Typography>
          </Grid>
        </Grid>
        <Grid item padding="0 4rem">
          <Typography variant="body1" color="initial">
            Click here and join us with these magical benefits
          </Typography>
        </Grid>
      </MyPaper>
    </Grid>
  );
};

export default OffersCardRight;
