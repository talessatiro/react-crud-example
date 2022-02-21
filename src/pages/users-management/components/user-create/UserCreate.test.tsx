import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserCreate } from '..';
import { renderWithContext } from '../../../../test/utils';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => ({
        navigate: mockedNavigate,
    }),
}));

describe('UserCreate Component', () => {
    it('should display a title when component is rendered', () => {
        renderWithContext(<UserCreate />);

        const title = screen.getByText('Create User');
        expect(title).toBeInTheDocument();
    });

    it('should not create a new user and navigate to user list if form is not filled and submit button is clicked', async () => {
        renderWithContext(<UserCreate />);

        const submitButton = screen.getByText('Criar');
        expect(submitButton).toBeInTheDocument();
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(mockedNavigate).not.toHaveBeenCalled();
        });
    });
});
