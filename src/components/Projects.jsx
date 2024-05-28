import React from "react";
import { useState, useEffect } from "react";

function Projects() {

    const [ projects, setProjects ] = useState([]);
    const [ dbProjects, setDbProjects ] = useState([]);
    const [ requestProject, setRequestProject ] = useState ({
        projectTitle: "", 
        shortDesc: "", 
        asA: "", 
        iWant: "", 
        soThat: "", 
        userStory: "", 
        name: "", 
        email: ""
    });

    const fetchProjectsFromDatabase = () => {
        fetch("http://localhost:3000/projects")
            .then(response => response.json())
            .then(data => setDbProjects(data));
        };

    useEffect(() => {
        fetchProjectsFromDatabase();
    }, []);


    const onChangeRequestProject = event => {
        const { name, value } = event.target;
        setRequestProject(prevState => ({
            ...prevState,
            [name]: value,
        }));
    
        const { asA, iWant, soThat } = requestProject;
        if (asA && iWant && soThat) {
            setRequestProject(prevState => ({
                ...prevState,
                userStory: `As a ${asA}, I want ${iWant} so that ${soThat}.`
            }));
            }
        }

    const submitRequestProject = (event) => {
        event.preventDefault();
        console.log("Submitting Request:", requestProject);
        fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(requestProject)
        })
        .then(response => response.json())
        .then(newRequestInDb => {
            console.log("Response from server:", newRequestInDb);
            setProjects([...projects, newRequestInDb]);
            setRequestProject({
                projectTitle: "", 
                shortDesc: "", 
                asA: "", 
                iWant: "", 
                soThat: "", 
                userStory: "", 
                name: "", 
                email: ""
            });
            fetchProjectsFromDatabase();
        })
    };

    return (
        <div className="p-8 pt-96">
            <div className="pt-32">
                <h2 className="text-2xl font-bold mb-1">Completed Projects:</h2> <br />
                <p className="text-center">Completed Projects will be fetched here</p>
            </div>
            <br />
            <div>{/* db of completed projects */}</div>
            <br />
            <div className="max-w-lg mx-auto bg-gray-300 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-black font-bold mb-6">Request a Project:</h2>
            <form className="space-y-4" onSubmit={submitRequestProject}>
                <div className="flex items-center space-x-4">
                    <label className="text-sm block text-gray-700 w-1/4" htmlFor="projectTitle">Project Title</label>
                    <input className="flex-1 px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                        type="text" id="projectTitle" name="projectTitle" placeholder="type project title here" 
                        value={requestProject.projectTitle} onChange={onChangeRequestProject}/>
                </div>
                <div className="flex items-center space-x-4">
                    <label className="text-sm block text-gray-700 w-1/4" htmlFor="shortDesc">Short Description</label>
                    <textarea className="flex-1 px-3 py-2 border border-gray-300 rounded-md h-32 resize-none placeholder-xs" 
                        id="shortDesc" name="shortDesc" placeholder="**160 character limit" maxLength="160"
                        value={requestProject.shortDesc} onChange={onChangeRequestProject}></textarea>
                </div>
                <div className="flex items-start space-x-4">
                    <label className="text-sm block text-gray-700 w-1/4" htmlFor="userStory">User Story</label>
                    <div className="flex-1">
                        <div className="flex items-center space-x-4">
                            <label className="block text-gray-700" htmlFor="asA">As a</label>
                            <input className="flex-1 px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                                type="text" id="asA" name="asA" placeholder="enter role here" 
                                value={requestProject.asA} onChange={onChangeRequestProject} />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="block text-gray-700" htmlFor="iWant">I want</label>
                            <input className="flex-1 px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                                type="text" id="iWant" name="iWant" placeholder="enter desire here" 
                                value={requestProject.iWant} onChange={onChangeRequestProject}/>
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="block text-gray-700" htmlFor="soThat">So that</label>
                            <input className="flex-1 px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                                type="text" id="soThat" name="soThat" placeholder="enter reason here" 
                                value={requestProject.soThat} onChange={onChangeRequestProject}/>
                        </div>   
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl text-black font-bold mb-6">Your Details</h2>
                    <div className="flex items-start space-x-4">
                        <div className="flex-1">
                            <label className="text-sm block text-gray-700 w-1/4" htmlFor="name">Name</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                                type="text" id="name" name="name" placeholder="your name" 
                                value={requestProject.name} onChange={onChangeRequestProject}/>
                        </div>
                        <div className="flex-1">
                            <label className="text-sm block text-gray-700 w-1/4" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-xs" 
                                type="email" id="email" name="email" placeholder="your email" 
                                value={requestProject.email} onChange={onChangeRequestProject}/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-black-300 hover:bg-black-600 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
            <br />
            <br />
            <h2 className="text-2xl font-bold mb-1">Requested Projects:</h2>
            <br />
            <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-slate-500 w-full">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="border border-slate-600 text-gray-400 px-4 py-2 w-1/4">
                            Project Title</th>
                        <th className="border border-slate-600 text-gray-400 px-4 py-2 w-5/8">
                            User Story</th>
                        <th className="border border-slate-600 text-gray-400  px-4 py-2 w-1/6">
                            Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr className="bg-gray-300 even:bg-gray-200">
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                            Note Taker</td>
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm">
                            As a busy executive, I want to have an app that transcribes meetings in real time so that I can focus on the tasks and next steps. </td>
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                            Pending</td>
                    </tr>
                    <tr className="bg-gray-300 even:bg-gray-200">
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                            Game of Chores</td>
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm">
                            As a single working parent, I want to have a way to get my kids to do chores and win prizes so that I can have a nice glass of wine when I get home at night. </td>
                        <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                            Pending</td>
                    </tr> */}
                    {dbProjects.map((project, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}>
                            <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                                {project.projectTitle}
                            </td>
                            <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm">
                                {project.userStory}
                            </td>
                            <td className="border border-slate-600 text-gray-700 px-4 py-2 text-sm text-center">
                                Pending
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Projects;