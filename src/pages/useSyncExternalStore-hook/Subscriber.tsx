import React, { useSyncExternalStore } from "react";
import { timeStore } from "./store";

const Subscriber = () => {
  const time = useSyncExternalStore(timeStore.subscribe, timeStore.getSnapshot);

  return <h2>Clock: {time}</h2>;
};

export default Subscriber;
