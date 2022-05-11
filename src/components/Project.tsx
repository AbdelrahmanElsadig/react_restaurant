import React, { useState } from 'react';
import { Buttons } from './Buttons';
import { Menu } from './Menu';
import { dishes } from '../data/data';

const Project = () => {
    const [items, setItems] = useState(dishes);

    function all() {
        setItems(dishes);
    }
    function breakfast() {
        setItems(dishes.filter(item => item.category === 'breakfast'));
    }
    function lunch() {
        setItems(dishes.filter(item => item.category === 'lunch'));
    }
    function shakes() {
        setItems(dishes.filter(item => item.category === 'shakes'));
    }


    return (
        <div className="container flex flex-col gap-4 mx-auto mb-16 items-center mt-12">
            <h1 className="pb-2 w-fit relative text-4xl font-bold after:h-1 after:w-1/2
            after:left-1/4 after:bottom-0 after:absolute after:bg-yellow-600">Our Menu</h1>
            <Buttons functions={{ all, breakfast, lunch, shakes }} />
            <Menu items={items} />


        </div>
    )
}

export { Project }
