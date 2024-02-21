import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { tokens } from "../../theme";
import { head, data, pages, charts } from "./navbarItems";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <MenuItem
      active={isActive}
      style={{
        color: colors.grey[100],
      }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 650) setIsCollapsed(false);
    function handleResize() {
      if (window.innerWidth <= 650) setIsCollapsed(true);
      else setIsCollapsed(false);
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(selected);

  const collapseIndicator = (bol) => {
    if (bol === true) return "center";
    else return "space-between";
  };

  return (
    <Box display="flex" backgroundColor={colors.primary[400]}>
      <Sidebar
        style={{ border: "none" }}
        backgroundColor="transparent"
        collapsed={isCollapsed}
      >
        <Menu
          // style={{ padding: '0px 10px' }}
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  color: active ? "#fff !important" : undefined,
                  backgroundColor: active
                    ? colors.customColors[100]
                    : undefined,
                  borderRadius: "5px",
                  margin: !isCollapsed ? "5px 0 !important" : "0 !important",
                  "&:hover": {
                    backgroundColor: `${colors.customColors[100]} !important`,
                    color: "white !important",
                    fontWeight: "bold !important",
                  },
                };
              }
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={collapseIndicator(isCollapsed)}
            padding={2}
          >
            {!isCollapsed && (
              <Typography variant="h3" sx={{ cursor: "default" }}>
                APP NAME
              </Typography>
            )}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor={colors.customColors[100]}
              borderRadius="100%"
              width="2em"
              height="2em"
              sx={{
                ":hover": {
                  backgroundColor: colors.customColors[200],
                  color: colors.customColors[300],
                },
                color: colors.customColors[300],
              }}
            >
              <MenuOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setIsCollapsed(!isCollapsed)}
              />
            </Box>
          </Box>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundColor: colors.primary[500],
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  David
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item title={head.title} to={head.to} icon={head.icon} />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ margin: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {data.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ margin: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {pages.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ margin: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {charts.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComp;
