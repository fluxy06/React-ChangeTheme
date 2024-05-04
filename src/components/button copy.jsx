import React, { useState } from 'react';

export default function ButtonForm2({children, onClick}) {
    const ChangeClick = () => {
        onClick()
    }
    return (
        <div>
            <button id="but1" onClick={ChangeClick}>
                {children}
            </button>
        </div>
    );
}
