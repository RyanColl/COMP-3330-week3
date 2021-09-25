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

export function addCourse(course) {
  return {
    type: actions.ADD_COURSE,
    payload: {
      course,
    }
  }
}

export function removeCourse(course) {
  return {
    type: actions.REMOVE_COURSE,
    payload: {
      course,
    }
  }
}