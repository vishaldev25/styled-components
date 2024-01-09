import './App.css'

import {Heading, CustomButton} from './styledComponents'

const App = () => (
  <>
    <h1 className="heading">Hello</h1>
    <Heading>Hi Vishal!</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)

export default App
