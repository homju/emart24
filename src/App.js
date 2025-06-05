import React from 'react';
import './App.css';
import Event from './components/emart_event';
import Guide from './components/emart_guide';
import Introducing from './components/emart_Introducing';
import Service from './components/emart_service';
import Sop from './components/emart_sp';
import Store from './components/emart_store';
import Home from './components/home';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrap'>
      <header>
        <h1><Link to="/">로고</Link></h1>
        <nav>
          <ul>
            <li><Link to="/components/emart_Introducing">이마트24 소개</Link></li>
            <li><Link to="/components/emart_sp">상품</Link></li>
            <li><Link to="/components/emart_store">매장찾기</Link></li>
            <li><Link to="/components/emart_service">서비스</Link></li>
            <li><Link to="/components/emart_event">이벤트</Link></li>
            <li><Link to="/components/emart_guide">창업안내</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/components/emart_Introducing" component={Introducing} />
        <Route path="/components/emart_sp" component={Sop} />
        <Route path="/components/emart_store" component={Store} />
        <Route path="/components/emart_service" component={Service} />
        <Route path="/components/emart_event" component={Event} />
        <Route path="/components/emart_guide" component={Guide} />
      </div>
    </div>
  );
}

export default App;
