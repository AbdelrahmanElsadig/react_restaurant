import React from 'react'

const Buttons = (props: any) => {
    return (
        <div>
            <div className="flex gap-4">
                <Button text='All' onClick={() => props.functions.all()} />
                <Button text='Breakfast' onClick={() => props.functions.breakfast()} />
                <Button text='Lunch' onClick={() => props.functions.lunch()} />
                <Button text='Shakes' onClick={() => props.functions.shakes()} />
            </div>

        </div>
    )
}


function Button(props: any) {
    return (
        <button onClick={() => props.onClick()} className="text-yellow-600 text-lg py-2 px-2 rounded-md bg-none duration-200 ease-in-out
        hover:bg-yellow-600 hover:text-white">{props.text}</button>
    )
}

export { Buttons }
