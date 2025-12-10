const students = [
  { id: 1, name: "Jolivet", age: 24 },
  { id: 2, name: "Aline", age: 21 },
  { id: 3, name: "Kevin", age: 28 },
  { id: 4, name: "Sarah", age: 19 }
];

export const searchById = (id) => {
  const result = students.find(s => s.id === id);
  return result || "Student not found";
};

export const searchByName = (name) => {
  const lower = name.toLowerCase();
  const result = students.find(s => s.name.toLowerCase() === lower);
  return result || "No student with that name";
};

export const filterByAge = (minAge) => {
  return students.filter(s => s.age >= minAge);
};
