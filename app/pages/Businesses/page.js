import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Business = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="text-center bg-gray-100 rounded-lg shadow-md p-8 mb-8">
        <FontAwesomeIcon icon={faPlane} className="h-10 w-10 text-black mb-4" />
        <h2 className="text-3xl font-bold text-black mb-4">Business Plans</h2>
        <p className="text-gray-700">Choose the perfect plan for your business needs.</p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-8">B2C</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h5 className="text-lg font-semibold mb-2">Student</h5>
              <p className="text-gray-700">
                Price: Rs 99/month <br />
                Logins: 2 <br />
                Services per login per day: 10
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h5 className="text-lg font-semibold mb-2">University</h5>
              <p className="text-gray-700">
                Price: Rs 2999/month <br />
                Logins: 50 <br />
                Services per login per day: 10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-8">B2B</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h5 className="text-lg font-semibold mb-2">API Packages</h5>
              <div className="mb-2">
                <h6 className="font-semibold">API Package 1:</h6>
                <p className="text-gray-700">
                  Requests per second: 5 <br />
                  Total calls: 5000 <br />
                  Price: Rs 10,000
                </p>
              </div>
              <div className="mb-2">
                <h6 className="font-semibold">API Package 2:</h6>
                <p className="text-gray-700">
                  Requests per second: 10 <br />
                  Total calls: 12000 <br />
                  Price: Rs 19,000
                </p>
              </div>
              <div>
                <h6 className="font-semibold">API Package 3:</h6>
                <p className="text-gray-700">
                  Requests per second: 15 <br />
                  Total calls: 30000 <br />
                  Price: Rs 40,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

