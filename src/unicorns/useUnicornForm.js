import { useFormik } from "formik";
import * as Yup from "yup";

export const useUnicornForm = ({ initialValues, onSubmit }) => {
  return useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      age: Yup.number()
        .required("La edad es requerida")
        .min(0, "Debe ser positiva"),
      color: Yup.string().required("El color es requerido"),
    }),
    onSubmit,
    enableReinitialize: true,
  });
};
