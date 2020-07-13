import { useReducer, Dispatch } from "react";

export interface IState {
  zBuffer: boolean,
  framebuffer: boolean
}
export interface IAction {
  type: "TOGGLE_Z_BUFFER" | "TOGGLE_FRAMEBUFFER";
}
export type Reducer = Dispatch<IAction>;
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "TOGGLE_Z_BUFFER":
      return { ...state, zBuffer: !state.zBuffer };
    case "TOGGLE_FRAMEBUFFER":
      return { ...state, framebuffer: !state.framebuffer };
  }
};
export const useDrawPass = (init: IState = { zBuffer: true, framebuffer: true }) => {
  return useReducer(reducer, init);
}