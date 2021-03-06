import * as actions from "./actionTypes";

let nextId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          id: nextId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.RESOLVE_BUG:
         let arr1 = state.filter((bug) => bug.id !== action.payload.id)
         let arr2 = state.filter((bug) => bug.id === action.payload.id)
         console.log(arr2[0])
         return [
            ...arr1,
            {...arr2[0], resolved: true}
          ]
    case actions.ADD_COURSE:
          return [
            ...state,
            {
              id: state.length + 1,
              course: action.payload.course
            },
          ]
    case actions.REMOVE_COURSE:
          return [
            ...state.filter(course => course.course === action.payload.course)
          ]
    default:
      return state;
  }
}
