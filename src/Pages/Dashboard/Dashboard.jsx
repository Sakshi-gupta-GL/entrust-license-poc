import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardWrapper from "./CardWrapper";
import { useNavigate } from "react-router-dom";
import { CustomCard } from "../../Utilty";
import {
  ROUTE_ADMIN_PANEL,
  ROUTE_LICENSE_GENERATE,
  ROUTE_LICENSE_SEARCH,
  ROUTE_LICENSE_MODIFY,
  ROUTE_LICENSE_ACTIVATE,
} from "Routes";
import { useContext } from "react";
import { AppContext } from "Layouts/Content/ApplicationContextProvider";

const cards = [
  {
    key: 1,
    enable: true,
    icon: "key",
    title: "Create product key",
    subtitle: "Order Entry",
    subtitle2: "Application Defined Features",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle:
        "You can create multiple keys using the same settings here, as well.",
    },
    action: {
      buttonText: "GENERATE NEW PRODUCT KEY",
    },
  },
  {
    key: 2,
    enable: true,
    icon: "key",
    title: "Activate Key",
    subtitle: "Activation",
    subtitle2: "",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle: "Activate a key from an activation file or manually.",
    },
    action: {
      buttonText: "ACTIVATE KEY",
    },
  },
  {
    key: 3,
    enable: false,
    icon: "key",
    title: "Generate product key",
    subtitle: "Deactivated Card",
    subtitle2: "",
    content: {
      title:
        "This item cannot be accessed with the currently assumed role. Contact the administrator for questions.",
      subtitle: "",
    },
    action: {
      buttonText: "GENERATE NEW PRODUCT KEY",
    },
  },

  {
    key: 4,
    enable: true,
    icon: "search",
    title: "Search",
    subtitle: "License Explorer",
    subtitle2: "",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle:
        "You can create multiple keys using the same settings here, as well.",
    },
    action: {
      buttonText: "EXPLORE THE DATABASE",
    },
  },
  {
    key: 5,
    enable: true,
    icon: "search",
    title: "Modify product key",
    subtitle: "Rehosting",
    subtitle2: "",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle:
        "You can create multiple keys using the same settings here, as well.",
    },
    action: {
      buttonText: "EXPLORE THE DATABASE",
    },
  },
  {
    key: 6,
    enable: true,
    icon: "key",
    title: "Admin Panel",
    subtitle: "",
    subtitle2: "",
    content: {
      title: "Manage roles and application defined feature settings.",
      subtitle: "",
    },
    action: {
      buttonText: "GO TO ADMIN PANEL",
    },
  },
];

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [adminComponent, setAdminComponent] = useContext(AppContext);

  const onCreateNewProductKey = () => {
    navigate(ROUTE_LICENSE_GENERATE);
  };

  const onActivateKey = () => {
    navigate(ROUTE_LICENSE_ACTIVATE);
  };

  const onGenerateNewProductKey = () => {
    window.alert("Feature not implemented yet..");
    // navigate("/");
  };

  const onSearchProductKey = () => {
    navigate(ROUTE_LICENSE_SEARCH);
  };

  const onModifyProductKey = () => {
    navigate(ROUTE_LICENSE_MODIFY);
  };

  const onAdminPanel = () => {
    if (adminComponent != 0) setAdminComponent(0);
    navigate(ROUTE_ADMIN_PANEL);
  };

  const goToDashBord = () => {
    navigate("/license");
  };

  const getMethodName = (card) => {
    var methodName = goToDashBord;
    switch (card.key) {
      case 1:
        methodName = onCreateNewProductKey;
        break;
      case 2:
        methodName = onActivateKey;
        break;
      case 3:
        methodName = onGenerateNewProductKey;
        break;
      case 4:
        methodName = onSearchProductKey;
        break;
      case 5:
        methodName = onModifyProductKey;
        break;
      case 6:
        methodName = onAdminPanel;
        break;
      default:
        methodName = goToDashBord;
        break;
    }
    return methodName;
  };

  return (
    <Grid item container direction="column" {...props}>
      <CustomCard>
        <Grid item mb={2}>
          <Typography variant="h4">Dashboard</Typography>
        </Grid>
        <Grid item mb={5}>
          <Grid xs>
            <Typography variant="caption">
              Welcome to the Internal Licensing Tool. This is your Dashboard,
              from where you can access all available functions.
            </Typography>
          </Grid>
          <Grid xs>
            <Typography variant="caption">
              Below the header of each card, the legacy name of the function in
              regard to the old toolset is mentioned.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs columnSpacing={3}>
          {cards.map((card) => (
            <CardWrapper
              key={card.key}
              mb={5}
              onSubmitButton={getMethodName(card)}
              data={card}
            />
          ))}
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default Dashboard;
