import { useLayoutEffect, useState } from "react";

const useWritingHooks = () => {
  const [userData, setUserData] = useState<any>()

  useLayoutEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData') || '{}'))
    const storedData = JSON.parse(localStorage.getItem('userData') || '{}');
    const glyphsLearned = storedData?.glyphsLearned || [];

    let topThreeGlyphs = [];
    if (storedData?.glyphsLearned.length >= 5) {
      const sortedGlyphsLearned = storedData.glyphsLearned.sort(
        (a: any, b: any) => b.score - a.score,
      );
      topThreeGlyphs = sortedGlyphsLearned.slice(0, 3);

      setUserData({
        glyphsLearned,
        topScore: topThreeGlyphs,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = () => {
    setUserData(localStorage.getItem('userData'))
    return localStorage.getItem('userData')
  }

  const writeData = (newData: any) => {
		localStorage.setItem('userData', JSON.stringify(JSON.stringify(newData)));
    setUserData(newData)
  }
  
  return {
    writeData,
    getData,
    userData, 
    setUserData
  }
}

export default useWritingHooks
