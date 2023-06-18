import { faker } from "@faker-js/faker";

export function createRandomUsers(count = 10) {
  const roles = ["admin", "user", "manager"];
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      uid: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      memberSince: faker.date.past(),
      avatar: faker.image.avatar(),
      location: `${faker.location.city()}, ${faker.location.country()}-${faker.location.countryCode()}`,
      role: roles[Math.floor(Math.random() * roles.length)],
    };
    users.push(user);
  }
  return users;
}
