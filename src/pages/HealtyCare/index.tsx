import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";

import EmphasisCard from "@/components/EmphasisCard";
import OffersCardLeft from "@/components/OffersCardLeft";
import OffersCardRight from "@/components/OffersCardRight";
import MyCarrousel from "@/components/MyCarrousel";

const HealtyCare = () => {
  return (
    <Grid
      item
      height="calc(100vh - 10rem)"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <EmphasisCard />
      <MyCarrousel />
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="center"
        gap={5}
      >
        <OffersCardLeft />
        <OffersCardRight />
      </Grid>
    </Grid>
  );
};

export default HealtyCare;
