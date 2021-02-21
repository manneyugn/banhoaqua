import {
    FETCH_PRODUCT_SUCCEED,
    FETCH_PRODUCTS_SUCCEED,
} from '../actions/product';


export default (
  state = {
    product:[],
    total_count:0,
    current: {}
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCEED:{
        return  {
            ...state,
            product: action.data.data,
            total_count: action.data.total_count,
        }
    }
    case FETCH_PRODUCT_SUCCEED:{
      return  {
          ...state,
          current: action.data
      }
  }
    default:
      return {
        ...state,
      };
  }
};