import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import desktopImage from '../../../assets/images/desktop.png';
import mobileImage from '../../../assets/images/mobile.png';

export default function QuizLayout() {
	return (
		<>
      <div className="flex flex-col w-full bg-blue-500 py-8 text-center">
        <p className="text-2xl md:text-6xl mb-4">Don’t know where to start?</p>
        <p className="md:text-4xl">
          No worries! Take this quiz to get your personal suggestion!
        </p>
      </div>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded mt-8">
        <form>
          <div className="mb-4">
            <p className="block text-gray-700 font-bold mb-2">Choose which platform you use more often:</p>
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <input type="radio" name="platform" value="desktop" className="mb-2" />
                <img src={desktopImage} alt="Desktop" className="w-24 h-24 mb-2" />
                <p>Desktop</p>
              </div>
              <div className="flex flex-col items-center">
                <input type="radio" name="platform" value="mobile" className="mb-2" />
                <img src={mobileImage} alt="Mobile" className="w-24 h-24 mb-2" />
                <p>Mobile</p>
              </div>
            </div>
          </div>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            className="w-full py-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
          >
            Start
          </Button>
        </form>
      </div>
    </>
	)
}