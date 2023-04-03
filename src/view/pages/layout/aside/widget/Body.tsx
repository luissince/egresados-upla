import React from 'react';

type Props = {
    refAside: React.RefObject<HTMLInputElement>,
    children: React.ReactNode,
}

const Body = (props: Props) => {

    return (
        <aside
            id="Aside"
            ref={props.refAside}
            className="
            drop-shadow
            bg-gray-900
            w-[256px] 
            ml-[-256px]
            md:ml-[0px]
            transition-all
            duration-500
            z-50                
            overflow-auto 
            fixed 
            block 
            h-screen  
            font-mont"
            aria-label="Sidebar"
        >
            {props.children}
        </aside>
    );

}

export default Body;