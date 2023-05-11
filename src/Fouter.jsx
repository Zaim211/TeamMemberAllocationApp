const Fouter = () => {

  var today = new Date;
  
  return(
    <fouter className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocattion App - {today.getFullYear()}</h1>
      </div>
        </div>
    </fouter>
  )
}
export default Fouter