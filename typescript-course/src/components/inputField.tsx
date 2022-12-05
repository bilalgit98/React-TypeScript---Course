import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Please Enter a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
