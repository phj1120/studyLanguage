var info = {name: 'phj', age: 26, job: 'developer'}

console.log(info.name);
console.log(info["name"]);

// for..in..: 객체의 key 에 반복적으로 접근(이것 만으로 value 에 접근하는 방법 없음)
for (key in info) {
    console.log(`${key}: ${info[key]}`)
}

console.log(Object.entries(info))

// for..of..: 컬렉션 전용 반복문
for (const [key, value] of Object.entries(info)) {
    console.log(`${key}: ${value}`)
}

// in 과 of 차이
var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
    console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var value of iterable) {
    console.log(value); // 3, 5, 7
}