// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

// import { MenNav } from "./Men.jsx";
// import myntra from "../../assets/myntra.ico";
// import bag from "../../assets/bag2.png";
// import wishlist from "../../assets/wishlist.png";
// import profile from "../../assets/profile.png";

// const pages = ["Men", "Women", "Kids", "Beauty", "Home&Living", "Studio"];
// const settings = ["Profile", "Account", "Dashboard", "Logout","shirt"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [category, setCategory] = React.useState(null);

//   const handleCategory = (event) => {
//     console.log("hello")
//     setCategory(event.currentTarget);
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseCategory = () => {
//     setCategory(null);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <Avatar alt="Remy Sharp" src={myntra} />
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             {category && <div><MenNav /></div>}
//             <MenuItem >
//               <Typography textAlign="center" onClick={handleCategory}>Male</Typography>
//             </MenuItem>

//             <MenuItem onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">Women</Typography>
//             </MenuItem>
//             <MenuItem onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">Kids</Typography>
//             </MenuItem>
//             <MenuItem onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">Home&Living</Typography>
//             </MenuItem>
//             <MenuItem onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">Beauty</Typography>
//             </MenuItem>
//             <MenuItem onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">Studio</Typography>
//             </MenuItem>
//           </Box>

//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleOpenUserMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 400,
//             }}
//           >
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search Google Maps"
//               inputProps={{ "aria-label": "search products" }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//           </Paper>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src={profile} />
//               </IconButton>
//               <IconButton sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src={wishlist} />
//               </IconButton>
//               <IconButton sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src={bag} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;



import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import { BeautyNav } from "./Beauty";
import { WomenNav } from "./Women";
import { KidsNav } from "./Kids";
import { HomeLivingNav } from "./Home&Living";
import { MenNav } from "./Men";
import { StudioNav } from "./Studio";
// import { getData } from "../../Pages/storage";

const Div = styled.nav `
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  width: 100%;
  height: 70px;
  top: 0;
  margin-left: 5%;
  right: 0;
  z-index: 1000;
  align-items: center;
  background-color: #fffffe;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    ${"" /* 0 6.7px 5.3px rgba(0, 0, 0, 0.048),  */}
      ${"" /* 0 12.5px 10px rgba(0, 0, 0, 0.06), */} 0 22.3px 17.9px
      rgba(0, 0, 0, 0.072),
    0 8px 8px rgba(0, 0, 0, 0.1);
`;



const Navbar = () => {
  // const { currentUser, logout } = useAuth();

  return (
    <>
      <Div>
        <Link className="link1" to="/">
          <img
            style={{
              // border: '1px solid red',
              width: "75%",
              height: "50px",
              marginLeft: "15%",
              // marginRight: "30%",
            }}
            src="/Logo.jpg"
            // src={V_Logo}
            alt=""
          />
        </Link>

        <div className="link1">
          <NavLink
            className="link men"
            style={{
              // border: '1px solid red',
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "20px",
              paddingRight: "5px",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              //   hoverBorderBottom:"5px solid #ee5f73"
            }}
            to="/men"
          >
            MEN
          </NavLink>
          <MenNav></MenNav>
        </div>

        <div className="link1">
          <NavLink
            className="link women"
            style={{
              // border: '1px solid red',
              marginLeft: "3%",
              marginBottom: "-2%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              whiteSpace: "nowrap",
              wordWrap: "normal",
            }}
            to="/women"
          >
            WOMEN
          </NavLink>
          <WomenNav></WomenNav>
        </div>

        <div className="link1">
          <Link
            className="link kids"
            style={{
              // border: '1px solid red',
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
              whiteSpace: "nowrap",
              wordWrap: "normal",
            }}
            to="/kids"
          >
            KIDS
          </Link>
          <KidsNav></KidsNav>
        </div>

        {/* <Link style={{ marginLeft: "2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/homeandkitchen">Home & Living</Link> */}

        <div className="link1">
          <Link
            className="link home"
            style={{
              // border: '1px solid red',
              //   marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
              whiteSpace: "nowrap",
              // wordWrap: 'normal',
            }}
            to="/home&living"
          >
            HOME & LIVING
          </Link>
          <HomeLivingNav></HomeLivingNav>
        </div>

        <div className="link1">
          <Link
            className="link beauty"
            style={{
              // border: '1px solid red',
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
              whiteSpace: "nowrap",
              wordWrap: "normal",
            }}
            to="/Beauty"
          >
            BEAUTY
          </Link>
          <BeautyNav />
        </div>

        <div className="link1">
          <Link
            className="link studio"
            style={{
              // border: '1px solid red',
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
              whiteSpace: "nowrap",
              wordWrap: "normal",
            }}
            to="/Studio"
          >
            STUDIO
          </Link>
          <StudioNav></StudioNav>
        </div>

        {/* <p className="nw">NEW</p> */}

        <div className="inp1">
          <input
            style={{
              // border: '1px solid red',
              wordWrap: "normal",
              fontSize: "12px",
              width: "480px",
            }}
            type="text"
            className="inp"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "20%",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <p style={{ marginLeft: "4%" }}>
            <img
              style={{ fontSize: "12px", width: "20px", display: "inline" }}
              src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png"
              alt=""
            />
            <br></br>
            <span>
              <Link to={"/seeFullDetails"} className="rightLink">
                Profile
              </Link>
            </span>
          </p>
          <p style={{ marginLeft: "2%", cursor: "pointer" }}>
            <span>
              <Link to={"/wishlist"} className="rightLink">
              <img
              style={{
                marginLeft: "15%",
                fontSize: "12px",
                width: "20px",
                display: "inline",
              }}
              src="https://cdn-icons-png.flaticon.com/512/7299/7299761.png"
              alt=""
            />
                Wishlist
              </Link>
            </span>
          </p>

          <p
            style={{
              // border: '1px solid red',
              wordWrap: "normal",
              marginLeft: "2%",
              cursor: "pointer",
            }}
          >
            <span>
              <Link to={"/bag"} className="rightLink">
              <img
              style={{
                marginLeft: "15%",
                fontSize: "12px",
                width: "20px",
                marginBottom: "5px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/1174/1174408.png"
              alt=""
            />
                Bag
              </Link>
            </span>
          </p>
          {/* Admin  */}
          <p
            style={{
              // border: '1px solid red',
              wordWrap: "normal",
              marginLeft: "2%",
              cursor: "pointer",
            }}
          >
            <span>
              <Link to={"/admin-dashboard"} className="rightLink">
                <img
                  style={{
                    marginLeft: "15%",
                    fontSize: "12px",
                    width: "20px",
                    marginBottom: "5px",
                  }}
                  src="/admin.png"
                  alt=""
                />
                Admin
              </Link>
            </span>
          </p>
          {/* </Link> */}
        </div>
      </Div>
    </>
  );
};

export default Navbar;

