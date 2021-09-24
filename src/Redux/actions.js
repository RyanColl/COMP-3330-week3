import * as actions from "./actionTypes";

export function addBug(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description, //: "our first bug",
    },
  };
}

export function removeBug(id) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: id,
    },
  };
}

export function resolveBug(id) {
    return {
        type: actions.RESOLVE_BUG,
        payload: {
            id,
        },
    };
}