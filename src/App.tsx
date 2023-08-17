import React from "react";

import Button from "@/components/Button/Button";
import Checkbox from "@/components/Forms/Checkbox/Checkbox";
import InputTextField from "@/components/Forms/InputTextField/InputTextField";
import SelectInput from "@/components/Forms/SelectInput/SelectInput";

const App: React.FC = () => {
  const test = [
    { label: "Hello World", value: "Welcome to learning React!" },
    { label: "Installation", value: "You can install React from npm." },
  ];

  return (
    <React.Fragment>
      <div className="m-5 p-5">
        <InputTextField
          label="test"
          type="text"
          icon="ri-user-line"
          helper="ciao"
        />
      </div>
      <div className="m-5 p-5">
        <InputTextField label="test2" type="text" helper="ciao" />
      </div>
      <div className="m-5 p-5">
        <SelectInput label="ciao" options={test} />
      </div>
      <div className="m-5 p-5">
        <Checkbox label="ciao" />
      </div>
      <div className="m-5 p-5">
        <Button label="cazzomene" icon="ri-user-line" primary />
      </div>
    </React.Fragment>
  );
};

export default App;
