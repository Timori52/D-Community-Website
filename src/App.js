import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LandingPage from "./Pages/LandingPage";
import AuthenticationPage from "./Pages/AuthenticationPage";
import NotFoundPage from "./Pages/NotFoundPage";

import AHomePage from "./Pages/AdminPages/AHomePage";

import CHomePage from "./Pages/ClientPages/CHomepage";
import CProfilePage from "./Pages/ClientPages/CProfilePage";

import VHomePage from "./Pages/VendorPages/VHomepage";
import VProfilePage from "./Pages/VendorPages/VProfilePage";

import DeveloperPage from "./Pages/DeveloperPages/DeveloperPage";
import DHomePage from "./Pages/DeveloperPages/DHomePage";
import DProfilePage from "./Pages/DeveloperPages/DProfilePage";
import DMessagesPage from "./Pages/DeveloperPages/DMessagesPage";
import DCommunityPage from "./Pages/DeveloperPages/DCommunityPage";
import DSettingsPage from "./Pages/DeveloperPages/DSettingsPages/DSettingsPage";
import EditProfilePage from "./Pages/DeveloperPages/DSettingsPages/EditProfilePage";
import LanguagePage from "./Pages/DeveloperPages/DSettingsPages/LanguagePage";
import BlockingPage from "./Pages/DeveloperPages/DSettingsPages/BlockingPage";
import NotificationsPage from "./Pages/DeveloperPages/DSettingsPages/NotificationsPage";
import PasswordSecurityPage from "./Pages/DeveloperPages/DSettingsPages/PasswordSecurityPage";
import ActivityLogPage from "./Pages/DeveloperPages/DSettingsPages/ActivityLogPage";
import ViewingSharingPage from "./Pages/DeveloperPages/DSettingsPages/ViewingSharingPage";
import DNotificationPage from "./Pages/DeveloperPages/DNotificationPage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const { userIsDeveloper, userIsClient, userIsVendor, userIsAdmin } =
    useSelector((state) => state.userType);

  return (
    <>
      <main>
        <Routes>
          {/* landing page routes */}
          <Route path="/" element={<LandingPage />}></Route>

          {/* admin routes */}
          <Route path="admin">
            {!isLoggedIn && (
              <Route
                path="auth"
                element={<AuthenticationPage forPage="admin" />}
              />
            )}
            {userIsAdmin && <Route path="home" element={<AHomePage />} />}
          </Route>

          {/* developer routes */}
          <Route path="developer" element={<DeveloperPage />}>
            {!isLoggedIn && (
              <Route
                path="auth"
                element={<AuthenticationPage forPage="developer" />}
              />
            )}
            {userIsDeveloper && (
              <>
                <Route path="home" element={<DHomePage />} />
                <Route path="profile" element={<DProfilePage />} />
                <Route path="messages" element={<DMessagesPage />} />
                <Route path="notifications" element={<DNotificationPage />} />
                <Route path="community" element={<DCommunityPage />} />
                <Route path="settings" element={<DSettingsPage />}>
                  <Route path="editProfile" element={<EditProfilePage />} />
                  <Route path="language" element={<LanguagePage />} />
                  <Route path="blocking" element={<BlockingPage />} />
                  <Route path="notifications" element={<NotificationsPage />} />
                  <Route
                    path="passwordSecurity"
                    element={<PasswordSecurityPage />}
                  />
                  <Route path="activityLog" element={<ActivityLogPage />} />
                  <Route
                    path="viewingSharing"
                    element={<ViewingSharingPage />}
                  />
                </Route>
              </>
            )}
          </Route>

          {/* client routes */}
          <Route path="client">
            {!isLoggedIn && (
              <Route
                path="auth"
                element={<AuthenticationPage forPage="client" />}
              />
            )}
            {userIsClient && (
              <>
                <Route path="home" element={<CHomePage />} />
                <Route path="profile" element={<CProfilePage />} />
              </>
            )}
          </Route>

          {/* vendor routes */}
          <Route path="vendor">
            {!isLoggedIn && (
              <Route
                path="auth"
                element={<AuthenticationPage forPage="vendor" />}
              />
            )}
            {userIsVendor && (
              <>
                <Route path="home" element={<VHomePage />} />
                <Route path="profile" element={<VProfilePage />} />
              </>
            )}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
