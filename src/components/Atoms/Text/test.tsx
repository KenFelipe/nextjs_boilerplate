import { render, screen } from '../../../utils/testUtils'
import { Text } from './'

it('render label correctly', () => {
  const { container } = render(<Text label="react-testing-library" />)

  expect(screen.getByText(/react-testing-library/)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
