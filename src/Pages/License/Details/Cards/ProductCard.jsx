import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

const ProductCard = ({ data }) => {
  const cardState= useSelector((state)=>state.customCard.productInformationCard);
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title={{id: cardState.id, name: "Order Information", expanded: cardState.expanded}}  />
        <Grid item container xs direction="column">
        <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
        <Divider sx={{ borderBottomWidth: 2, mb:1 }} />
          <CustomCardRow title="Feature ID" value={data.productItemNo} />
          <CustomCardRow title="Order Name" value={data.name} />
          <CustomCardRow title="Order Number" value={data.salesOrderNo} />
          <CustomCardRow
            title="List Item Number"
            value={data.lineItemNo}
            mb={0}
          />
          </Collapse>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ProductCard;
