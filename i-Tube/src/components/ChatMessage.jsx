import React from 'react'

export const ChatMessage = ({name,message}) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img
                className="h-9"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
                alt="user-icon"
            />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}
