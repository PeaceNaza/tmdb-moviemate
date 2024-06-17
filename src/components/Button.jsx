/* eslint-disable react/prop-types */

const Button = ({ variant, children, onClick }) => {
  const baseClasses = "px-4 py-2 font-semibold rounded transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-purple-500 border-2 border-purple-500 text-white hover:bg-purple-600 hover:border-purple-600  xs:w-32",
    outline:
      "bg-white text-purple-500 border-2 border-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 xs:w-44",
    info: "bg-blue-500 text-white border-none hover:bg-white hover:text-blue-500",
    warning: "bg-yellow-500 text-white border-none hover:bg-white hover:text-yellow-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
