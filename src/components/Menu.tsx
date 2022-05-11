import React, { useState } from 'react';
import { dish } from '../types/types';
const Menu = (props: { items: dish[] }) => {
    return (
        <div className='container gap-x-4 gap-y-4 grid-cols-1 grid lg:grid-cols-2 mx-auto'>
            {props.items.map(item => {
                return (
                    <MenuItem key={item.id} {...item} />
                )

            })}
        </div>
    )
}


function MenuItem({ price, title, img, desc }: dish) {

    return (
        <div className="flex flex-col md:flex-row gap-4 w-[90%] md:w-[90%]  lg:mx-0 mx-auto max-w-[900px]">
            <img src={img} alt="" className='w-full md:w-[45%] lg:w-[45%]  h-auto aspect-video object-cover rounded-md border-4 border-solid border-yellow-600' />
            <div className="w-full space-y-2">
                <div className="flex justify-between border-b-[1px] pb-2 border-dashed border-black">
                    <h1 className="text-base font-bold">{title}</h1>
                    <p className="text-yellow-600 text-base font-bold">${price}</p>
                </div>
                <p className="">{desc}</p>
            </div>
        </div>
    )
}

export { Menu }
