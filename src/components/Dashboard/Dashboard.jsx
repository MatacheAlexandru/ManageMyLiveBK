import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Main/Menu/Home/Homepage";
import AboutPage from "./Main/Menu/About/AboutPage";
import CalendarPage from "./Main/Menu/Calendar/CalendarPage";
import NotificationsPage from "./Main/Menu/Notifications/NotificationsPage";
import ProfilePage from "./Main/Menu/Profile/ProfilePage";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
