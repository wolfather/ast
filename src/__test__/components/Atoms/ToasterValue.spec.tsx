import { ToastValue } from '../../../components/Atoms/ToastValue';
import { render } from '@testing-library/react';

describe('<ToasterValue />', () => {
    it('should render <ToasterValue /> property "status" filled', () => {
        const {getByText} = render(<ToastValue status='Open' />);

        const el = getByText('Open')
        expect(el).toBeInTheDocument();
    })
})