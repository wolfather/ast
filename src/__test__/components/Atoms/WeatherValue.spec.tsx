import { WeatherValue } from '../../../components/Atoms/WeatherValue';
import { render } from '@testing-library/react';

describe('<WeatherValue />', () => {
    it('should render <WeatherValue /> with "tempValue" property filled', () => {
        const {getByText} = render(<WeatherValue tempValue='77' />)

        const el = getByText('Temp: 77 C')

        expect(el).toBeInTheDocument()
    })
})