import profilePic from './assets/profilePic.jpg'

function Student(){
    const students = [{id: 1, name: "Joseph Yuson", email: "josephyuson@gmail.com"}, 
                    {id: 2, name: "Joseph Yuson", email: "josephyuson@gmail.com"},
                    {id: 3, name: "Joseph Yuson", email: "josephyuson@gmail.com"},
                    {id: 4, name: "Joseph Yuson", email: "josephyuson@gmail.com"},
                    {id: 5, name: "Joseph Yuson", email: "josephyuson@gmail.com"},];

    const listOfStudent = students.map(students => <li key={students.id}> 
                                        {students.name} &nbsp; {students.email}</li>);
    return(
        <>
            {students.map((student) => (
                <div className = "card">
                    <img src ={profilePic} alt="Profile Picure"></img>
                    <p>{student.name}</p>
                    <p>{student.email}</p>
                </div>
            ))}
        </>
    );
}

export default Student