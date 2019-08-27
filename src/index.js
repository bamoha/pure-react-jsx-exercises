import React from 'react';
import ReactDom from 'react-dom';

// function SayHello() {
//     return (
//         <div className='book' >
//             <div className='title' >
//                 The Title
//             </div>
//             <div className='author' >
//                 The Author
//             </div>
//             <ul className='stats' >
//                 <li className='rating' >
//                     5 stars
//             </li>
//                 <li className='isbn' >
//                     12-345678-910
//             </li>
//             </ul>
//         </div>
//     )
// }

function Greetings() {
    let username = "root";
    // let username = undefined;
    // let username = null;
    // let username = false;

    return (
        <div className='book' >
            <div className='title' >
                Hello {username}
            </div>
            <div className='author' >
                The Author
            </div>
            <ul className='stats' >
                <li className='rating' >
                    5 stars
            </li>
                <li className='isbn' >
                    12-345678-910
            </li>
            </ul>
        </div>
    )
}

ReactDom.render(<Greetings />, document.querySelector('#root'))