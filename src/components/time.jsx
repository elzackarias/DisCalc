const Time = ({ time }) => {
  return (
    <span>
      {time.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      })}
    </span>
  );
};

export default Time;
