"use client";


import {
useForm
}
from "react-hook-form";


import {
zodResolver
}
from "@hookform/resolvers/zod";


import {
ProjectSchema
}
from "@enterprise-webapp/validation";


import {
useMutation,
useQueryClient
}
from "@tanstack/react-query";


import {
graphqlClient,
CREATE_PROJECT
}
from "@enterprise-webapp/graphql";
import { Button } from "@enterprise-webapp/ui";



export default function CreateProjectForm(){


const queryClient =
useQueryClient();


const mutation =
useMutation({

mutationFn:(data:any)=>
graphqlClient.request(
CREATE_PROJECT,
data
),


onSuccess(){

queryClient.invalidateQueries({
queryKey:["projects"]
});
form.reset();
}

});

const onSubmit = (data: any) => {
  console.log("Submitting...", data);
  mutation.mutate(data);
};



const form =
useForm({

resolver:zodResolver(ProjectSchema)

});



return (

<form onSubmit={form.handleSubmit(onSubmit, (e) => console.log("Validation errors:", e))} className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
<p className="text-lg font-semibold mt-4">Create Project</p>

<label htmlFor="name">Project Name</label>
<input className="border border-gray-300 rounded p-2"
{...form.register("name")}
placeholder="Project name"
/>
<span className="text-red-500 text-sm">{form.formState.errors.name?.message}</span>

<label htmlFor="description">Project Description</label>
<textarea
className="border border-gray-300 rounded p-2"
{...form.register("description")}
placeholder="Project description"
/>
<span className="text-red-500 text-sm">{form.formState.errors.description?.message}</span>

<Button type="submit">
Create
</Button>
</div>


</form>

)

}