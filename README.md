# Getting Started With My Project!

## Week 3


### ES6 Usage Examples

In this project, I used the following EC6 features:

Arrow Function from line 9 of List.tsx: <pre><code>const linkPress = (course: string) => {
      store.dispatch(actions.addCourse(course));
      console.log(store.getState())
  }</code></pre>

Destructuring from line 23 of App.tsx: <pre><code>const [courses, setCourses] = useState([])</code></pre>

Default from line 5 of reducer.js: <pre><code>export default function reducer(state = [], action) {}</code></pre>

Let from line 10 of Item.tsx: <pre><code>let path = useLocation().pathname.substr(6);</code></pre>

This is the extent of my EC6 feature usage in this project.

### Typescript

Typescript is involved in the project, but do not worry, simply using ```npm install``` when you enter the project solves any sort of dependency problems. To install typescript in a react-app of your own, visit this [link.](https://create-react-app.dev/docs/adding-typescript/)

### Ternary

[Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is used to check a condition that returns a boolean, and then executes code based on whether it is true or false. Ternary can look at a boolean directly, or it can look at a comparison, as it always resorts to a boolean. 

### State

State is used to update a component. Updating a component re-renders it, but with the re-rendered value. </br>
For example, in the following code, we will destructure our state variable and our component-updating function (as described in the [docs](https://reactjs.org/docs/hooks-state.html)) and give it an initial value of a an empty array. In our actual code, we fill this array with a 7-piece data-set, so we will not include it here. Can be found on line 23 of App.tsx.
</br>

<code>const [courses, setCourses] = useState([])</code>

### How It Works

My app is simple and introduces the use of redux, but not in a way that is meaningful yet. Redux is a new topic, and I have implemented into some buttons the logic required to dispatch into state the name of the current course selected. I have provided a back button that returns to the list, and filters through the state and pulls the course out of state. I see that when state is changed in Redux, we may have to re-render a component to see it. I will leave that for another time. The react router dom handles requests from the url paramaters. I made a courses array in state, sent it as props down to both list and item. I used list to handle the ``` /list ``` url, and item to handle any paramater after the list url, like ``` /list/COMP-3330 ```. I use the paramater in item to filter through the courses array and grab the correct course. I then map the course into an ``` h1 ``` tag and a ``` span ``` tag.
I have also added a state tracker on the page, you will see that the state matches the name of the course displayed. This is because I have included some logic inside of the onClick for the list: 

<pre><code>const linkPress = (course: string) => {
      store.dispatch(actions.addCourse(course));
      console.log(store.getState())
  }</code></pre>
  
What this does is take in the course from the link, put it into state, and log the new state. This new state is what is being read in Item.tsx on lines 30-32. When we want to return to our list, I have included a back button from [material-icons](https://mui.com/components/material-icons/). The logic placed in this back button is what is called that allows our state to be updated and the current course removed.

<pre><code>const onBack = () => {
        store.dispatch(actions.removeCourse(courses.filter(course => course.course === path)[0]))
        console.log(store.getState())
    }</code></pre>

Overall, I am starting to see the big picture with react redux, and look forward to potentially building it into a larger project. More study on Redux will be needed.

Please feel free to check out my website too, which is currently just a work in progress. [RyanColl](https://www.rcoll-dev.com)