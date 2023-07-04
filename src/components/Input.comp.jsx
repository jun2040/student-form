const Input = ({ label, type, placeholder, name, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
