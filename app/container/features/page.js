import React from 'react';

const FeatureBoxes = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-wrap justify-center max-w-6xl">
        <FeatureBox title="MCQ" />
        <FeatureBox title="Chatbot" />
        <FeatureBox title="Video" />    
        <FeatureBox title="Notes" />
        <FeatureBox title="Chat" />
        <FeatureBox title="Posture" />
      </div>
    </div>
  );
};

const FeatureBox = ({ title }) => {
  return (
    <div className="w-56 h-56 bg-gray-200 m-4 flex justify-center items-center rounded-lg shadow-md">
      <p className="text-xl font-semibold text-gray-700">{title}</p>
    </div>
  );
};

export default FeatureBoxes;
