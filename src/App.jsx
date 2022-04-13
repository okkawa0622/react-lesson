/*eslint react-hooks/exhaustive-deps:　off*/

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setShowFlg] = useState(false);

  const onClickCntUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    setShowFlg(!faceShowFlg);
  };
  useEffect(() => {
    if (num % 3 === 0 && num !== 0) {
      faceShowFlg || setShowFlg(true);
    } else {
      faceShowFlg && setShowFlg(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCntUp}>カウントアップ！</button>
      <p>{num}</p>
      {faceShowFlg && <p>( ^ω^ )</p>}

      <button onClick={onClickSwitchShowFlg}>オン/オフ</button>
    </React.Fragment>
  );
};

export default App;
