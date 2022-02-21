import { render, screen } from '@testing-library/react';
import { Home } from '..';

describe('Home Component', () => {
    it('should print an title when component is rendered', () => {
        render(<Home />);
        const title = screen.getByText('Home');

        expect(title).toBeInTheDocument();
    });

    it('should print an welcome description when component is rendered', () => {
        render(<Home />);
        const welcomeDescription = screen.getByText('Welcome to my APP');

        expect(welcomeDescription).toBeInTheDocument();
    });
});
