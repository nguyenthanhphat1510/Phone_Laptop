import React from 'react'
import exploreMenuImage from '../../assets/explore_menu.jpg';
import defaultProductImage from '../../assets/default_product.jpg';

const ExploreMenu = () => {
  return (
    <div>
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Discover Your Next Smartphone
          </h1>
          <p className="text-gray-600 md:w-3/4">
            Explore our wide range of smartphones with cutting-edge technology,
            stunning designs, and exceptional performance. Whether you are
            looking for the latest flagship model or a budget-friendly device,
            we have something for everyone.
          </p>
          <button className="mt-4 px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700">
            Shop Now
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={exploreMenuImage} 
            alt="Food Dish"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="p-8 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explore Our Shop
        </h2>
        <p className="text-gray-600 mb-8">
          Browse through our various categories to find the perfect smartphone
          that suits your needs.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            <div className="flex flex-col items-center bg-white p-4 rounded-lg">
                <img
                  src={defaultProductImage}
                  className="w-16 h-16 object-cover rounded-full mb-4"
                />
                <h3 className="text-md font-semibold text-gray-700">
              </h3>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ExploreMenu