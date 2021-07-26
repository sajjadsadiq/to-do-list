import React from 'react'

interface IProps {
    name: string,
}

export default function Todo({name} : IProps) {
    return (
        <div className="todoBox">
            <form className="todoBoxContent">
                <strong> 
                    <input type="checkbox" className="check"/> 
                </strong>
                <label className="checkTitle">{name}</label>
            </form>    
        </div>
    )
}
