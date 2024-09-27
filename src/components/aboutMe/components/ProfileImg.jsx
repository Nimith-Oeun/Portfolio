import React from 'react';
import Profile from '../../../assets/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
      <img src={Profile} alt='Profile Image' className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[303px] w-[346px] max-md:mt-10 object-cover" />
    </div>
  );
};

export default ProfileImage;