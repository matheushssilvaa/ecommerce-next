import { useContext } from "react";
import contextCart from "../contexts/contextCart";

const useCart = () => useContext(contextCart)
export default useCart;