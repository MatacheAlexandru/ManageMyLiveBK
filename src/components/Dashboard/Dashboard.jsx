import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Main/Pages/Home/Homepage";
import AboutPage from "./Main/Pages/About/AboutPage";
import CalendarPage from "./Main/Pages/Calendar/CalendarPage";
import NotificationsPage from "./Main/Pages/Notifications/NotificationsPage";
import ProfilePage from "./Main/Pages/Profile/ProfilePage";

const Dashboard = () => {
  return (
    <div className="z-1">
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
