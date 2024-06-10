export const InfoGhnReducer = (state = {}, action) => {
<<<<<<< HEAD
    switch (action.type) {
        case "CREATE_ORDER_GHN": {
            return { ...state, orderGhnInfo: action.payload };
        }

        case "CREATE_ORDER_GHN_FAIL": {
            return { ...state, error: action.payload };
        }

        case "GET_TOKEN_ORDER_GHN": {
            return { ...state, tokenPrintOrderGhnInfo: action.payload };
        }

        case "PRINT_ORDER_GHN": {
            return { ...state, orderGhnInfo: action.payload };
        }

        default:
            return state;
    }
=======
  switch (action.type) {
    case "CREATE_ORDER_GHN": {
      return { ...state, orderGhnInfo: action.payload };
    }

    case "CREATE_ORDER_GHN_FAIL": {
      return { ...state, error: action.payload };
    }

    case "GET_TOKEN_ORDER_GHN": {
      return { ...state, tokenPrintOrderGhnInfo: action.payload };
    }

    case "PRINT_ORDER_GHN": {
      return { ...state, orderGhnInfo: action.payload };
    }

    default:
      return state;
  }
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
};
