import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const InputAutoFocusQuery = () => {
  const firstElem = useRef();
  const secondElem = useRef();
  const thirdElem = useRef();
  const fourthElem = useRef();

  // Get the query parameter 'input'
  const [searchQuery] = useSearchParams();
  const storEinput = searchQuery.get('input');

  // Use useEffect to focus the appropriate input element based on the query parameter
  useEffect(() => {
    if (storEinput === "first") {
      firstElem.current.focus();
    } else if (storEinput === "second") {
      secondElem.current.focus();
    } else if (storEinput === "third") {
      thirdElem.current.focus();
    } else if (storEinput === "fourth") {
      fourthElem.current.focus();
    }
  }, [storEinput]);

  return (
    <div>
      <div className="box">
        <input type="text" placeholder="First Input" ref={firstElem} />
      </div>
      <div className="box">
        <input type="text" placeholder="Second Input" ref={secondElem} />
      </div>
      <div className="box">
        <input type="text" placeholder="Third Input" ref={thirdElem} />
      </div>
      <div className="box">
        <input type="text" placeholder="Fourth Input" ref={fourthElem} />
      </div>
    </div>
  );
};

export default InputAutoFocusQuery;
