import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrdersPage/selector";

//===== Redux Selector ===== //
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
    //===== Initialization ===== //
  // const { processOrders } = useSelector(processOrdersRetriever);
  return (
    <TabPanel value="2">
      <Stack>
        {pausedOrders?.map((order, index) => {
          return (
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
              <Box className='process'>
              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$21</p>
                  <img
                    src="/icons/Plus.svg"
                    alt="plus"
                    style={{ marginLeft: "20px" }}
                  />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img
                    src="/icons/pause.svg"
                    alt="pause"
                    style={{ marginLeft: "20px" }}
                  />
                  <p>jami narx</p>
                  <p>$23</p>
                </Box>
                <Button
                 variant="contained"
                 style={{
                  background:'#o288d1',
                  color:'white',
                  borderRadius:'10px'
                 }} 
                >
                  Yakunlash
                </Button>
              </Box>
              </Box>
              
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
