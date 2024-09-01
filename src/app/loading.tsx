
"use client"

import { RotatingLines } from 'react-loader-spinner'
export default function Loading() {
    return <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md grid place-items-center z-50'>
        <RotatingLines
            visible={true}
            width="96"
            strokeWidth="5"
            strokeColor='black'
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
        />
    </div>
}