export const navbarStyles = {
  drawer: {
    width: 320,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 280,
      boxSizing: "border-box",
      backgroundColor: "red",
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  icons: {
    color: "rgba(255, 255, 255, 0.7)!important",
    marginLeft: "20px",
  },
  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
    },
  },
  active: {
    backgroundColor: "blue",
  },
};
