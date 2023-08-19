import { useState } from "react";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Department } from "../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import the arrow icon
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ComponentProps {
  department: Department;
}

const CheckboxTemplate = (props: ComponentProps) => {
  const { department } = props;
  const { sub_departments } = department;
  console.log(sub_departments);

  const [parentChecked, setParentChecked] = useState(false);
  const [childCheckboxesVisible, setChildCheckboxesVisible] = useState(true);
  const [childCheckboxes, setChildCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    // Add more child checkboxes here
  ]);

  const handleParentCheckboxChange = () => {
    const updatedChildCheckboxes = childCheckboxes.map((checkbox) => ({
      ...checkbox,
      checked: !parentChecked,
    }));

    setParentChecked(!parentChecked);
    setChildCheckboxes(updatedChildCheckboxes);
  };

  const toggleChildCheckboxesVisibility = () => {
    setChildCheckboxesVisible(!childCheckboxesVisible);
  };

  const handleChildCheckboxChange = (childId: number) => {
    const updatedChildCheckboxes = childCheckboxes.map((checkbox) => {
      if (checkbox.id === childId) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });

    const allChecked = updatedChildCheckboxes.every(
      (checkbox) => checkbox.checked
    );

    setParentChecked(allChecked);
    setChildCheckboxes(updatedChildCheckboxes);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton
          // sx={{ marginLeft: "20px" }}
          onClick={toggleChildCheckboxesVisibility}
        >
          {childCheckboxesVisible ? (
            <ExpandLessIcon color="primary" />
          ) : (
            <ExpandMoreIcon color="disabled" />
          )}
        </IconButton>
        <FormControlLabel
          control={
            <Checkbox
              checked={parentChecked}
              onChange={handleParentCheckboxChange}
            />
          }
          label={department.department}
        />
        <br />
      </div>

      {childCheckboxesVisible &&
        childCheckboxes.map((checkbox) => (
          <FormControlLabel
            sx={{ marginLeft: "75px" }}
            key={checkbox.id}
            control={
              <Checkbox
                checked={checkbox.checked}
                onChange={() => handleChildCheckboxChange(checkbox.id)}
              />
            }
            label={sub_departments[checkbox.id - 1]}
          />
        ))}
    </div>
  );
};

export default CheckboxTemplate;
