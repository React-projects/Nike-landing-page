import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none text-white rounded-full bg-coral-red border border-coral-red'>{label}
   {
    iconURL && (
      <img src={iconURL} alt="arrow right"  className='ml-2 rounded-full w-5 h-5' />
    )
   }

    </button>

  )
}

export default Button
