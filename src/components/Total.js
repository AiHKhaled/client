import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
//import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="div" sx={{ mb: 4 }} variant="h6">
        {" "}
        مجموع المرافق
      </Typography>
      <Typography component="p" variant="h4">
        8795
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
