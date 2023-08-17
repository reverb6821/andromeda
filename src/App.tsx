import React from "react";

import InputTextField from "@/components/Forms/InputTextField/InputTextField";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="m-10 p-5">
        <InputTextField
          label="test"
          type="text"
          icon="ri-user-line"
          helper="ciao"
        />
      </div>
    </React.Fragment>
  );
};

export default App;
