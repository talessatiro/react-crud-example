import { render, screen } from '@testing-library/react';
import { UserManagement } from '..';

describe('UserManagement Component', () => {
    it('shold print a title when component is loaded', () => {
        render(<UserManagement />);
        const title = screen.getByText('User Management');

        expect(title).toBeInTheDocument();
    });
});
