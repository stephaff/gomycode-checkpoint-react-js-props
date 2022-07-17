import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import photo from './photo.jpeg';

function App() {
  return (
    <React.Fragment>
      <Profile fullName="Affali Aman Stephane Dimitri" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar. Sit amet est placerat in egestas erat imperdiet sed euismod. Vestibulum lorem sed risus ultricies tristique nulla. Velit dignissim sodales ut eu. Nisl." profession="Teacher"><img src={photo} alt="Photo de profil"/></Profile>
    </React.Fragment>
  );
}

export default App;
