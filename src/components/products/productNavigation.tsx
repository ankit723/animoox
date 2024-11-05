'use client';
import React, { useState } from 'react'
import { SearchIcon } from '@/assets/icons/search-icon'
import DropdownIcon from '@/assets/icons/dropdown-icon'

const ProductNavigation = (
  {
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSearchQuery, 
    selectedDropdownOption, 
    setSelectedDropdownOption, 
    dropdownOpen, 
    setDropdownOpen
  }:any
) => {
  // Categories array for easy addition or removal
  const categories = ['All', 'Lottie', 'Animation', 'Icons']
  const dropdownOptions = ['Latest', 'Trending', 'Featured']

  // Handle category click
  const handleCategoryClick = (category:any) => {
    setActiveCategory(category)
  }

  // Handle search input change
  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value)
  }

  // Handle dropdown selection
  const handleDropdownSelect = (option:any) => {
    setSelectedDropdownOption(option)
    setDropdownOpen(false)
  }

  return (
    <nav className="bg-white w-full flex justify-between px-5 py-3 rounded-full mt-12 mb-10">
      <div className="flex gap-3">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category ? 'bg-brand text-white' : 'bg-[#F3FBFF] text-brand'
            } cursor-pointer rounded-full py-1 px-6 flex justify-center items-center`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex gap-3 relative">
        <div className="absolute top-[0.8rem] left-4">
          <SearchIcon className='' />
        </div>
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-[#F3FBFF] w-full py-3 pl-12 rounded-full placeholder:text-[rgba(9,29,246,0.50)] border-none"
        />

        <div
          className="bg-[#F3FBFF] text-brand rounded-full py-1 px-6 flex justify-center items-center relative cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedDropdownOption}
          <DropdownIcon />
          
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="dropdown absolute top-full mt-2 left-0 flex flex-col items-start gap-2 py-2 px-8 text-brand bg-[#F3FBFF] rounded-lg shadow-lg z-10">
              {dropdownOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleDropdownSelect(option)}
                  className="cursor-pointer hover:bg-[#E2F4FD] px-2 py-1 rounded"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default ProductNavigation
