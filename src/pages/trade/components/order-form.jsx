import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  const { app_store } = useStores();

  React.useEffect(() => {
    //rerender UI when store.isloggedin change
  }, [app_store.is_loggedin]);

  return (
    <div>
      {app_store.is_loggedin === true ? (
        <h1>Form (enabled)</h1>
      ) : (
        <h1>Form (disabled)</h1>
      )}
    </div>
  );
};

export default observer(OrderForm);
