import "./form-edit-teacher.css";
import { useState } from "react";
import { useUser } from "../../../../../context/userContext";
import { editUser } from "../../../../../db/UsersCollection";
import TitleEISC from "../../../../Components/TitleEISC/TitleEISC";

const FormEditTeacher = () => {
  const { user } = useUser();
  const [valuesTeacher, setValuesTeacher] = useState({
    ...user,
    nickname: user.nickname,
    biography: user.biography,
    moreInfo: user.moreInfo,
    attentionSchedule: user.atentionSchedule
  });

  const editDataTeacher = async (e, valuesTeacher) => {
    e.preventDefault();
    const result = await editUser(user.email, valuesTeacher);
    result.success
      ? alert("Datos editados")
      : alert("Error al guardar los datos");
  };

  return (
    <div className="container-form-edit-teacher">
      <form
        className="form-register"
        onSubmit={(e) => editDataTeacher(e, valuesTeacher)}
      >
        <TitleEISC subtitle={"Datos de Docente"} />
        <section className="section-form-register">
          <div>
            <label className="form-label" htmlFor="nicknameTeacher">
              Nickname
              <span className="required-value">*</span>
            </label>
            <input
              id="nicknameTeacher"
              name="nicknameTeacher"
              type="text"
              className="form-input"
              value={user.data.nickname}
              required={true}
              onChange={(e) =>
                setValuesTeacher({ ...valuesTeacher, nickname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="form-label" htmlFor="biography">
              Biografía
            </label>
            <input
              id="biography"
              name="biography"
              type="text"
              className="form-input"
              value={user.data.biography}
              onChange={(e) =>
                setValuesTeacher({
                  ...valuesTeacher,
                  biography: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="form-label" htmlFor="moreInfoTeacher">
              Más información
            </label>
            <input
              id="moreInfoTeacher"
              name="moreInfoTeacher"
              type="text"
              className="form-input"
              value={user.data.more_info}
              onChange={(e) =>
                setValuesTeacher({
                  ...valuesTeacher,
                  more_info: e.target.value,
                })
              }
            />
          </div>
        </section>
        <button type="submit" className="button-submit">
          Guardar datos
        </button>
      </form>
    </div>
  );
};

export default FormEditTeacher;
