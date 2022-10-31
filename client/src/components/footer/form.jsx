function Form() {
  return (
    <form>
      <div className="justify-between">
        <input type="text" className="w-50"/>
        <input type="text" className="w-50"/>
      </div>
      
      <input type="text" className="w-100" />
      <button className="w-100">submit</button>
    </form>
  );
}

export default Form;
