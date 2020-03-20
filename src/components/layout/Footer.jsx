import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ category, muscles, onSelect }) => {
  const index = category
    ? // find the category in the list of muscles and return its index
      //(incremented by 1 to allow for the extra 'All' tab),
      muscles.findIndex(muscle => muscle === category) + 1
    : // or if there is no match  default to index 0
      0;

  const onIndexSelect = (e, idx) => {
    onSelect(
      idx === 0
        ? // if the event index is 0, pass an empty string
          ""
        : // otherwise, find the category corresponding to the index in the muscles array
          muscles[idx - 1]
    );
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map((item, idx) => {
          return <Tab key={idx} label={item} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
