import { useEffect, useState, MutableRefObject } from "react";

export const useObserve = (ref: MutableRefObject<any>): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // El componente se ha vuelto visible en la pantalla
        setIsVisible(true);
        observer.disconnect(); // Detenemos la observación una vez que se activa
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null, // Usar el viewport como el contenedor de observación
      rootMargin: "0px", // Sin margen adicional
      threshold: 0.8, // Umbral del 50%
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Limpieza cuando el componente se desmonta
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};
