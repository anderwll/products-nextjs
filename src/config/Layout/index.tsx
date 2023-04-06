import React, { useState, useEffect } from "react";
import {
  Grid,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  EarbudsBattery,
  Fastfood,
  Pets,
  Menu,
  DeveloperBoard,
  LocalFlorist,
  Deck,
  Diversity1,
  ExpandMore,
} from "@mui/icons-material";

interface LayoutDefaultProps {
  component: JSX.Element;
}

const listItem = [
  {
    text: "Healty & Care",
    path: "/",
    icon: <EarbudsBattery />,
  },
  {
    text: "Food",
    path: "/",
    icon: <Fastfood />,
  },
  {
    text: "Pet",
    path: "/",
    icon: <Pets />,
  },
  {
    text: "Hardware",
    path: "/",
    icon: <DeveloperBoard />,
  },
  {
    text: "Flowers",
    path: "/",
    icon: <LocalFlorist />,
  },
  {
    text: "Garden`s",
    path: "/",
    icon: <Deck />,
  },
  {
    text: "Beauty & Hair",
    path: "/",
    icon: <Diversity1 />,
  },
];

const LayoutDefault = ({ component }: LayoutDefaultProps) => {
  const [drawerWidth, setDrawerWidth] = useState(240);
  const mobile = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    if (mobile) {
      setDrawerWidth(240);
    } else {
      setDrawerWidth(0);
    }
  }, [mobile]);

  const showMenu = () => {
    if (drawerWidth === 0) {
      setDrawerWidth(240);
    } else {
      setDrawerWidth(0);
    }
  };

  return (
    <Grid container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#000040",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            color="inherit"
            onClick={showMenu}
            sx={{ position: "absolute", left: 0 }}
          >
            <Menu />
          </Button>
          <Typography variant="h5">MY PRODUCTS</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          transition: "all .5s",
        }}
      >
        <Toolbar />
        <Grid item sx={{ overflow: "auto", textAlign: "center" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
            >
              <Typography variant="h5" color="initial">
                Categories
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails sx={{ width: "100%" }}>
              <List>
                {listItem.map((item, index) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{ width: 5 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
            <Divider />
          </Accordion>
        </Grid>
      </Drawer>
      <Grid item component="main" sx={{ flexGrow: 1, p: "5rem 1rem" }}>
        {component}
      </Grid>
    </Grid>
  );
};

export default LayoutDefault;
