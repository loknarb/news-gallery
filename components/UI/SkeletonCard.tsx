import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <>
      <div className='border border-slate-400  shadow-md shadow-slate-600 bg-slate-200 rounded-md p-2 dark:bg-[#1A1E1F] dark:shadow-slate-700  dark:border-[#464d50] '>
        <article className='animate-pulse w-full h-80 flex flex-col justify-between'>
          <div className='flex justify-between align-middle mt-1'>
            <div className='mx-4 relative h-6 w-6  rounded-full overflow-hidden bg-slate-400 dark:bg-[#1F2937]'></div>
          </div>
          <div className='h-6 mx-4 rounded-lg bg-slate-400  dark:bg-[#1F2937] mt-1 '></div>
          <div className='h-6 mx-4 rounded-lg bg-slate-400 dark:bg-[#1F2937] w-44 mt-1'></div>
          <div className='h-6'></div>
          <div className='h-4 w-12 bg-slate-400 dark:bg-[#1F2937] mb-1 ml-3 rounded-lg'></div>
          <div className='h-40 rounded-lg dark:bg-[#1F2937] mb-1 bg-slate-400'></div>
          <div className='h-8 flex flex-row justify-around justify-self-end mt-2 rounded-lg  bg-slate-400 dark:bg-[#1F2937]'></div>
        </article>
      </div>
    </>
  );
};

export default SkeletonCard;
