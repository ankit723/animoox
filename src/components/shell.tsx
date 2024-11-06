import React from 'react'

export default function Shell({
    children,
    heading,
    subHeading,
    heading2=""
}: {
    children: React.ReactNode
    heading: string
    subHeading: string
    heading2: string
}) {
    return (
        <main className="flex flex-col justify-center items-center">
            <h1>
                {heading}
            </h1>
            <h4 className="text-xl text-secondary-text">
                {subHeading}
            </h4>
            {children}
        </main>
    )
}
