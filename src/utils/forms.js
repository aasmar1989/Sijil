import React from "react";

export const useError = formik => name =>
  formik.errors[name] && formik.touched[name] ? (
    <div className="parsley-errors-list filled">
      <p className="parsley-required">{formik.errors[name]}</p>
    </div>
  ) : null;

export const useFieldTouched = formik => ({ target: { name } }) =>
  formik.setFieldTouched(name, true);
