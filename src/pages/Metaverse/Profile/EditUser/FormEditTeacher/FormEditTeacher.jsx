import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../../../context/UserContext";
import { editUser } from "../../../../../db/user-collection";
import AtentionSchedule from "../../../../Register/FormTeacher/AtentionSchedule/AtentionSchedule";

const FormEditTeacher = () => {
  const nicknameInputRef = useRef(null);
  const biographyInputRef = useRef(null);
  const moreInfoInputRef = useRef(null);

  const { user, setUser } = useUser();

  const editDataTeacher = async (e, user) => {
    e.preventDefault();
    await editUser(user.email, user)
      .then(() => {
        alert("Datos actualizados correctamente");
      }).catch((error) => {
        alert("Error al actualizar los datos");
      });
  };

  const handleAddNewAtentionSchedule = () => {
    setUser({
      ...user,
      attention_schedule: [
        ...user.attention_schedule,
        {
          day: "",
          start: "",
          end: "",
        },
      ],
    });
  };

  useEffect(() => {
    nicknameInputRef.current.value = user.nickname;
    biographyInputRef.current.value = user.biography ? user.biography : "";
    moreInfoInputRef.current.value = user.more_info ? user.more_info : "";
  }, [nicknameInputRef, biographyInputRef, moreInfoInputRef]);

  return (
    <div className="container-form-edit-teacher">
      <div className="card-form-edit">
        <form className="form-edit" onSubmit={(e) => editDataTeacher(e, user)}>
          <section className="section-form">
            <div className="container-icon-user">
              <img className="icon-user" src={user.avatarPng} alt="user" />
            </div>
            <div>
              <label className="form-label" htmlFor="nicknameTeacher">
                Nickname
                <span className="required-value">*</span>
              </label>
              <input
                ref={nicknameInputRef}
                id="nicknameTeacher"
                name="nicknameTeacher"
                type="text"
                className="form-input"
                required={true}
                onChange={(e) =>
                  setUser({
                    ...user,
                    nickname: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="form-label" htmlFor="biography">
                Biografía
              </label>
              <input
                ref={biographyInputRef}
                id="biography"
                name="biography"
                type="text"
                className="form-input"
                placeholder="Describe brevemente quién eres"
                onChange={(e) =>
                  setUser({
                    ...user,
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
                ref={moreInfoInputRef}
                id="moreInfoTeacher"
                name="moreInfoTeacher"
                type="text"
                className="form-input"
                placeholder="Ingresa más información de interés"
                onChange={(e) =>
                  setUser({
                    ...user,
                    more_info: e.target.value,
                  })
                }
              />
            </div>
          </section>
          <div className="atention-schedule-container">
            <div className="atention-schedule">
              <span className="form-label">Horarios de atención:</span>
              {user.attention_schedule.map((atention, index) => {
                return (
                  <AtentionSchedule
                    key={index}
                    valuesTeacher={user}
                    count={index}
                  />
                );
              })}
            </div>
            <button
              type="button"
              role="button"
              className="button-add-new-atention-schedule"
              aria-label="Agregar horario de atención"
              title="Agregar un nuevo horario de atención"
              onClick={handleAddNewAtentionSchedule}
            >
              +
            </button>
          </div>
          <button type="submit" className="button-edit">
            Editar datos
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEditTeacher;
