export default function Gallery() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR GALLERY</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Visual Journey of Our Dental Expertise
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore Dr Smiles Gallery showcasing Our Dedication To Exceptional Dental Care: Witness
            Smile Transformations, Advanced Treatments, And Happy Patients, Reflecting Our Commitment
            To Precision, Comfort, And Confident, Healthy Smiles.
          </p>
        </header>

        {/* Bento Grid Gallery - Matching the screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large square image (top left) */}
          <div className="md:col-span-6 row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dental examination"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Medium rectangle image (top right) */}
          <div className="md:col-span-6 aspect-[4/3] overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dental tools"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Small square image (middle right) */}
          <div className="md:col-span-3 aspect-square overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/4270086/pexels-photo-4270086.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smiling patient"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Small square image (middle right) */}
          <div className="md:col-span-3 aspect-square overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dental procedure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Medium rectangle image (bottom left) */}
          <div className="md:col-span-6 aspect-[4/3] overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/3985167/pexels-photo-3985167.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dental technology"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Small square image (bottom middle) */}
          <div className="md:col-span-3 aspect-square overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/6627528/pexels-photo-6627528.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dental consultation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Small square image (bottom right) */}
          <div className="md:col-span-3 aspect-square overflow-hidden rounded-xl group">
            <img
              src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Happy patient"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}