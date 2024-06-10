export const ListTypeProductReducer = (state = {}, action) => {
<<<<<<< HEAD
    switch (action.type) {
        case "GET_ALL_TYPE_PRODUCT": {
            return { ...state, List: action.payload };
        }

        default:
            return state;
    }
};

export const TypeProductReducer = (state = {}, action) => {
    switch (action.type) {
        case "CREATE_NEW_TYPE_PRODUCT": {
            return { ...state, typeProduct: action.payload };
        }

        // eslint-disable-next-line no-duplicate-case
        case "CREATE_NEW_TYPE_PRODUCT": {
            return { ...state, typeProduct: action.payload };
        }
        default:
            return state;
    }
=======
  switch (action.type) {
    case "GET_ALL_TYPE_PRODUCT": {
      return { ...state, List: action.payload };
    }
    
    default:
      return state;
  }
};

export const TypeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }

    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }
    default:
      return state;
  }
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
};
