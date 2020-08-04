import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import FriendsContainer from './components/FriendsPage/FriendsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />  
      <NavContainer />
      <div className='app-wrapper-content'> 
        <Route path="/profile" render={ () => <ProfilePage />} />
        <Route path="/dialogs" render={ () => <DialogsContainer /> } />
        <Route path="/news" /> 
        <Route path="/music" />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/friends" render={ () => <FriendsContainer />} />


      </div>
    </div>
    
  );
}

export default App;


