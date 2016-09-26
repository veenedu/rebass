
import React from 'react'
import { Container, GridGroup, Grid } from 'gridsys'
import {
  HeadingLink,
  Text,
  Pre
} from '../src'
import Rule from './Rule'

const contextExample =
`class App extends React.Component {
  getChildContext () {
    return {
      rebass: {
        colors: myCustomColors,
        fontSizes: [ 64, 48, 24, 18, 16, 14, 12],
        Button: {
          backgroundColor: 'tomato'
        }
      }
    }
  }

  render () {
    // ...
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
}`

const About = () => {
  return (
    <Container>
      <Grid span={3}>
        <HeadingLink
          href='#architecture'
          children='Architectural approach' />
        <Rule />
        <Text mb={2}>
          Rebass is built around a component architectural approach inspired by Dan Abramov’s
          {' '}
          <a href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963'>Presentational and Container Components</a>,
          where presentational components are the only ones that encapsulate styles and contain no application logic, and container components do not contain any styles or DOM markup and handle all the application logic.
        </Text>
        <Text>
          Rebass only contains presentational components, which means controlling things like progressive disclosure mechanisms or dropdown menus should be handled at a higher level in container components. Therefore, Rebass itself does not require any client-side JavaScript, is well suited to server-side rendering, and can fit into virtually any higher level application architecture.
        </Text>
      </Grid>
      <Grid span={3}>
        <HeadingLink
          href='#hoc'
          children='Higher Order Component' />
        <Rule />
        <Text>
          Each Rebass component is wrapped with the <code>withRebass</code> higher order component, which provides the theme object through context and handles several style shorthand props.
        </Text>
      </Grid>
      <Grid span={3}>
        <section id='themes'>
          <HeadingLink
            href='#themes'
            children='Themes' />
          <Rule />
          <Text>
            The look and feel of Rebass components can be completely customized by passing a React context object to child components.
          </Text>
          <Pre children={contextExample} />
        </section>
      </Grid>
    </Container>
  )
}

export default About
