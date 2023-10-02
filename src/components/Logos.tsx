import React from 'react';

interface LogosProps {
  imgsrc: string;
  width: string;
  height: string;
  bordercol: string;
  bgcolor: string;
}
const Logos: React.FC<LogosProps>  = ({imgsrc,width,height,bordercol, bgcolor}) => {
  return (
    <div className='flex justify-center items-center'>
    <div className={`flex items-center justify-center rounded-mini ${bgcolor} box-border ${width} ${height} border-[1px] border-solid ${bordercol}`}>
    <img
      className={` ${width} ${height} object-cover`}
      alt=""
      src={`${imgsrc}`}
    />
  </div>
    </div>

  )
}

export default Logos