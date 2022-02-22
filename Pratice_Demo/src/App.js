import './App.css';
import Tabbar from './components/Tabbar'
import { HashRouter } from 'react-router-dom'
import { Component } from 'react'
import MyRouter from './router/router';
import store from './redux/store';

export default class App extends Component {
  state = {
    isShow: true
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        isShow: store.getState().show
      }, () => {
        console.log(this.state.isShow);
      })
    })
  }

  render() {
    return (
      <HashRouter className="App" >
        {this.state.isShow ? <Tabbar></Tabbar> : null}
        <MyRouter />
      </HashRouter>
    );
  }
}

