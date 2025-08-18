import React from 'react'

export default function ImageTest() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Image Test Component</h2>
      <p className="mb-4">Testing if images load correctly after deployment:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Image 1</h3>
          <img 
            src="/images/image1.png" 
            alt="Test Image 1"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Failed to load image1.png');
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image 1 loaded successfully')}
          />
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Image 2</h3>
          <img 
            src="/images/image2.png" 
            alt="Test Image 2"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Failed to load image2.png');
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image 2 loaded successfully')}
          />
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Image 3</h3>
          <img 
            src="/images/image3.png" 
            alt="Test Image 3"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Failed to load image3.png');
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image 3 loaded successfully')}
          />
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Debug Information:</h3>
        <p className="text-sm text-gray-600">
          • Check browser console for image load/error messages<br/>
          • Images should be served from: <code>/images/</code><br/>
          • If images don't load, check Vercel deployment settings
        </p>
      </div>
    </div>
  )
}


