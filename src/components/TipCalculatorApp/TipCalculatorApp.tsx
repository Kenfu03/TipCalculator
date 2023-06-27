import "./TipCalculatorApp.css";
import { logo, dollar, person } from "../../assets";
import { Dispatch, SetStateAction, useState } from "react";

interface inputsProps {
  value: number | undefined;
  setValue: any;
  img?: string;
  acceptDot?: boolean;
  maxWidth?: string;
  placeHolder?: string;
}

const SpecialInput = (props: inputsProps) => {
  return (
    <div className="specialInput">
      <input
        type="text"
        placeholder={props.placeHolder ? props.placeHolder : "0"}
        value={props.value}
        onChange={(e) => {
          props.setValue(
            Number(e.target.value = props.acceptDot
              ? e.target.value.replace(/[^0-9.]/g, "")
              : e.target.value.replace(/\D/g, ""))
          );
        }}
        style={
          props.maxWidth ? { maxWidth: props.maxWidth, fontSize: "16px" } : {}
        }
      />
      {props.img && <img src={props.img} alt="simbol" />}
    </div>
  );
};

const TipCalculatorApp = () => {
  const buttonsValues: string[] = ["5%", "10%", "15%", "25%", "50%"];
  const [bill, setBill] = useState<number>();
  const [persons, setPersons] = useState<number>();
  const [porcentage, setPorcentage] = useState<number>();

  const resetAll = () => {
    setBill(0);
    setPersons(0);
    setPorcentage(0);
  };

  return (
    <div className="tipCalculator-container">
      <img src={logo} alt="logo" className="Applogo" />
      <div className="tipApp-container">
        <form>
          <h1>Bill</h1>
          <SpecialInput
            value={bill}
            setValue={setBill}
            img={dollar}
            acceptDot={true}
          />
          <h1>Select Tip %</h1>
          <div className="optionsTip-container">
            {buttonsValues.map((item: string, i: number) => (
              <button
                className="defaultButton"
                key={i}
                onClick={() =>
                  setPorcentage(Number(item.slice(0, item.length - 1)))
                }
              >
                {item}
              </button>
            ))}
            <SpecialInput
              value={porcentage}
              setValue={setPorcentage}
              maxWidth="62px"
              placeHolder="custom"
            />
          </div>
          <h1>Number of People</h1>
          <SpecialInput value={persons} setValue={setPersons} img={person} />
        </form>
        <div className="result">
          <h2>
            Tip Amount <h3>/ person</h3>
          </h2>
          <h1>
            $
            {bill && persons && porcentage
              ? (bill * (porcentage / 100)) / persons
              : 0.0}
          </h1>
          <h2>
            Total <h3>/ tip</h3>
          </h2>
          <h1>${bill && porcentage ? bill * (porcentage / 100) : 0.0}</h1>
          {bill && <button onClick={() => resetAll()}>RESET</button>}
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
