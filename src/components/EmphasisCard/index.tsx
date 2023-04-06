import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const EmphasisCard = () => {
  return (
    <Grid item xl={6} lg={8} md={10} sm={11} xs={12}>
      <Card
        sx={{
          display: { sm: "flex", xs: "block" },
          width: "100%",
          m: "0.2rem 0",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: { sm: "50%", xs: "100%" }, height: 280 }}
          image="/assets/suplement.jpeg"
        />

        <CardContent
          sx={{
            width: { sm: "50%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h3" color="initial">
            $ 9,99
          </Typography>
          <Typography variant="body1" color="initial">
            Super supplement for your health and well-being, natural and 100%
            functional, take advantage of this offer.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ width: 100, p: 1.5, m: "0.5rem 0" }}
          >
            Buy
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EmphasisCard;
