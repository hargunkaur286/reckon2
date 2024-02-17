import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComments, faVideo, faStickyNote, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const FeatureBoxes = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-wrap justify-center max-w-7xl">
        <FeatureBox title=" MCQ " link="/pages/mcq" icon={faBook} />
        <FeatureBox title="Chatbot" link="/pages/pdf" icon={faUser} />
        <FeatureBox title="Video" link="/video" icon={faVideo} />    
        <FeatureBox title="Notes" link="pages/notes" icon={faStickyNote} />
        <FeatureBox title="Chat" link="/pages/chatapp/chatlogin" icon={faComments} />
        <FeatureBox title="Posture" link="/container/UprightHelper" icon={faUserAlt} />
        <FeatureBox title="Time Management" link="/pages/Time" icon={faUserAlt} />
      </div>
    </div>
  );
};

const FeatureBox = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      
        <div className="w-56 h-56 bg-gray-200 m-4 flex justify-center items-center rounded-lg shadow-md cursor-pointer ">
          <FontAwesomeIcon icon={icon} className='w-10 h-10' />
          <p className="text-xl font-semibold text-gray-700">{title}</p>
        </div>
      
    </Link>
  );
};

export default FeatureBoxes;
