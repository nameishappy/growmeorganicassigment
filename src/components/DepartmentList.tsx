// import { Box } from "@mui/material";
import CheckboxTemplate from "./CheckboxTemplate";
import { Department } from "../types";

const DepartmentList = () => {
  const departmentsData: Department[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];
  return (
    <div>
      {departmentsData.map((department) => {
        return <CheckboxTemplate department={department} />;
      })}
    </div>
  );
};

export default DepartmentList;
