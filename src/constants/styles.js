import { Colors } from "./";

const Header = {
  headerTintColor: Colors.primaryColor,
  headerStyle: {
    backgroundColor: "#FFF",
  },
  headerTitleStyle: {
    fontWeight: "800",
    color: Colors.textColor,
  },
};

const Tabs = {
  tabBarActiveTintColor: "#F87961",
  tabBarStyle: {
    backgroundColor: "white",
    borderTopWidth: 0,
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
};

export default { Header, Tabs };
