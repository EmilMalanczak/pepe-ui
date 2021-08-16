import { Button } from './Button'

export default {
  title: 'Example/butv2',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = ({ children }) => <Button>{children}</Button>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button'
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Button 2'
}
