const SlidingIndicator = ({
  indicatorStyle,
}: {
  indicatorStyle: { width: number; left: number };
}) => {
  return (
    <>
      <span
        className="absolute bottom-0 h-[2px] bg-sky-500  transition-all duration-300 ease-out"
        style={{
          width: indicatorStyle.width,
          transform: `translateX(${indicatorStyle.left}px)`,
        }}
      />
    </>
  );
};

export default SlidingIndicator;
