import { useEffect, useMemo, useState } from "react";

type Props = React.ComponentPropsWithoutRef<"p"> & {
  className?: string;
};


const Text = ({ className = "", ...props }: Props) => {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(document.documentElement.dir === "rtl");
  }, []);

  const combinedClassName = useMemo(() => {
    const fontClass = isRtl ? "font-tajawal" : "font-sans";
    return [fontClass, className, 'text-foreground dark:text-foreground-dark'].filter(Boolean).join(" ");
  }, [className, isRtl]);

  return <p {...props} className={combinedClassName} />;
};

export default Text;