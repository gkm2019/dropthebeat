import { useEffect, useState } from "react";

export default function PlatformBar() {
  const [platform, setPlatform] = useState('');

  useEffect(() => {
    setPlatform(window.navigator.userAgent);
  }, [])
  return <div>{platform}</div>;
}
