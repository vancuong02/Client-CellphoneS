export const SelectListReducer = (state = {}, action) => {
<<<<<<< HEAD
    switch (action.type) {
        case "GET_ALL_SELECT_LIST": {
            return { ...state, List: action.payload };
        }
        case "CREATE_SELECT_LIST_ITEM": {
            return { ...state, List: action.payload };
        }

        default:
            return state;
    }
};

export const UpdateSelectListReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_SELECT_LIST_ITEM": {
            return { ...state, SelectItem: action.payload };
        }

        case "GET_SELECT_LIST_ITEM_BY_ID": {
            return { ...state, SelectItem: action.payload };
        }

        case "DELETE_SELECT_LIST_ITEM_BY_ID": {
            return { ...state, SelectItem: action.payload };
        }

        default:
            return state;
    }
=======
  switch (action.type) {
    case "GET_ALL_SELECT_LIST": {
      return { ...state, List: action.payload };
    }
    case "CREATE_SELECT_LIST_ITEM": {
      return { ...state, List: action.payload };
    }

    default:
      return state;
  }
};

export const UpdateSelectListReducer = (state = {}, action) => {
  switch (action.type) {

    case "UPDATE_SELECT_LIST_ITEM": {
      return { ...state, SelectItem: action.payload };
    }

    case "GET_SELECT_LIST_ITEM_BY_ID": {
      return { ...state, SelectItem: action.payload };
    }

    case "DELETE_SELECT_LIST_ITEM_BY_ID": {
      return { ...state, SelectItem: action.payload };
    }

    default:
      return state;
  }
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
};
