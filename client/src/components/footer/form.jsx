function Form() {
  return (
    <form>
      <p>
        <b>Leave a Review</b>
      </p>
      <div className="input">
        <input type="text" placeholder="Enter your Email" />
        <b>icon</b>
      </div>

      <div className="input">
        <input type="text" placeholder="Write your Review" />
        <b>icon</b>
      </div>
      <button className="button-green">SUBMIT</button>
    </form>
  );
}

export default Form;
