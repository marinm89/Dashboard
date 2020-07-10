import React, { useState } from 'react';
import './App.css';
import TotalBox from './components/TotalBox';
import OverviewBox from './components/OverviewBox';
import facebookLogo from './images/icon-facebook.svg';
import twitterLogo from './images/icon-twitter.svg';
import instagramLogo from './images/icon-instagram.svg';
import ytLogo from './images/icon-youtube.svg';
import Header from './components/Header';

function App() {
  //Main card datas
  const [data, setData] = useState([
    {
      icon: facebookLogo,
      name: '@nathanf',
      number: '1987',
      description: 'FOLLOWERS',
      today: '▲12 Today',
    },
    {
      icon: twitterLogo,
      name: '@nathanf',
      number: '1044',
      description: 'FOLLOWERS',
      today: '▲99 Today',
    },
    {
      icon: instagramLogo,
      name: '@realnathanf',
      number: '11K',
      description: 'FOLLOWERS',
      today: '▲1099 Today',
    },
    {
      icon: ytLogo,
      name: 'Nathan F.',
      number: '8239',
      description: 'SUBSCRIBERS',
      today: '▼144 Today',
    },
  ]);

  //Small card datas

  const [card, setCard] = useState([
    {
      icon: facebookLogo,
      name: 'Page Views',
      totalNumber: '87',
      percent: '▲3%',
    },
    {
      icon: facebookLogo,
      name: 'Likes',
      totalNumber: '52',
      percent: '▼2%',
    },
    {
      icon: instagramLogo,
      name: 'Likes',
      totalNumber: '5462',
      percent: '▲2257%',
    },
    {
      icon: instagramLogo,
      name: 'Profile Views',
      totalNumber: '52K',
      percent: '▲1375%',
    },
    {
      icon: twitterLogo,
      name: 'Retweets',
      totalNumber: '117',
      percent: '▲303%',
    },
    {
      icon: twitterLogo,
      name: 'Likes',
      totalNumber: '507',
      percent: '▲553%',
    },
    {
      icon: ytLogo,
      name: 'Likes',
      totalNumber: '107',
      percent: '▼19%',
    },
    {
      icon: ytLogo,
      name: 'Total Views',
      totalNumber: '1407',
      percent: '▼12%',
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="main-card">
        {data.map((datas) => (
          <>
            <TotalBox
              icon={datas.icon}
              name={datas.name}
              number={datas.number}
              description={datas.description}
              today={datas.today}
            />
          </>
        ))}
      </div>
      <h1>Overview - Today</h1>
      <div className="small-box">
        {card.map((cards) => (
          <>
            <OverviewBox
              name={cards.name}
              icon={cards.icon}
              totalNumber={cards.totalNumber}
              percent={cards.percent}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
