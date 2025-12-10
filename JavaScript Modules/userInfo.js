const user = {
  firstName: "Jolivet",
  lastName: "Shema",
  age: 24,
  city: "Kigali",
  skills: ["React", "Node.js", "UI/UX"],
};

const { firstName, lastName, age, country, skills } = user;

console.log(
  `${firstName} ${lastName} is ${age} years old, lives in ${country}, and has skills: ${skills.join(", ")}.`
);
