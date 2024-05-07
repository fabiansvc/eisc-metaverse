import React from "react";
import "./edit-data-user.css";
import FormEditUser from "./FormEditUser/FormEditUser";
import FormEditTeacher from "./FormEditTeacher/FormEditTeacher";
import { useUser } from "../../../../../../context/UserContext";

/**
 * Component for editing user data.
 * @returns {JSX.Element} The JSX.Element for editing user data.
 */
const EditDataUser = () => {
  const { user } = useUser();
  const isTeacher = user.isTeacher;

  return (
    <div className="container-edit-data-user">
      {isTeacher ? <FormEditTeacher /> : <FormEditUser />}
    </div>
  );
};

export default EditDataUser;
