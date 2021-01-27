import React from 'react';
import styles from './index.less';
import NumCode from "./components/NumCode";
import { useDispatch, useSelector, testState } from "umi";

export default () => {
  const getDvaState = () => {
    const dvaState:testState = useSelector((state: any) => state.test_model)
    return dvaState
  }
  console.log("parent_render");
  
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <NumCode />
    </div>
  );
}