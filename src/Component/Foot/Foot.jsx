export default function Foot() {

    return (
  <footer className='bg-main-light py-2  bottom-0 end-0 start-0 position-absolute  w-100 '>
    <div className='container'>
      <h4>Get the FreshChart app</h4>
      <p>we will send you a link, open it in your phone to download the app</p>
      <div className='d-flex'>
        <div className='col-sm-10'>
        <input type="text" class="form-control py-2"  placeholder='Email...'/>
    </div>
    <div className='col-sm-2 px-3'>
      <button className='btn w-100 bg-main text-white'>Share App Link</button>
    </div>
  
      </div>
      <div className='line border-bottom border-2 my-1'></div>
      </div>
   
  </footer>
    )
  }