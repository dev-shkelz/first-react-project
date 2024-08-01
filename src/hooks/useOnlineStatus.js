import { useEffect, useState } from "react";

//We have used online status on Profile.js component
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnlineStatus = () => {
    setIsOnline(true);
  };
  const handleOfflineStatus = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnlineStatus);
    //Dhe
    window.addEventListener("offline", handleOfflineStatus);
  }, []);

  return isOnline;
};
export default useOnlineStatus;
