import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import classes from "./Info.module.css";
import { Divider } from "@mui/material";

export default function FolderList({company}) {
  return (
    <div className={classes.deal}>
      <h2 className={classes.heading}>Deal Terms</h2>
      <div className={classes.invest}>
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemText secondary="Type" primary="CSOP" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="Discount %" primary="20%" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              secondary="Valuation Cap"
              primary={`${company.valuation} ETH`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="Min Subscription" primary={`${company.minsubamt} ETH`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="Target" primary={`${company.target} ETH`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="End Date" primary={`${company.targetDate}`} />
          </ListItem>
          <Divider />
        </List>
        <div className={classes.input}>
        <TextField  style={{minWidth: '70px', minHeight: '60px'}} id="filled-basic" label="Enter amount" variant="filled" />
        <Button sx={{background:'#00df9a',minWidth: '220px', minHeight: '30px'}} variant="contained">Invest Now</Button>
        </div>
      </div>
    </div>
  );
}
