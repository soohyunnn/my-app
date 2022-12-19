import React, { useEffect, useState } from "react";

export default function WithLoaging(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <p>Loaging...</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
