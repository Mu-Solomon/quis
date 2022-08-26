import React from "react";

const Answers = (props) => {
  const labelClasses =
    "inline-flex justify-between items-center p-5 mx-3  w-11/12 text-gray-400 bg-white rounded-lg border border-gray-200 cursor-pointer 0   peer-checked:text-[#618685] peer-checked:border-[#d5f4e6] hover:text-gray-600 hover:bg-gray-100 ";

  return (
    <div>
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}

      <li>
        <input
          type="radio"
          id={"answer-" + props.idWord}
          name="answers"
          value={"answer-" + props.idWord}
          className="hidden peer"
          required
        />
        <label
          onClick={props.onValidate}
          for={"answer-" + props.idWord}
          className={labelClasses}
        >
          <div className="block">
            <div className="w-full text-lg font-semibold font-poppins ">
              {" "}
              {props.answer}{" "}
            </div>

            <div className="w-full"></div>
          </div>
          <svg
            aria-hidden="true"
            className="ml-3 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </label>
      </li>
    </div>
  );
};
export default Answers;
