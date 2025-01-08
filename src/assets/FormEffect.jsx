import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const FormEffect = () => {
  const [inputData, setInputData] = useState({
    firstname: '',
    email: '',
    country: '',
    radioCheck: ''
  });

  const handleInput = (e) => {
    const { name, value, type } = e.target;

    if (type === 'radio') {
      setInputData((prevData) => ({
        ...prevData, [name]: value
      }));
    } else if (type === 'select-one') {
      setInputData((prevData) => ({
        ...prevData, [name]: value
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData, [name]: value
      }));
    }
    const newData = {...inputData,[name]:value}
    localStorage.setItem('inputFieldData', JSON.stringify(newData));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('inputFieldData');
    if (storedData) {
      setInputData(JSON.parse(storedData));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('inputFieldData', JSON.stringify(inputData));
  // }, [inputData]);

  return (
    <>
      <div className="row custom-control">
        <div className="col-md-12">
          <label>first name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="form-control"
            name="firstname"
            value={inputData.firstname}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-12">
          <label>email name</label>
          <input
            type="text"
            placeholder="Enter email"
            className="form-control"
            name="email"
            value={inputData.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-12">
          <label>choose country</label>
          <select name="country" id="countryYour" className="form-control" value={inputData.country} onChange={handleInput}>
            <option>india</option>
            <option>canda</option>
          </select>
        </div>
        <div className="col-md-12 form-check">
          <div className="row">
            <div className="col-md-6">
              <input type="radio" name="radioCheck" value='male' checked={inputData.radioCheck === 'male'} onChange={handleInput}/>
              <label>male</label>
            </div>
            <div  className="col-md-6">
              <input type="radio" name="radioCheck" value='female' checked={inputData.radioCheck === 'female'} onChange={handleInput}/>
              <label>female</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEffect;