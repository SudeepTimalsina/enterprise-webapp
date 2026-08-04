"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient, PROJECTS_QUERY } from "@enterprise-webapp/graphql";
import { ProjectCard } from "@enterprise-webapp/ui";
import CreateProjectForm from "../components/createProjectForm";

export default function Projects() {
    const { data, isLoading } = useQuery({ queryKey: ["projects"], queryFn: () => graphqlClient.request(PROJECTS_QUERY) });

    if (isLoading)
        return <p>Loading...</p>

    return (
        <>
            <h1 className="text-3xl font-bold my-4">Projects</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    data?.projects.map(
                        (project: any) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        )
                    )
                }
            </div>
            <CreateProjectForm />

        </>

    )

}