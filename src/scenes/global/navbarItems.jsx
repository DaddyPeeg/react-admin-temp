import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const head = {
  title: "Dashboard",
  to: "/",
  icon: <HomeOutlinedIcon />
}

export const data = [
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />
  },
  {
    title: "Contact Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />
  },
]

export const pages = [
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlinedIcon />
  },
]

export const charts = [
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlineOutlinedIcon />
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />
  },
  {
    title: "Geograph Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />
  },
]







