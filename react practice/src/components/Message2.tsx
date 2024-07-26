let count = 0;

const Message2 = () => {
  console.log("message called", count);
  count++;
  return <div> count {count}</div>;
};

export default Message2;
