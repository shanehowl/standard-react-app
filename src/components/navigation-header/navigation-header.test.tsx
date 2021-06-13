import React from 'react'
import { render } from '@testing-library/react'
import NavigationHeader from './index'

test('Render component with title prop', () => {
  render(<NavigationHeader title="R Base" />)
})
