import React, { useState } from 'react';
import PersonalizedFeed from './components/PersonalizedFeed';
import Notifications from './components/Notifications';
import PostCreator from './components/PostCreator';
import Likebutton from './components/Likebutton';
import CommentSection from './components/CommentSection';
import ShareButton from './components/ShareButton';
import FollowingList from './components/FollowingList';
import ThemeSwitcher from './components/ThemeSwitcher';
import AuthComponent from './components/AuthComponent';
import { AuthProvider } from './context/AuthContext';
import { FeedProvider } from './context/FeedContext';
import { NotificationProvider } from './context/NotificationContext';
import { InteractionProvider } from './context/InteractionContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

import { FollowingProvider } from './context/FollowingContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <ThemeProvider>
        <FeedProvider>
          <NotificationProvider>
            <InteractionProvider>
              <FollowingProvider> {/* Wrap the components that need access to FollowingContext */}
                <div className="app">
                  <h1>SocialHub</h1>
                  <ThemeSwitcher />
                  {!isAuthenticated ? (
                    <AuthComponent onLogin={() => setIsAuthenticated(true)} />
                  ) : (
                    <>
                      <PostCreator />
                      <PersonalizedFeed />
                      <Notifications />
                      <FollowingList />
                    </>
                  )}
                </div>
              </FollowingProvider>
            </InteractionProvider>
          </NotificationProvider>
        </FeedProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;