import * as types from "../constants/actionTypes";

const loadBlocksSuccess = (node, res) => {
  return {
    type: types.BLOCKS_LOAD_SUCCESS,
    node,
    res
  };
};

const loadBlocksFailure = (node, error) => {
  return {
    type: types.BLOCKS_LOAD_FAILURE,
    node,
    error
  };
};

export function loadBlocksForNode(node) {
  return async dispatch => {
    try {
      // dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(loadBlocksFailure(node));
      }

      const json = await res.json();

      dispatch(loadBlocksSuccess(node, json));
    } catch (err) {
      dispatch(loadBlocksFailure(node, err));
    }
  };
}

// export function checkNodeStatuses(list) {
//   return dispatch => {
//     list.forEach(node => {
//       dispatch(loadBlocksForNode(node));
//     });
//   };
// }
