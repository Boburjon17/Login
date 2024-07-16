import React from "react";

const CreateArticleTextarea = ({label,state, setState,height="100px"}) => {
  return (
    <div>
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          placeholder={label}
          style={{height:height}}
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea2">{label}</label>
      </div>
    </div>
  );
};

export default CreateArticleTextarea;
