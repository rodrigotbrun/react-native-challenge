import {
  CHECK_NODE_STATUS_START,
  CHECK_NODE_STATUS_SUCCESS,
  CHECK_NODE_STATUS_FAILURE,
  BLOCKS_LOAD_START,
  BLOCKS_LOAD_SUCCESS,
  BLOCKS_LOAD_FAILURE
} from "../constants/actionTypes";
import initialState from "./initialState";

export default function nodesReducer(state = initialState().nodes, action) {
  let list, nodeIndex;
  switch (action.type) {
    case CHECK_NODE_STATUS_START:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            loading: true
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };
    case CHECK_NODE_STATUS_SUCCESS:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            online: true,
            name: action.res.node_name,
            loading: false
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };
    case CHECK_NODE_STATUS_FAILURE:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            online: false,
            loading: false
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };

    case BLOCKS_LOAD_START:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            loading: false,
            blocks: {
              ...state.list[nodeIndex].blocks,
              loading: true
            }
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };

    case BLOCKS_LOAD_SUCCESS:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            loading: false,
            blocks: {
              ...state.list[nodeIndex].blocks,
              ...action.res,
              loading: false
            }
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };

    case BLOCKS_LOAD_FAILURE:
      list = state.list;
      nodeIndex = state.list.findIndex(p => p.url === action.node.url);
      if (nodeIndex >= 0) {
        list = [
          ...state.list.slice(0, nodeIndex),
          {
            ...state.list[nodeIndex],
            loading: false,
            blocks: {
              ...state.list[nodeIndex].blocks,
              data: [],
              loading: false,
              error: action.error
                ? action.error.message
                : "Something went wrong!"
            }
          },
          ...state.list.slice(nodeIndex + 1)
        ];
      }

      return {
        ...state,
        list
      };

    default:
      return state;
  }
}
