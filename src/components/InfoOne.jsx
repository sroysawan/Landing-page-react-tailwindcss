function InfoOne() {
  return (
    <div className="container mx-auto flex items-center py-16">
        <div className="w-1/2">
            <img 
                src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2fGVufDB8fDB8fHww" 
                alt="" 
                className="w-full h-auto rounded-lg"        
            />
        </div>
        <div className="w-1/2 px-6">
            <h2 className="text-3xl font-semibold">Welcome to Our Website</h2>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste repellendus blanditiis deserunt, enim dolore nisi voluptas a cumque inventore.</p>
        </div>
    </div>
  )
}

export default InfoOne