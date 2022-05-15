import { WeatherTitle } from '../../../components/Atoms/WeatherTitle';
import { render } from '@testing-library/react';

describe('<WeatherTitle />', () => {
    it('should render <WeatherTitle /> with "tempId" property filled', () => {
        const {getByText} = render(<WeatherTitle tempId={99} />)

        const el = getByText('ID 99')

        expect(el).toBeInTheDocument()
    })
})