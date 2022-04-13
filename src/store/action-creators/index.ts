import * as UserActionsCreators from "./user";
import * as TodoActionsCreators from "./todo";

const actionCreators = {
  ...UserActionsCreators,
  ...TodoActionsCreators,
};

export default actionCreators;
