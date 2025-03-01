import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

const LicenseServerCard = ({ data }) => {
  const cardState = useSelector((state) => state.customCard.licenseServerCard);
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title={{id: cardState.id, name: "License Server", expanded: cardState.expanded}} />
        <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
        <Divider sx={{ borderBottomWidth: 2, mb:1 }} />
        <Grid item container xs direction="column">
            <CustomCardRow title="License Server ID" value={data.oldLicense} mb={0} />
        </Grid>
        </Collapse>
      </CustomCardContent>
    </CustomCard>
  );
};

export default LicenseServerCard;
