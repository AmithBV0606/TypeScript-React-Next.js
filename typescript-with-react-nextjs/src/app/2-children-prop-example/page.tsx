import Child from "@/components/ChildrenParent/Child";
import Parent from "@/components/ChildrenParent/Parent";
import SecondChild from "@/components/ChildrenParent/SecondChild";
import React from "react";

const page = () => {
  return (
    <div>
      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};

export default page;
