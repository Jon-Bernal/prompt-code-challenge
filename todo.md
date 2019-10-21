Notes:

1. Use essay data API URL: https://content-staging.prompt.com | Token: 9e70f6d0114903e346004714595e80c5c7fdc3dc
2. Create a frontend application that consumes the prompt essay data api to display a list of essays for a university
3. prompts that are displayed should be editable, but edits do not need to get posted back to a server anywhere (track edits in frontend state)

4. An essay is a written response a college requires as part of their application. An essay must have one or more prompt options.
5. A prompt (in addition to be an awesome company) is the writing prompt that a student chooses to respond to when crafting an essay. There can be more than one prompt option for an essay, and the same prompt may be an option for multiple essays that a university accepts. 
6. Do not create a backend
7. 


Todo:
| | retrive essays that a university requires from the prompt essay data api
| | Display essays in a way that a prospective student can understand
| | display data for multiple schools
| | data for only one school visible at any given time

| | Student can determine which essays are required or optional as part of their application, including the name of each essay
| | determine the prompt(s) that they can respond to in writing each essay.  You can assume that students are to choose exactly one prompt option for each essay.
| | determine max and min length requirements for an essay
    | | in our essay data, length requirements are associated with prompts. Ignore edge case that have varying word counts for different prompt options on the same essay and assume word counts for all prompt options on an essay are the same
| | Deteremine the name of the topic that prompt has associated with each prompt
| | Edit a prompt and have their edits stick until they refresh the page
    | | **If the same prompt is an option for more than one essay, editing it in one place should also update it's display in all other essays.
|x| Use a framework (react)
| | must be able to run it using npm start or other instructions you provide

| | Display info for three universities
    | | Michigan State University. IPED: 171100
    | | Georgetown. IPED: 131496
    | | Prompt University. IPED: 98765