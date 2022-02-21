import { getByText, render, screen, waitFor } from '@testing-library/react';
import { UserForm } from '..';
import { User } from '../../../../api';
import userEvent from '@testing-library/user-event';

describe('UserForm Component', () => {
    const user: User = {
        id: 1,
        name: 'Tales Satiro',
        age: 31,
        email: 'talessatiro@gmail.com',
    };

    it('should render Criar button when edit mode is false', () => {
        render(<UserForm initialValues={user} onSubmit={() => {}} />);

        const submitButton = screen.getByRole('button', { name: 'Criar' });
        expect(submitButton).toBeInTheDocument();
    });

    it('should render Editar button when edit mode is false', () => {
        render(
            <UserForm initialValues={user} onSubmit={() => {}} isEdit={true} />,
        );

        const submitButton = screen.getByRole('button', { name: 'Editar' });
        expect(submitButton).toBeInTheDocument();
    });

    it('should set initial values on form when component is rendered', () => {
        render(<UserForm initialValues={user} onSubmit={() => {}} />);

        const nameInput = screen.getByLabelText('Name');
        expect(nameInput).toBeInTheDocument();
        expect(nameInput).toHaveValue(user.name);
        const ageInput = screen.getByLabelText('Age');
        expect(ageInput).toBeInTheDocument();
        expect(ageInput).toHaveValue(String(user.age));
        const emailInput = screen.getByLabelText('Email');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveValue(user.email);
    });

    it('should execute the submit function when submit button is clicked', async () => {
        let executed = false;
        const submitFunction = () => {
            // Simulating an async call
            setTimeout(() => {
                executed = true;
            }, 500);
        };

        render(<UserForm initialValues={user} onSubmit={submitFunction} />);

        const submitButton = screen.getByRole('button', { name: 'Criar' });
        expect(submitButton).toBeInTheDocument();

        expect(executed).toBeFalsy();
        userEvent.click(submitButton);
        await waitFor(() => {
            expect(executed).toBeTruthy();
        });
    });

    it('should display an error message when a required input is cleaned', async () => {
        render(<UserForm initialValues={user} onSubmit={() => {}} />);

        const nameInput = screen.getByLabelText('Name');
        userEvent.clear(nameInput);
        const ageInput = screen.getByLabelText('Age');
        userEvent.clear(ageInput);
        const emailInput = screen.getByLabelText('Email');
        userEvent.clear(emailInput);

        const submitButton = screen.getByRole('button', { name: 'Criar' });
        expect(submitButton).toBeInTheDocument();
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(
                screen.getByText('name is a required field'),
            ).toBeInTheDocument();
            expect(
                screen.getByText('age is a required field'),
            ).toBeInTheDocument();
            expect(
                screen.getByText('email is a required field'),
            ).toBeInTheDocument();
        });
    });
});
