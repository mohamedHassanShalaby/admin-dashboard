import "./page.css";
import "../navbar/navbar.css";
import Navbar from "../navbar/Navbar";
import Titles from "../Title";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const phoneRegex = /^(010|011|012|015)\d{8}$/;
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
export default function Profile({ openMenu }) {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title="CREATE USER" desc="Create a New User Profile" />
        <Box>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      gridColumn: "span 2",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      gridColumn: "span 2",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="email"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="phone"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{
                      gridColumn: "span 4",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{
                      gridColumn: "span 4",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{
                      gridColumn: "span 4",
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                      "& .MuiFilledInput-underline:before": {
                        borderBottomColor: "gray",
                      },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#1d1d1e", // الخلفية
                        borderRadius: "10px",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#1958d6",
                      },
                      "& .MuiInputBase-input": {
                        color: "white", // لون الكتابة العادي
                      },
                      "& .MuiFilledInput-root.Mui-focused .MuiInputBase-input":
                        {
                          color: "#1958d6", // لون الكتابة وقت الـ focus
                        },
                    }}
                  />
                </Box>
                <Box display={"flex"} justifyContent={"end"} mt={"20px"}>

                  <Button type="submit" color="secondary" variant="contained">Create New User</Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </section>
    </div>
  );
}
