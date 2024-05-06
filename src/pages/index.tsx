import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [samplePos, setSamplePos] = useState(0);
  const [bombMap, setbombMap] = useState(0);
  // 0,1 bomb aru nai
  const [userInputs, setUserInputs] = useState(0);
  // 0~3でクリック、右クリックなど
  const board:number[][]=[]
  //board.push
  //再帰関数→0連鎖 Reactの副作用 (useEffect→副作用を隔離 時計を作るとき使う)
  // 要件: Replayはいらない レべル＆カスタム 機能すべて useStateを少なくなる
  console.log(samplePos);
  return (
    <div className={styles.container}>
      <div
        className={styles.sampleStyle}
        style={{ backgroundPosition: `${samplePos * -30}px 0px` }}
      />
      <button onClick={() => setSamplePos((P) => (P + 1) % 14)} />
    </div>
  );
};

export default Home;
