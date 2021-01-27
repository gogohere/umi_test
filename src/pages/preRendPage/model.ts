import { ImmerReducer, Reducer } from "umi";

export interface testState {
  listState: string[];
}

export interface testType {
  namespace: 'test_model';
  state: testState;
  effects: {};
  reducers: {
    saveState: Reducer<testState>;
    initList: ImmerReducer<testState>;
  };
}

const testModel: testType = {
  namespace: 'test_model',

  state: {
    listState: []
  },

  effects: {},

  reducers: {
    saveState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    /** 初始化list */
    initList(state, action) {
      return {
        ...state,
      };
    },
  },
};

export default testModel;
