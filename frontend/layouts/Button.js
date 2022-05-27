const Button = ({ text }) => {
  return (
    <button className="text-md text-black font-bold px-8 py-2 rounded-full border border-black w-[150px] btn">
      {text}
    </button>
  );
};

export default Button;
