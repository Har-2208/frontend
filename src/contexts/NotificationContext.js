import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'opportunity',
      title: 'New Job Match',
      message: 'Software Engineer position matches your profile',
      read: false,
      timestamp: new Date().toISOString(),
    },
  ]);

  const addNotification = (notification) => {
    setNotifications(prev => [
      {
        id: Date.now().toString(),
        read: false,
        timestamp: new Date().toISOString(),
        ...notification,
      },
      ...prev,
    ]);
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const value = {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    unreadCount,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
