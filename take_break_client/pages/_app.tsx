import 'styles/app.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import configureStore from '../src/store';

const store = configureStore();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
