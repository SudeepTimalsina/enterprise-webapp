export function ProjectCard({
    name,
    description,
    status
}: {
    name: string;
    description?: string;
    status: string;
}) {
    return (

        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="font-bold text-xl">
                {name}
            </h2>
            <p>
                {description}
            </p>
            <span>
                {status}
            </span>
        </div>

    )

}