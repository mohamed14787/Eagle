import Carousel from "react-material-ui-carousel";
import { Paper, Button, Image, DialogContent } from "@mui/material";
import Card from "./card";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Second from "./second";

const fashion = [
  {
    name: "pants",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "short",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "tshirt",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "tshirt",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "tshirt",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
];
const food = [
  {
    name: "banana",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "apple",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "rice",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
];
const months = [
  {
    name: "june",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "april",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
  {
    name: "january",
    price: 50,
    url: "https://via.placeholder.com/600x300",
  },
];

function Carousal() {
  const [value, setValue] = React.useState("1");
  const [items, setItems] = React.useState(fashion);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "1") setItems(fashion);
    else if (newValue === "2") setItems(food);
    else setItems(months);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="fashion" value="1" />
              <Tab label=" food" value="2" />
              <Tab label="months" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      ;
      <Carousel
        navButtonsProps={{ style: { display: "flex" } }} // Ensure buttons are visible
        // Other customization options as needed
      >
        <Card items={items} />
        <Card items={items} />
      </Carousel>
      <Second items={items} />
    </div>
  );
}
export default Carousal;
