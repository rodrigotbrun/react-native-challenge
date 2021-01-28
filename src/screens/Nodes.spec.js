import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedNodes from "./Nodes";

describe("<Nodes />", () => {
  const actions = {
    checkNodeStatuses: jest.fn()
  };

  const nodes = {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
        blocks: {
          data: [
            {
              id: "5",
              type: "blocks",
              attributes: {
                index: 1,
                timestamp: 1530679678,
                data: "The Human Torch"
              }
            },
            {
              id: "6",
              type: "blocks",
              attributes: {
                index: 2,
                timestamp: 1530679684,
                data: "is denied"
              }
            }
          ],
          loading: true,
          error: false
        }
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
        blocks: {
          data: [],
          loading: true,
          error: false
        }
      }
    ]
  };

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({ nodes });
    const component = create(
      <Provider store={store}>
        <ConnectedNodes />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
