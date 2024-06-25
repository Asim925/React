interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, color, onClick }: Props) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        // style={{
        //   height: 50,
        //   width: 100,
        //   background: "red",
        //   borderRadius: 20,
        //   border: "none",
        // }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
