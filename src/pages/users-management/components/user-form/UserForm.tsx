import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import {
    ErrorMessage,
    Field,
    Form,
    Formik,
    FormikHelpers,
    useFormik,
} from 'formik';
import './user-form.scss';

export type UserFormProps = {
    initialValues: any;
    onSubmit: (
        values: any,
        formikHelpers: FormikHelpers<any>,
    ) => void | Promise<any>;
    isEdit?: boolean;
};

export const UserForm = ({
    initialValues,
    onSubmit,
    isEdit,
}: UserFormProps) => {
    const formSchema = Yup.object({
        name: Yup.string().required(),
        age: Yup.number().min(18).max(100).required(),
        email: Yup.string().email().required(),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit,
    });

    return (
        <Box>
            <form className="user-form" onSubmit={formik.handleSubmit}>
                <TextField
                    className="form-input"
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values?.name}
                    onChange={formik.handleChange}
                    error={formik.touched?.name && !!formik.errors?.name}
                    helperText={formik.touched?.name && formik.errors?.name}
                />
                <TextField
                    className="form-input"
                    fullWidth
                    id="age"
                    name="age"
                    label="Age"
                    value={formik.values?.age}
                    onChange={formik.handleChange}
                    error={formik.touched?.age && !!formik.errors?.age}
                    helperText={formik.touched?.age && formik.errors?.age}
                />
                <TextField
                    className="form-input"
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    error={formik.touched?.email && !!formik.errors?.email}
                    helperText={formik.touched?.email && formik.errors?.email}
                />
                <Button
                    className="submit-button"
                    fullWidth
                    type="submit"
                    variant="contained"
                >
                    {isEdit ? 'Editar' : 'Criar'}
                </Button>
            </form>
        </Box>
        // <Formik
        //     validationSchema={formSchema}
        //     initialValues={initialValues}
        //     onSubmit={onSubmit}
        // >
        //     <Form className="user-form">
        //         <label htmlFor="name">Name</label>
        //         <Field id="name" name="name" type="text" />
        //         <ErrorMessage className="error" name="name" component="div" />
        //         <label htmlFor="age">Age</label>
        //         <Field id="age" name="age" type="number" />
        //         <ErrorMessage className="error" name="age" component="div" />
        //         <label htmlFor="email">Email</label>
        //         <Field id="email" name="email" type="text" />
        //         <ErrorMessage className="error" name="email" component="div" />
        // <Button
        //     className="submit-button"
        //     type="submit"
        //     variant="contained"
        // >
        //     {isEdit ? 'Editar' : 'Criar'}
        // </Button>
        //     </Form>
        // </Formik>
    );
};
