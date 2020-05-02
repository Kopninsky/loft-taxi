import React from 'react'
import App from '../App'
import { AuthProvider } from '../../Context'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('render without errors', () => {
    render(<AuthProvider><App /></AuthProvider>)
  })
  it('match snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})