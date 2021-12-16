import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import currency from "./currency.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IСurrency } from "../../types/currency";
import Layout from "../../components/Layout";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  DatasetController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CurrenyPage = () => {
  const { currencyData } = useTypedSelector((state) => state.currency);
  const { fetchCurrencyData, setCurrencyData } = useActions();
  const router = useRouter();

  useEffect(() => {
    const currencyId = router.query.id;

    if (currencyId == undefined) {
      router.push("/");
    }

    if (typeof currencyId == "string") {
      fetchCurrencyData(currencyId);
      const id = setInterval(() => fetchCurrencyData(currencyId), 10000);

      return () => {
        setCurrencyData([]);
        clearInterval(id);
      };
    }
  }, []);

  const data = {
    labels: [currencyData.dates.slice(0, 5)],
    datasets: [
      {
        label: "Graph",
        data: [currencyData.prices.slice(0, 5)],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.9,
      },
    ],
  };

  return (
    <Layout>
      <>
        {currencyData.data.length > 0 ? (
          <Grid container justifyContent="center">
            <div className={currency.chartContainer}>
              <Line data={data} width={10} height={10} />
            </div>
          </Grid>
        ) : null}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date / time</TableCell>
                <TableCell>Price of currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currencyData.data
                .slice(0, 100)
                .map((currency: IСurrency, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {currency.last_updated}
                    </TableCell>
                    <TableCell>{"$" + currency.quote.USD.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </Layout>
  );
};

export default CurrenyPage;
