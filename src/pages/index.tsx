import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [samplePos, setSamplePos] = useState(0);
  const [bombMap, setbombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  // 0,1 bomb aru nai
  const [userInputs, setUserInputs] = useState(0);
  // 0~3でクリック、右クリックなど
  // const board:number[][]=[]
  //board.push
  //再帰関数→0連鎖 Reactの副作用 (useEffect→副作用を隔離 時計を作るとき使う)
  // 要件: Replayはいらない レべル＆カスタム 機能すべて useStateを少なくなる
  const clickHandler = (x: number, y: number) => {
    console.log(y, x);
  };
  return (
    <div className={styles.container}>
      <div className={styles.gameBoard}>
        <div className={styles.boardStyle}>
          {bombMap.map((row, y) =>
            row.map((flag, x) => (
              <div
                className={styles.cellStyle}
                key={`${x}-${y}`}
                onClick={() => clickHandler(x, y)}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
