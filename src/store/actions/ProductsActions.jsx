import axios from "../../api/Axiosconfig";
import { loadProduct, loadlazyProduct } from "../reducers/ProductsSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    toast.error(error.message);
  }
};
