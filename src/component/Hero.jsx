import React from 'react';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from "@heroicons/react/solid";
import bgImg from '../assets/cyber-bg.png';


const Hero = () => {
  return (
    <div className='w-ful h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col md:items-start justify-center w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing and Production</p>
                <h1 className='font-bold py-3 text-5xl md:text-7xl'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='px-8 py-3 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="background image" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[0] left-0 mx-auto md:left-[] transform md:translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/>Icon. Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/>Icon. Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/>Icon. API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;