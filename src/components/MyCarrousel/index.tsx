import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Grid, Button, Typography, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Translate } from "@mui/icons-material";
import { productData } from "./data";

const MyCarrousel = () => {
  const mobile = useMediaQuery("(min-width:650px)");
  const carousel = useRef<any>();

  function handlePrevClick(e: any) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleNextClick(e: any) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Grid
      item
      xl={6}
      lg={8}
      md={10}
      sm={11}
      xs={12}
      height={180}
      m="1rem 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="text"
        color="inherit"
        sx={{ height: "100%" }}
        onClick={handlePrevClick}
      >
        <ArrowBackIos />
      </Button>
      <motion.div
        ref={carousel}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <motion.div
          style={{
            minHeight: 120,
            minWidth: 50,
            padding: "0.3rem 0.25rem",
            textAlign: "center",
            display: "flex",
          }}
        >
          {productData.map((item, index) => (
            <motion.div style={{ margin: "0 0.25rem" }} key={item.id}>
              <img
                src={item.imageurl}
                alt="Image alt"
                style={{ width: 250, height: 140 }}
              />
              <Typography
                variant="body1"
                color="initial"
                fontWeight="bold"
                fontStyle="italic"
              >
                {item.price}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Button
        variant="text"
        color="inherit"
        sx={{ height: "100%" }}
        onClick={handleNextClick}
      >
        <ArrowForwardIos />
      </Button>
    </Grid>
  );
};

export default MyCarrousel;
