import { render } from '@testing-library/react';
import { Toast } from '../../components/Toast';

describe('<Toast />', () => {
    it('should render <Toast /> with "tempValue" property filled', () => {
        const {getByText} = render(<Toast status='Closed' />)

        const toasterValue = getByText('Closed')

        expect(toasterValue).toBeInTheDocument();
    })
})