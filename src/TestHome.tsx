import React from 'react'

interface TestHomeProps {

}

export const TestHome: React.FC<TestHomeProps> = ({}) => {
return (
 <div className="h-screen w-full flex-center">
        <div className="min-h-1/2 min-w-1/2 bg-purple-400 animate-pulse text--6xl font-bold font-sans">
            HOME
        </div>

 </div>
);
}
