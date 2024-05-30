import React from 'react'
import { useNavigate } from 'react-router-dom';
const colors = [
  { name: 'Blue', shades: ['#1E3A8A', '#2563EB', '#3B82F6', '#93C5FD', '#DBEAFE'] },
  { name: 'Red', shades: ['#7F1D1D', '#B91C1C', '#EF4444', '#FCA5A5', '#FEE2E2'] },
  { name: 'Green', shades: ['#064E3B', '#059669', '#10B981', '#6EE7B7', '#D1FAE5'] },
  { name: 'Purple', shades: ['#4C1D95', '#6D28D9', '#8B5CF6', '#C4B5FD', '#EDE9FE'] },
  { name: 'Yellow', shades: ['#78350F', '#D97706', '#F59E0B', '#FCD34D', '#FEF3C7'] },
  { name: 'Pink', shades: ['#831843', '#DB2777', '#EC4899', '#F9A8D4', '#FCE7F3'] },
];
const ColorShades = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className='flex flex-col mb-8 md:flex-row items-start'>
          <p className="text-gray-700 dark:text-gray-400 mb-4 md:mb-0 flex-1">
            Color shades are lighter and darker variations of a particular color. While in color theory, a "shade" is created by adding black and a "tint" is made by adding white, "shade" generally refers to the whole range of possible colors.
          </p>
          <button  onClick={() => navigate('/color-shades/generate')} className='bg-gray-800 hover:bg-gray-900 transition duration-200 rounded px-3 py-2 text-white '>
            Custom Generate
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map(color => (
            <div onClick={() => navigate(`/color-shades/${color.name}`)} key={color.name} className="bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-row-5">
                {color.shades.map((shade, index) => (
                  <div key={index} className="h-10" style={{ backgroundColor: shade }}></div>
                ))}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold dark:text-white text-gray-800">{color.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ColorShades
