import { MdEmail, MdSend } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

function Form() {
  return (
    <form>
      <p>
        <b>Leave a Review</b>
      </p>
      <div className="input">
        <input type="text" placeholder="Enter your Email" />
        <MdEmail />
      </div>

      <div className="input">
        <input type="text" placeholder="Write your Review" />
        <FaPencilAlt />
      </div>
      <button className="button_green_dark">
        SUBMIT <MdSend />
      </button>
    </form>
  );
}

export default Form;
