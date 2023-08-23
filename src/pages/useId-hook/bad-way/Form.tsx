const Form = () => {
  return (
    <>
      <div>
        <label htmlFor="agreement1">Agree with term 1 :</label>
        <input id="agreement1" type="checkbox" />
      </div>
      <div>
        <label htmlFor="agreement2">Agree with term 2 :</label>
        <input id="agreement2" type="text" style={{ marginLeft: "10px" }} />
      </div>
    </>
  );
};

export default Form;
