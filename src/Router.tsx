import { createBrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import Coins from "./routes/Coins";

const coinId = {};

export const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "price",
        element: <Price coinId={coinId as string} />,
      },
      {
        path: "chart",
        element: <Chart coinId={coinId as string} />,
      },
    ],
  },
  {
    path: process.env.PUBLIC_URL,
    element: <Coins />,
  },
]);
export default router;
