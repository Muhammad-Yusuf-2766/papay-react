import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "../../screens/OrdersPage/selector";

//===== Redux Selector ===== //
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
    //===== Initialization ===== //
// const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value="3">
      <Stack>
        {pausedOrders?.map((order, index) => (
          <Box className={"order_main_box"}>
            <Box className={"order_box_scroll"}>
              {order.map((item, itemIndex) => {
                const image_path = "/restaurant/recommendations_3.jpeg";
                return (
                  <Box className={"ordersName_price"}>
                    <img src={image_path} className={"orderDishImg"} alt="" />
                    <p className={"titleDish"}>Turk Kebab</p>
                    <Box className={"priceBox"}>
                      <p>$7</p>
                      <img src="/icons/Close.svg" alt="close" />
                      <p>3</p>
                      <img src="/icons/Pause.svg" alt="pause" />
                      <p style={{ marginLeft: "15px" }}>$21</p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box className='finished'>
              <Box className={"total_price_box black_solid"}>
              <Box className={"boxTotal"}>
                <p>mahsulot narxi</p>
                <p>$21</p>
                <img src="/icons/Plus.svg" alt="plus" style={{ marginLeft: "20px" }} />
                <p>yetkazish xizmati</p>
                <p>$2</p>
                <img src="/icons/pause.svg" alt="pause" style={{ marginLeft: "20px" }} />
                <p>jami narx</p>
                <p>$23</p>
              </Box>
            </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
