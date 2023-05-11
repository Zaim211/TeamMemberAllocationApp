const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}) => {
  return(
    employee.map((employees) => (
      <TeamMemberCard  employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
    ))
}
export default TeamMembers;