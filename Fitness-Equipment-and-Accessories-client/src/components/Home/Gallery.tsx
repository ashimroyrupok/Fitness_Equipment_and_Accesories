import Container from "@/components/shared/Container";

const Gallery = () => {
  return (
    <div className="mb-8">
      <Container>
        <div className="flex flex-col gapy-y-3 mb-5 ">
          <h1 className="text-4xl  text-white lg:px-5 font-semibold mx-auto">
            Our Featured Gallery
          </h1>
        
        </div>

        <div className="grid grid-cols-4 gap-2 lg:px-5">
          <img
            src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1578924608828-79a71150f711?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />
          <img
            src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1597786797107-1799e7e79f57?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />

          <img
            src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />
          <img
            src="https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1666121363683-1f03bf2e0cc1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
