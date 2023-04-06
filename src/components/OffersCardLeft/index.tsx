import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { MyPaper } from "../MyPaper";

const OffersCardLeft = () => {
  return (
    <Grid item md={5} sm={8} xs={12}>
      <MyPaper elevation={2} sx={{ width: "100%" }}>
        <Grid item height={190} display="flex">
          <img
            src="/assets/apple.jpg"
            alt="apple"
            style={{ width: 180, height: 180 }}
          />
          <Grid item>
            <Typography variant="h6" color="initial" fontWeight="bold">
              Only $ 0.22
            </Typography>
            <Typography variant="subtitle2" color="initial" sx={{ mt: 2 }}>
              Healty power pills <br /> Most Healthy for u
            </Typography>
            <Typography
              variant="body2"
              color="initial"
              fontStyle="italic"
              fontWeight="bold"
              sx={{ mt: 2 }}
            >
              Cheap and powerful remedy for long term healing.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success" fullWidth sx={{ p: 1.5 }}>
            Buy Now
          </Button>
        </Grid>
      </MyPaper>
    </Grid>
  );
};

export default OffersCardLeft;
