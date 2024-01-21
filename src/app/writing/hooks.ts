import { useLayoutEffect, useState } from "react";
import Cookies from "universal-cookie";

const useWritingHooks = () => {
  const cookies = new Cookies();
  const [userData, setUserData] = useState<any>()

  useLayoutEffect(() => {
    setUserData(cookies.get('userData'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = () => {
    setUserData(cookies.get('userData'))
    return cookies.get('userData')
  }

  const writeData = (newData: any) => {
    cookies.set('userData', JSON.stringify(newData));
    setUserData(newData)
  }
  
  return {
    cookies,
    writeData,
    getData,
    userData, 
    setUserData
  }
}

export default useWritingHooks
