import React from 'react'

interface TextProps {
    text: string
}

const Text = ({ text }: TextProps) => {
    return (
        <p>{text}</p>
    )
}

export default Text
