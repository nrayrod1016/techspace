import "./Landing.css"

const Landing = ({user}) => {
  return (
   <>
    

<div class="container mb-3">
  <div class="row">
    <div class="col"></div>
    <div class="col text-white">
    hello, {user ? user.name : "friend"} !
    </div><div class="col">
    
    </div>
  </div>
</div>

<div class="container">
      <div class="row mt-5">
        <div class="col-md-6 text-white mt-5">
          <h1 class="mt-5">
            <strong>
             Discuss the Latest news in the Tech world on 
              <span className="sub-title"> <br/>Name Here</span>
            </strong>
          </h1>
          <p class="mt-5">
            Tons of topics from various people all over the globe. Create awesome
            convos with others.
          </p>
          <button type="button" class="btn btn-danger btn-lg mt-4">
            Get Started With Name Here
          </button>
        </div>
        <div class="col-md-6 mt-5 ml-5">
          <img
            src="https://i.postimg.cc/3wBfBHnB/music.png"
            class="mt-5 ml-5"
            width="340px"
            height="380px"
            
          />
        </div>
      </div>
    </div>

  </>
  
  )
}
 
export default Landing