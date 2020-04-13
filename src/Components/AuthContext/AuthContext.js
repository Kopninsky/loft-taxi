import React from 'react'

const AuthContext = React.createContext({ background: 'green' })

const InterComponent = ({ children }) => <>{ children }</>

const ThemedButton = () => {
  return<>
    <AuthContext.Consumer>
      {({ background }) => <button style={{ background }}>Button</button>}
    </AuthContext.Consumer>
  </>
}

const Root = () => {
  return <>
    <AuthContext.Provider value={{ background: 'red' }}>
      <InterComponent>
        <ThemedButton />
      </InterComponent>
    </AuthContext.Provider>
    <ThemedButton />
  </>
}

export default Root