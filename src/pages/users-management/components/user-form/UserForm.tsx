import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import './user-form.scss';
import { useTranslation } from 'react-i18next';
import { User } from '../../../../api';

export type UserFormProps = {
    initialValues: User;
    onSubmit: (
        values: User,
        formikHelpers: FormikHelpers<User>,
    ) => void | Promise<User | void>;
    isEdit?: boolean;
};

export const UserForm = ({
    initialValues,
    onSubmit,
    isEdit,
}: UserFormProps) => {
    const { t } = useTranslation();
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
                    label={t('pages.userManagement.form.fields.name')}
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
                    label={t('pages.userManagement.form.fields.age')}
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
                    label={t('pages.userManagement.form.fields.email')}
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
    );
};
