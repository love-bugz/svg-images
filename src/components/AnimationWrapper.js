import * as React from "react";
import useHover from "../hooks/useHover";

const AnimationWrapper = ({
  children,
  config,
  style,
  reset,
  animationConfig,
  ...rest
}) => {
  const passedConfig = {
    ...config,
    animationConfig:
      typeof animationConfig === "string"
        ? animationConfig
        : { ...animationConfig },
  };
  const hookConfig = reset
    ? {
        opacity: {
          initial: "1",
          onHover: "1",
        },
        transform: {
          initial: "scale(1)",
          onHover: "scale(1)",
        },
        ...passedConfig,
      }
    : passedConfig;
  const { animated, setHover, spring } = useHover(hookConfig);
  return (
    <animated.div
      {...rest}
      style={{ ...spring, ...style }}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimationWrapper;
