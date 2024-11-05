import Image from 'next/image'
import React from 'react'

function ConfirmationMessageComponent({heading, subheading}) {
  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-[20px] px-10 py-28 space-y-9 text-center w-[470px]'>
        <Image src={"/confirmationIcon.svg"} alt="confirmationIcon" width={100} height={100} />
        <div className='space-y-4'>
        <p className='text-lg text-neutral-500'>{heading}</p>
        <p className='text-lg text-brand'>{subheading}</p>
        </div>
    </div>
  )
}

export default ConfirmationMessageComponent