import React from 'react'
import GradientGrid from '../../components/GridBox/GradientGrid'

const colors = [
    { name: 'AliceBlue', colors: 'AliceBlue' },
    { name: 'AntiqueWhite', colors: 'AntiqueWhite' },
    { name: 'Aqua', colors: 'Aqua' },
    { name: 'Aquamarine', colors: 'Aquamarine' },
    { name: 'Azure', colors: 'Azure' },
    { name: 'Beige', colors: 'Beige' },
    { name: 'Bisque', colors: 'Bisque' },
    { name: 'Black', colors: 'Black' },
    { name: 'BlanchedAlmond', colors: 'BlanchedAlmond' },
    { name: 'Blue', colors: 'Blue' },
    { name: 'BlueViolet', colors: 'BlueViolet' },
    { name: 'Brown', colors: 'Brown' },
    { name: 'BurlyWood', colors: 'BurlyWood' },
    { name: 'CadetBlue', colors: 'CadetBlue' },
    { name: 'Chocolate', colors: 'Chocolate' },
];
const ColorShadesDetails = () => {
    return (
        <section>
            <p className="text-gray-700 mb-8">
                Shades of red based on their unique color values. Find the exact and unique red shade you are looking for in HTML and CSS.
            </p>
            <GradientGrid colors={colors} />
        </section>
    )
}

export default ColorShadesDetails
