import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex items-center">
          <h1 className="text-5xl text-darkblue mb-4">Projects</h1>
        </div>


        <div className="grid grid-cols-3 gap-4">

          <div className="w-full aspect-[9/16] bg-black relative">
            <div className="w-full h-full bg-contain bg-center ">
              <Image
                src="/static/image/proje1.png"
                alt="project1"
                width={2560}
                height={1440}
                className="z-0 object-container w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-darkblue/60 backdrop-blur-sm text-gray-200 p-2 z-10">
                <p className="break-words">
                  Java clustering project visualizing data points and centroids to demonstrate unsupervised learning
                </p>
              </div>
            </div>


          </div>
          <div className="w-full aspect-[9/16] bg-black">
            
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
          <div className="w-full aspect-[9/16] bg-black">
          </div>
        </div>
      </div>
      
    </section>
    
  
  );
}