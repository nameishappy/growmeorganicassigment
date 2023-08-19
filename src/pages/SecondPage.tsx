import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabledata } from "../components/Tabledata";
import { Container } from "@mui/material";
import DepartmentList from "../components/DepartmentList";

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  useEffect(() => {
    if (!userData.name || !userData.phoneNumber || !userData.email) {
      alert("first provide the details");
      navigate("/");
    }
  }, [navigate, userData]);

  return (
    <Container>
      <Tabledata />
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
