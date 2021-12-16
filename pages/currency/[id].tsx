import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IСurrency } from "../../types/currency";
import Layout from "../../components/Layout";

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

  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date / time</TableCell>
              <TableCell>Price of currency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyData
              .slice(0, 100)
              .map((currency: IСurrency, index: number) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {currency.last_updated}
                  </TableCell>
                  <TableCell>
                    {"$" +
                      Math.round(
                        (currency.quote.USD.price + Number.EPSILON) * 10000
                      ) /
                        10000}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default CurrenyPage;
