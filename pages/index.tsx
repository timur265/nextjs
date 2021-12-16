import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IСurrency } from "../types/currency";
import index from "./index.module.scss";

const Index = () => {
  const { currencies } = useTypedSelector((state) => state.currency);
  const { fetchCurrencies } = useActions();
  const router = useRouter();

  useEffect(() => {
    fetchCurrencies();
    const id = setInterval(() => fetchCurrencies(), 10000);
    return () => clearInterval(id);
  }, []);

  const handleClick = (id: number) => {
    router.push(`/currency/${id}`);
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={index.header}>Currency name</TableCell>
            <TableCell className={index.header}>Currency price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency: IСurrency) => (
            <TableRow
              className={index.row}
              key={currency.id}
              onClick={() => {
                handleClick(currency.id);
              }}
            >
              <TableCell component="th" scope="row">
                {currency.name}
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
  );
};

export default Index;

function useHistory() {
  throw new Error("Function not implemented.");
}
