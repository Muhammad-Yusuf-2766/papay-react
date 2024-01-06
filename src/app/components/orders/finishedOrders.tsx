import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "../../screens/OrdersPage/selector";
import { Product } from "../../../types/product";
import { serviceApi } from "../../../lib/config";

//===== Redux Selector ===== //
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);
 

export default function FinishedOrders(props: any) {
    //===== Initialization ===== //
const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders?.map((order, index) => (
          <Box className={"order_main_box"}>
          <Box className={"order_box_scroll"}>
            {order.order_items.map((item) => {
              const product: Product = order.product_data.filter(
                (ele) => ele._id === item.product_id
              )[0];
              const image_path = `${serviceApi}/${product.product_images[0]}`;
              return (
                <Box className={"ordersName_price"}>
                    <img src={image_path} className={"orderDishImg"} alt="" />
                    <p className={"titleDish"}>{product.product_name}</p>
                  <Box className={"priceBox"}>
                  <p>
                  mahsulot:$
                  {order.order_total_amount - order.order_delivery_cost}
                </p>
                <img src="/icons/Plus.svg" alt="plus" />
                <p>yetkazish:${order.order_delivery_cost}</p>
                <img src="/icons/pause.svg" alt="pause" />
                <p>jami:${order.order_total_amount}</p>
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