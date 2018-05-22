import './App.scss';
import React from 'react';

export default class App extends React.Component {
    render () {
        return <div className="main-app">
            <div className="header">
                <span>Повреждения</span>
                <span>Участник А</span>
            </div>
            <button className="next-step">Следующий шаг</button>
        </div>
    }
}
