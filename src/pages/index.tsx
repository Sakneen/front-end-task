import Navbar from './../components/Navbar';
import Home from '@/components/Home';
import Images from '@/components/Images';


const index = ({ products }: any) => {
  return (
    <div className="app">
      <Navbar />
      <main className=' container mt-5 pt-5'>

        <h3 className=' fw-bold'>Dashboard</h3>
        <div className=' text-secondary d-flex bg-white pt-1 rounded-1'>
          <i className="fa-solid fa-house mx-2  "></i>
          <h6 className=' mx-2 mb-0 text-decoration-underline'>Home</h6>
          <div className=' mx-2 mb-0'><span>{'>'}</span></div>
          <h6 className=' mx-2 mb-0'>Dashboard</h6>
        </div>

        <div className=' d-flex py-4'>
          <h5 className=' fw-bold pt-1 m-0'>Filters by ID:</h5>
          <input className='px-2 ms-4 border-0 rounded-1' type="text" placeholder='ex: 45785' />
        </div>

        <div className=' shadow '>
          <div className=" row p-3">
                  <div className=" col-sm-2">
                      <h6>Unit ID</h6>
                  </div>
                  <div className=" col-sm-2">
                      <h6>Unit type</h6>
                  </div>
                  <div className=" col-sm-2">
                      <h6>Price</h6>
                  </div>
                  <div className=" col-sm-2">
                      <h6>Build up area</h6>
                  </div>
                  <div className=" col-sm-2">
                      <h6>For sale</h6>
                  </div>
                  <div className=" col-sm-2">
                      <h6>Gallery</h6>
                  </div>
          
              </div>
          
          {
            products.map((product: any) => <Home key={product._id} product={product} />)
          }
        </div>

        <div>
          <Images/>
        </div>

      </main>


    </div>
  );
}

export default index;

export async function getStaticProps() {
  const req = await fetch("http://localhost:3005/listings")
  const results = await req.json()
  const products = results.slice(0, 5)
  return {
    props: { products }
  }
}