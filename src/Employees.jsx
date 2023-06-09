import Teams from './Teams'
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'


const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

  return(
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
      <div className="col-8">
       <Teams selectedTeam={selectedTeam} handleTeamSelectionChange=  
          {handleTeamSelectionChange}/>
      </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
      <div class="col-8">
      <div className="card-collection">
        {
          employees.map((employee) => (
            <div key={employee.id} id={employee.id} className={(employee.teamName === 
          selectedTeam ? 'card m-2 standout': 'card                 m-2')} style= 
          {{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
              
              {(employee.gender === "male") ? <img src={maleProfile}  className="card 
           img-top"/>:<img src=    
              {femaleProfile}  className="card img-top"/>}
              
                <div className="card-body">
                <h5 className="card-title"><em>fullName: {employee.fullName}</em></h5>
                <p className="card-text"><b>designation: {employee.designation}</b></p>
                </div> 
            </div>
          ))
        }
      </div>
      </div>
      </div>
    </main>
  )
}
export default Employees;