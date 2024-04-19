import UserAccessButton from '../components/UserAccessButton';
import React from 'react';

const Main = () => {
  return (
    <>
    <div >
      <UserAccessButton type="register" />
      <UserAccessButton type="login" />
    </div>
    </>
  );
};

export default Main;
