import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Avatar src="https://media.licdn.com/dms/image/C560BAQHc2qyz3-g27w/company-logo_200_200/0/1656925563432/designalytica_logo?e=1710374400&v=beta&t=Ack5iexRdkmT-1QLf9Xyq7HX_YHDJo9-9EnPH1TPhIY"></Avatar>
          <Typography sx={{ fontWeight: "600" }}>
            Designalytica.Pvt.Ltd
          </Typography>
          <Avatar src="https://media.licdn.com/dms/image/C560BAQHc2qyz3-g27w/company-logo_200_200/0/1656925563432/designalytica_logo?e=1710374400&v=beta&t=Ack5iexRdkmT-1QLf9Xyq7HX_YHDJo9-9EnPH1TPhIY"></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
