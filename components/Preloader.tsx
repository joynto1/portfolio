'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" style={visible ? {} : { opacity: 0, visibility: 'hidden' }}>
      <div className="loader"></div>
      <div className="loader-text">Loading Portfolio...</div>
    </div>
  );
}
